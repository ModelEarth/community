import json, os, requests
import pandas as pd
import numpy as np

os.chdir('/Users/eloncha/Documents/GitHub/community/start/charts/input-output-sk')
'''api set-up
'''
base_url = 'https://smmtool.app.cloud.gov/api/'
api_headers = {'x-api-key':'lySopVteG11Ru0m5ucnRharYBWco1CIGWlxKvro0'}


def USEEIO_GET_MODEL_NAME():
    model_resp = requests.get(base_url + 'models', headers = api_headers)
    model_json = model_resp.json()
    return(model_json)


def USEEIO_GET_SECTOR_NAME(model):
    model_sector_resp = requests.get(base_url + '{0}/sectors'.format(model), headers=api_headers)
    model_sector_json = model_sector_resp.json()
    sector_ids, sector_names = [], []
    for i in model_sector_json:
        text_id = i['id'].split(sep = '/')
        sector_ids.append(text_id[0])
        sector_names.append(i['id'])
    return(sector_ids, sector_names)


def USEEIO_FIND_COLUMN_INDEX(model, sector):
    sector_ids, sector_names = USEEIO_GET_SECTOR_NAME(model)
    index, index_colname = [], []
    for s in sector:
        i = np.argwhere(np.array(sector_ids) == s)
        if i.shape[0] > 1:
            for n in np.arange(i.shape[0]):
                index.append(i[n][0])
                index_colname.append(sector_names[i[n][0]])
        else:
            index.append(i)
            index_colname.append(sector_names[i])

    return(index, index_colname)


def USEEIO_GET_MATRIX(model, matrix, sector, axis):
    '''obtain sector name (colname, rowname) for referencing and indexing
    '''
    sector_ids, \
    sector_names = USEEIO_GET_SECTOR_NAME(model)

    '''create a blank data frame to store output
    '''
    Mat = pd.DataFrame(data = None, index = sector_names)

    if sector == 'all':
        '''query all sectors, no sectoral specification needed
        '''
        i = 0
        for col in sector_names:
            Mat_resp = requests.get(base_url + '{0}/matrix/{1}?col={2}'.format(model, matrix, i), headers = api_headers)
            Mat[col] = Mat_resp.json()
            i += 1

    else:
        '''querying specified sectors, search for the index of specified industries
        '''
        index, \
        index_colname = USEEIO_FIND_COLUMN_INDEX(model, sector)

        for j in np.arange(np.array(index).shape[0]):
            if axis == 0:  # column query
                url = base_url + '{0}/matrix/{1}?col={2}'.format(model, matrix, index[j])
            elif axis == 1:  # row query
                url = base_url + '{0}/matrix/{1}?row={2}'.format(model, matrix, index[j])
            Mat_resp = requests.get(url.format(model, matrix, index[j]), headers = api_headers)
            Mat[index_colname[j]] = Mat_resp.json()

    return(Mat)


''' LaGrange Automotive Industry Input-Output Sankey '''

'''
Industry to include:
336111 - Automotive Manufacturing (230) index: 229
333613 - Mechanical power transmissions equipment manufacturing (183) index: 182
335910 - Battery Manufacturing (?)
335912 - Primary battery manufacturing (225) index: 224
'''


'''
json example:

var energyjson = {"nodes":[
{"name":"Industry A"},
{"name":"Input 1"},
{"name":"Output 1"}
],
"links":[
{"source":1,"target":0,"value":124.729},
{"source":0,"target":2,"value":124.729},
]};
'''

input_mat = USEEIO_GET_MATRIX(model = 'GAUSEEIO', matrix = 'A', sector = ['336111', '333613', '335912'], axis = 0).iloc[:, [0,2,4]]
output_mat = USEEIO_GET_MATRIX(model = 'GAUSEEIO', matrix = 'A', sector = ['336111', '333613', '335912'], axis = 1).iloc[:, [0,2,4]]


def BUILD_JSON_FOR_IO_SANKEY(input_mat,  output_mat, topn = 10):
    node_list, link_list = [], []

    '''append sectors to the beginning of node list
    '''
    for i in np.arange(input_mat.shape[1]):
        sector_name = input_mat.columns.values[i]
        sector_node = {'name': sector_name.split('/')[1].capitalize()}
        node_list.append(sector_node)

    cursor = input_mat.shape[1]  # sentinel
    for i in np.arange(input_mat.shape[1]):
        sorted_input_mat = input_mat.sort_values(by = sector_name, ascending = False).iloc[0:topn, i]
        sorted_output_mat = output_mat.sort_values(by = sector_name, ascending = False).iloc[0:topn, i]
        ##sorted_input_mat['99999/other/all'] = 1 - np.sum(sorted_input_mat)
        ##sorted_output_mat['99999/other/all'] = 1 - np.sum(sorted_output_mat)

        for j in np.arange(topn): # loop through all topn sectors and others for one industry
            input_industry_node = {'name': str(sorted_input_mat.index.values[j].split('/')[1]).capitalize() + ' ' + str(sorted_input_mat.index.values[j].split('/')[2])}
            output_industry_node = {'name': str(sorted_output_mat.index.values[j].split('/')[1]).capitalize() + ' ' + str(sorted_output_mat.index.values[j].split('/')[2])}
            '''avoid repeated node creation for same input/output sector
            '''
            node_pos1 = np.argwhere(np.array(node_list) == input_industry_node)
            node_pos2 = np.argwhere(np.array(node_list) == output_industry_node)

            if node_pos1.shape[0] == 0 : # new nodes
                node_list.append(input_industry_node)
                source_index = cursor
                cursor += 1
            elif node_pos1.shape[1] != 0: # node already exists
                source_index = node_pos1[0][0]

            input_link = {'source': int(source_index), 'target': int(i), 'value': float(np.round(sorted_input_mat[j] * 100.0, 2))}

            if node_pos2.shape[0] == 0 : # new nodes
                node_list.append(output_industry_node)
                outlet_index = cursor
                cursor += 1
            elif node_pos2.shape[1] != 0: # node already exists
                outlet_index = node_pos2[0][0]

            output_link = {'source': int(i), 'target': int(outlet_index), 'value': float(np.round(sorted_output_mat[j] * 100.0, 2))}

            link_list.append(input_link)
            link_list.append(output_link)


    js = {'nodes':node_list, 'links':link_list}

    with open('data/IO.js', 'w') as f:
        json.dump(js, f)

    return(js)


BUILD_JSON_FOR_IO_SANKEY(input_mat, output_mat, topn = 10)