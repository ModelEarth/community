

//function displayInfo(state,county,zip) {
//  let output = state + " " + county + " " + zip;
//  $("#info").html(output);
//}

var promises = [
    d3.csv("data/industry_ID_list.csv"),
    d3.tsv("data/c2.tsv"),
    
    //d3.tsv("data/c3.tsv"),
    d3.tsv("data/c4.tsv"),
    //d3.tsv("data/c5.tsv"),
    d3.tsv("data/c6.tsv"),
 
]

Promise.all(promises).then(ready)

function ready(values) {
    
    dataObject={}
    industryData = {
        'ActualRate': formatIndustryData(values[d3.select("#naics").node().value/2]),
    }
    /*
    //selecting the naics level
    $('#naics').change(function() {
        console.log( $(this).val());
        industryData = {
            'ActualRate': formatIndustryData(values[$(this).val()]),
        }
    })*/


    dataObject.industryData=industryData;  
    industryNames = {}
    values[0].forEach(function(item){
        industryNames[+item.relevant_naics] = item.industry_detail
    })
    dataObject.industryNames=industryNames;


    //dropdown population code
    drop_down_list();
    $("#state").change(drop_down_list);
    $(window).load(drop_down_list);


    //code for what happens when you choose the state and county from drop down
    d3.selectAll(".picklist").on("change",function(){
        dataObject.industryData= {
            'ActualRate': formatIndustryData(values[d3.select("#naics").node().value/2]),
        }
        d3.csv("data/county_ID_list.csv").then( function(consdata) {
            var filteredData = consdata.filter(function(d) {
                if(( d["abvr"] == d3.select("#state").node().value) && (d["county"]==d3.select("#county").node().value ))
                {   a = topRatesInFips(dataObject.industryData, dataObject.industryNames, String(d["id"]), 10, d3.select("#sortFactor").node().value)
                    console.log(a)
                    //console.log(d["id"])
                    
                    return a;
                } 

            })
        })
    });

}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Functions


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

//the code to give you the top n rows of data for a specific fips
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
    text="<br><br>"
    for (i = 0; i < howMany; i++) {
    text += i + ": " +top_data_list[i]['data_id']+", "+whichVal+": "+top_data_list[i][whichVal]+", rank: "+top_data_list[i]['rank']+"<br>";
    }
    document.getElementById("p1").innerHTML =text
    return top_data_list
}


function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value)
}






