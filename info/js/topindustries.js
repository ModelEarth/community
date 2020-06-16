

//function displayInfo(state,county,zip) {
//  let output = state + " " + county + " " + zip;
//  $("#info").html(output);
//}
var promises = [
    d3.csv("data/industry_ID_list.csv"),
    d3.tsv("data/states_processed/industries_state13_naics2.tsv"),
    //d3.tsv("data/c3.tsv"),
    d3.tsv("data/states_processed/industries_state13_naics4.tsv"),
    //d3.tsv("data/c5.tsv"),
    d3.tsv("data/states_processed/industries_state13_naics6.tsv"),
 
 
]

Promise.all(promises).then(ready)

function ready(values) {
    
    dataObject={}
    industryData = {
        'ActualRate': formatIndustryData(values[d3.select("#naics").node().value/2]),
    }

    dataObject.industryData=industryData;  
    industryNames = {}
    values[0].forEach(function(item){
        industryNames[+item.relevant_naics] = item.industry_detail
    })
    dataObject.industryNames=industryNames;

    // Quick hack
    let fips = 13285;
    if (param["geo"] == "US13001,US13005,US13127,US13161,US13229,US13305") { // Bioeconomy Planner
        fips = 13305; // Wayne County. To do: loop through array above.
        let theText ="Industries within Wayne County";
        //document.getElementById("infoHeader").text = "Industries within Wayne County";
        document.getElementById("p1").innerHTML = theText;
    }

    a = topRatesInFips(dataObject.industryData, dataObject.industryNames, String(fips), 20, d3.select("#sortFactor"))


    //code for what happens when you choose the state and county from drop down
    d3.selectAll(".picklist").on("change",function(){
        dataObject.industryData= {
            'ActualRate': formatIndustryData(values[d3.select("#naics").node().value/2]),
        }
 
        a = topRatesInFips(dataObject.industryData, dataObject.industryNames, String(fips), 20, d3.select("#sortFactor"))
        //console.log(a)
        return a;

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
    console.log(subsets)
}



function formatIndustryData(rawData) {
    // var industryByType = d3.map()
    var industryByType = {}

    subsetKeys = ['emp', 'payann', 'estab', 'NAICS2012_TTL','GEO_TTL','state','COUNTY','relevant_naics']

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
                rates_dict[this_key] = parseFloat(this_rate[fips][whichVal.node().value])
                rates_list.push(parseFloat(this_rate[fips][whichVal.node().value]))
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
    x=Math.min(howMany,rates_list.length)
    for (var i=0; i<x; i++) {
        id = parseInt(getKeyByValue(rates_dict, rates_list[i]))
        delete rates_dict[id]

        // console.log(rates_list)
        // console.log(rates_dict)
        // console.log(dataSet.ActualRate)
        // console.log(id)

        if (dataSet.ActualRate[id].hasOwnProperty(fips)) {
            rateInFips = dataSet.ActualRate[id][fips][whichVal.node().value]
            naicscode = dataSet.ActualRate[id][fips]['relevant_naics']
        } else {
            rateInFips = 0
        }
        
        // var top
        if (rateInFips == null) {
            rateInFips = 1
            top_data_list.push(
                {'data_id': dataNames[id], [whichVal.node().value]: 1,'NAICScode': 1, 'rank': i}
            )
        }  else {
            top_data_list.push(
                {'data_id': dataNames[id], [whichVal.node().value]: rateInFips,'NAICScode': naicscode, 'rank': i}
            )
            top_data_ids.push(id)
        }
    }

    // var viewOptions = getFormValues()
    // selectedDataID = parseInt(getKeyByValue(vizDataNames, viewOptions[0]))
    let icon = "";
    let rightCol = "";
    let text = ""; // <b>Troup County</b><br><br>" // Moved to title
    for (i = 0; i < x; i++) {
        icon = "<div class='caticon_left'><span class='material-icons'>thumb_up_alt</span></div>"
        rightCol = String(whichVal.node().options[whichVal.node().selectedIndex].text).slice(3, )+": "+Math.round(top_data_list[i][whichVal.node().value]);
        if(String(whichVal.node().value)=="payann"){
            //text += top_data_list[i]['NAICScode'] + ": <b>" +top_data_list[i]['data_id']+"</b>, "+String(whichVal.node().options[whichVal.node().selectedIndex].text).slice(3, )+": $"+String((top_data_list[i][whichVal.node().value]/1000).toFixed(2))+" million <br>";
            rightCol = "$" + String((top_data_list[i][whichVal.node().value]/1000).toFixed(2))+" million";
        }
        rightCol += " <img src='http://localhost:8887/community/impact/img/plus-minus.gif' class='plus-minus'>";
        //text += top_data_list[i]['NAICScode'] + ": <b>" +top_data_list[i]['data_id']+"</b>, "+String(whichVal.node().options[whichVal.node().selectedIndex].text).slice(3, )+": "+Math.round(top_data_list[i][whichVal.node().value])+"<br>";

        text += "<div class='row'><div class='cell'>" + icon + top_data_list[i]['NAICScode'] + "</div><div class='cell'>" + top_data_list[i]['data_id'] + "</div><div class='right'><div>" + rightCol + "</div></div></div>";
    }
    document.getElementById("p1").text = ""; // Clear initial.
    document.getElementById("p1").innerHTML = "<div id='sector_list'>" + text + "</div>";
    return top_data_list;
}


function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value)
}






