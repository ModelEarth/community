

//function displayInfo(state,county,zip) {
//  let output = state + " " + county + " " + zip;
//  $("#info").html(output);
//}

var promises = [

    d3.tsv("data/c2.tsv"),
    d3.csv("data/industry_ID_list.csv")
 
]

Promise.all(promises).then(ready)


function parseSubsetValues(entry, subsetKeys, randOffset) {
    subsets = {}
    subsetKeys.forEach(d=>{
        if (randOffset==true) {
            subsets[d] = entry[d] + getRndPercentError() * +entry[d]
        } else {
            subsets[d] = entry[d]
        }
    })
    return subsets
}

function ready(values) {
    //console.log(values[0])
    dataObject={}
    industryData = {
            'ActualRate': formatIndustryData(values[0]),
            // 'DeltaRate': formatIndustryData(values[3])
        }
    dataObject.industryData=industryData;  
    industryNames = {}
    values[1].forEach(function(item){
        industryNames[+item.relevant_naics] = item.industry_detail
    })
    dataObject.industryNames=industryNames;
    //console.log(industryData)
    //countyFIPS = 4
    /////////////////////////////////////////////////////////////////////////////////////////
    /*let dropdown = $('#state-x');

    dropdown.empty();

    dropdown.append('<option selected="true" disabled>Choose State</option>');
    dropdown.prop('selectedIndex', 0);
    //dropdown.append('<option selected="true" disabled>Select Indicator</option>');
    //dropdown.prop('selectedIndex', 1);

    const url = './data/states.json';

    // Populate dropdown with list of provinces
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.FIPS).text(entry.Name));
        })
    });*/
    //$(document).ready(function(){
    $("#state").change(drop_down_list);
    //});

    $(window).load(drop_down_list);

    //////////////////////////////////////////////////////////////////////////////////////////

    countyFIPS = 13121
    //a = topRatesInFips(industryData, industryNames, String(countyFIPS), 5, "payann")
    a = topRatesInFips(dataObject.industryData, dataObject.industryNames, String(countyFIPS), 10, "payann")
    console.log(a)
}

// Drop down code from: https://www.bitrepository.com/dynamic-dependant-dropdown-list-us-states-counties.html
function drop_down_list(){
    var state = $('#state').val();

    if(state == 'AK' || state == 'DC') // Alaska and District Columbia have no counties
    {
    $('#county_drop_down').hide();
    $('#no_county_drop_down').show();
    }
    else
    {
    $('#loading_county_drop_down').show(); // Show the Loading...
    
    $('#county_drop_down').hide(); // Hide the drop down
    $('#no_county_drop_down').hide(); // Hide the "no counties" message (if it's the case)

    $.getScript("js/states/"+ state.toLowerCase() +".js", function(){

    populate(document.form.county);

    $('#loading_county_drop_down').hide(); // Hide the Loading...
    $('#county_drop_down').show(); // Show the drop down
    });
}
}
function formatIndustryData(rawData) {
    // var industryByType = d3.map()
    var industryByType = {}

    subsetKeys = ['emp', 'payann', 'estab', 'NAICS2012_TTL','GEO_TTL','state','COUNTY']

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






