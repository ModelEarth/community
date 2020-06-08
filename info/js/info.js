

//function displayInfo(state,county,zip) {
//	let output = state + " " + county + " " + zip;
//	$("#info").html(output);
//}

var promises = [

    d3.tsv("data/industry_byCounty_byType_20200425.tsv"),
    d3.csv("data/industry_ID_list.csv")
 
]

Promise.all(promises).then(ready)


function parseSubsetValues(entry, subsetKeys, randOffset) {
    subsets = {}
    subsetKeys.forEach(d=>{
        if (randOffset==true) {
            subsets[d] = +entry[d] + getRndPercentError() * +entry[d]
        } else {
            subsets[d] = +entry[d]
        }
    })
    return subsets
}

function ready(values) {
	industryData = {
	        'ActualRate': formatIndustryData(values[0]),
	        // 'DeltaRate': formatIndustryData(values[3])
	    }
	industryNames = {}
    values[1].forEach(function(item){
        industryNames[+item.relevant_naics] = item.industry_detail
    })
    //console.log(industryNames)
    countyFIPS = 13121
	//a = topRatesInFips(industryData, industryNames, String(countyFIPS), 5, "payann")
	a = topRatesInFips(industryData, industryNames, String(countyFIPS), 5, "payann")
	console.log(a)
}

function formatIndustryData(rawData) {
    // var industryByType = d3.map()
    var industryByType = {}

    subsetKeys = ['emp', 'payann', 'estab', 'ACID', 'ENRG', 'ETOX', 'EUTR', 'FOOD', 'GCC', 'HAPS', 'HAZW', 'HC',
    'HNC', 'HRSP', 'HTOX', 'JOBS', 'LAND', 'METL', 'MINE', 'MSW', 'NREN',
    'OZON', 'PEST', 'REN', 'SMOG', 'VADD', 'WATR']

    for (var i = 1; i<rawData.length; i++){

        entry = rawData[i]
        industryID = entry.relevant_naics

        if (industryID in industryByType) {
            industryByType[entry.relevant_naics][entry.id] = parseSubsetValues(entry, subsetKeys)
        } else {
            industryByType[entry.relevant_naics] = {}
            industryByType[entry.relevant_naics][entry.id] = parseSubsetValues(entry, subsetKeys)
        }
    }
    return industryByType
}

function topRatesInFips(dataSet, dataNames, fips, howMany, whichVal){

    rates_dict = {}
    rates_list = []

    selectedFIPS = fips

    Object.keys(dataSet.ActualRate).forEach( this_key=>{
        // this_key = parseInt(d.split("$")[1])
        if (this_key!=1){
            this_rate = dataSet.ActualRate[this_key]
            if (this_rate.hasOwnProperty(fips)){ 
                rates_dict[this_key] = parseFloat(this_rate[fips][whichVal])
                rates_list.push(parseFloat(this_rate[fips][whichVal]))
            } else {
                rates_dict[this_key] = 0.0
                rates_list.push(0.0)
            }
        }
    })

    rates_list = rates_list.sort(function(a,b) { return a - b}).reverse()

    top_data_list = []
    top_data_ids = []
    naCount = 1
    for (var i=0; i<howMany; i++) {
        id = parseInt(getKeyByValue(rates_dict, rates_list[i]))
        delete rates_dict[id]

        // console.log(rates_list)
        // console.log(rates_dict)
        // console.log(dataSet.ActualRate)
        // console.log(id)

        if (dataSet.ActualRate[id].hasOwnProperty(fips)) {
            rateInFips = dataSet.ActualRate[id][fips][whichVal]
        } else {
            rateInFips = 0
        }
        
        // var top
        if (rateInFips == null) {
            rateInFips = 1
            top_data_list.push(
                {'data_id': dataNames[id], [whichVal]: 1, 'rank': i}
            )
        } else if (rateInFips==0) {
            top_data_list.push(
                {'data_id': 'NA-' + naCount, [whichVal]: 1, 'rank': i}
            )
            naCount++

        } else {
            top_data_list.push(
                {'data_id': dataNames[id], [whichVal]: rateInFips, 'rank': i}
            )
            top_data_ids.push(id)
        }
    }

    // var viewOptions = getFormValues()
    // selectedDataID = parseInt(getKeyByValue(vizDataNames, viewOptions[0]))

    return top_data_list
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value)
}