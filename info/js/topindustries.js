//default is state13 for GA, change that number to get data for other states
//the number after naics is the number of digits in the naics code
var promises = [
    d3.csv("data/industry_ID_list.csv"),
    d3.tsv("data/usa/GA/industries_state13_naics2.tsv"),
    //d3.tsv("data/c3.tsv"),
    d3.tsv("data/usa/GA/industries_state13_naics4.tsv"),
    //d3.tsv("data/c5.tsv"),
    d3.tsv("data/usa/GA/industries_state13_naics6.tsv"),
]


Promise.all(promises).then(ready);


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

    if(param["geo"]){
        geo=param["geo"]
        if (geo.includes(",")){
            geos=geo.split(",")
            fips=[]
            for (var i = 0; i<geos.length; i++){
                fips.push(geos[i].split("US")[1])
            }
        }else{
            fips = geo.split("US")[1]
        }
    }else{
        fips = 13285;
    }

    a = topRatesInFips(dataObject.industryData, dataObject.industryNames, fips, 20, d3.select("#catsort"))

    //code for what happens when you choose the state and county from drop down
    d3.selectAll(".picklist").on("change",function(){
        dataObject.industryData= {
            'ActualRate': formatIndustryData(values[d3.select("#naics").node().value/2]),
        }
            if (param["geo"]){
                geo=param["geo"]
                if (geo.includes(",")){
                    geos=geo.split(",")
                    fips=[]
                    for (var i = 0; i<geos.length; i++){
                        fips.push(geos[i].split("US")[1])
                    }
                }else{
                    fips = geo.split("US")[1]
                }
            }

        a = topRatesInFips(dataObject.industryData, dataObject.industryNames, fips, 20, d3.select("#catsort"))
        return a;
    });

}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Functions


//function for when the geo hash changes
function geoChanged(geo){
    if (geo.includes(",")){
        geos=geo.split(",")
        fips=[]
        for (var i = 0; i<geos.length; i++){
            fips.push(geos[i].split("US")[1])
        }
    }else{
        fips = geo.split("US")[1]
    }

    a = topRatesInFips(dataObject.industryData, dataObject.industryNames, fips, 20, d3.select("#catsort"))
}


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
    if(Array.isArray(fips)){
        for (var i = 0; i<fips.length; i++){
            Object.keys(dataSet.ActualRate).forEach( this_key=>{
                // this_key = parseInt(d.split("$")[1])
                if (this_key!=1){
                    this_rate = dataSet.ActualRate[this_key]
                    if (this_rate.hasOwnProperty(fips[i])){ 
                        if(rates_dict[this_key]){
                            rates_list.push(rates_dict[this_key]+parseFloat(this_rate[fips[i]][whichVal.node().value]))
                            rates_dict[this_key] = rates_dict[this_key]+parseFloat(this_rate[fips[i]][whichVal.node().value])      
                        }else{
                            rates_dict[this_key] = parseFloat(this_rate[fips[i]][whichVal.node().value])
                            rates_list.push(parseFloat(this_rate[fips[i]][whichVal.node().value]))
                        }
                        
                    } else {
                        if(rates_dict[this_key]){
                            rates_dict[this_key] = rates_dict[this_key]+0.0
                            rates_list.push(rates_dict[this_key]+0.0)
                        }else{
                        rates_dict[this_key] = 0.0
                        rates_list.push(0.0)
                        }
                    }
                }
            })  
        }
    }else{
        Object.keys(dataSet.ActualRate).forEach( this_key=>{
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
    }


    rates_list = rates_list.sort(function(a,b) { return a - b}).reverse()
    top_data_list = []
    top_data_ids = []
    naCount = 1
    x=Math.min(howMany,rates_list.length)

    if(Array.isArray(fips)){
        for (var i=0; i<rates_list.length; i++) {
            id = parseInt(getKeyByValue(rates_dict, rates_list[i]))
            delete rates_dict[id]
            rateInFips=0
            for (var j = 0; j<fips.length; j++){ 
                if(dataSet.ActualRate[id]){ 
                    if (dataSet.ActualRate[id].hasOwnProperty(fips[j])) {
                    rateInFips = rateInFips+parseFloat(dataSet.ActualRate[id][fips[j]][whichVal.node().value])
                    naicscode = dataSet.ActualRate[id][fips[j]]['relevant_naics']
                    } 
                }
            }

            if(dataNames[id]){
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
        }
    }else{
        for (var i=0; i<x; i++) {
            id = parseInt(getKeyByValue(rates_dict, rates_list[i]))
            delete rates_dict[id]

            if (dataSet.ActualRate[id].hasOwnProperty(fips)) {
                rateInFips = dataSet.ActualRate[id][fips][whichVal.node().value]
                naicscode = dataSet.ActualRate[id][fips]['relevant_naics']
            } else {
                rateInFips = 0
            }
            

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
    }


    let icon = "";
    let rightCol = "";
    let text = ""; // <b>Troup County</b><br><br>" // Moved to title
    y=Math.min(howMany, top_data_ids.length)
    for (i = 0; i < y; i++) {
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
    //document.getElementById("p1").innerHTML = "tri"
    document.getElementById("p1").innerHTML = "<div id='sector_list'>" + text + "</div>";

    return top_data_list;
}


function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value)
}






