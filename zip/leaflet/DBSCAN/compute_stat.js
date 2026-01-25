function compute_stat(data, columns) {
    var stats = [];

    var data_by_cluster = d3.nest()
        .key(function (d) {
            return d.cluster;
        })
        .entries(data);

    stats.num_cluster = data_by_cluster.length;
    var stat_summary = {};
    data_by_cluster.forEach(function(d){
        var cluster = [];
        cluster.id = d.key;
        cluster.num = d.values.length;

        columns.forEach(function(col){
            var array = [];
            d.values.forEach(function(row){
                array.push(row[col]);
            });

            cluster[col+"_stats"] = [];
            cluster[col+"_stats"].min = d3.min(array, function(d){return d});
            cluster[col+"_stats"].max = d3.max(array, function(d){return d});
            cluster[col+"_stats"].mean = Math.round(mean(array));
            cluster[col+"_stats"].variance = Math.round(variance(array));

            if(!stat_summary[col]){
                stat_summary[col] = [];
            }
            stat_summary[col].push(cluster[col+"_stats"].mean);
        });

        stats.push(cluster);
    });

    var temp = {};
    columns.forEach(function(col) {
        temp[col] = [d3.min(stat_summary[col], function(d){return d;}), d3.max(stat_summary[col], function(d){return d;})];
    });

    columns.forEach(function(col){
        stats.forEach(function(s){
            var t = s[col+"_stats"].mean;
            var min = temp[col][0];
            var max = temp[col][1];
            var colName = '';
            if (typeof col != 'undefined') {
                colName = col.replace('Jobs','');
            }
            
            if(min <= t && t <= min+((max-min)/3)){
                if(!s.desc){
                    s.desc = "<span class='bucketDesc'>Low " + colName + "</span>";
                } else {
                    s.desc += ", <span class='bucketDesc'>Low " + colName + "</span>";
                }
            }else if(min+((max-min)/3) < t && t  <= min+((max-min)*2/3)){
                if(!s.desc){
                    s.desc = "<span class='bucketDesc'>Medium " + colName + "</span>";
                } else {
                    s.desc += ", <span class='bucketDesc'>Medium " + colName + "</span>";
                }
            }else if(min+((max-min)*2/3) < t && t  <= max){
                if(!s.desc){
                    s.desc = "<span class='bucketDesc'>High " + colName + "</span>";
                } else {
                    s.desc += ", <span class='bucketDesc'>High " + colName + "</span>";
                }
            }
        });
    });
    return stats;
}

function mean(array) {
    return array.reduce((partial_sum, a) => partial_sum + a) / array.length;
}

function variance(array) {
    var m = mean(array);
    return mean(array.map(function (num) {
        return Math.pow(num - m, 2);
    }));
}