$(document).ready(function () {
    $.ajax({
        url: 'https://swapi.co/api/planets/?format=json',
        type: "GET",
        dataType: "json",
        results : [],
        success: function (results, textStatus, jqXHR) {
            drawTable(results);
            // var length = 0;
            // for (var key in results) {
            //     if (results.hasOwnProperty(key)) {
            //         console.log(length);
            //         length++;
            //     }
            // }
            console.log(Object.keys(results.results).length);
            
        }
    });
    function drawTable(results) {
        for (var i = 0; i < Object.keys(results.results).length; i++) {
            drawRow(i, Object.values(results.results[i]));
        }
    }
    function drawRow(no, rowresults) {
        console.log(rowresults);
        var row = $("<tr/>");
        $("#results").append(row);
        row.append($("<td>" + no + "</td>"));
        row.append($("<td>" + rowresults[0] + "</td>"));
        row.append($("<td>" + rowresults[1] + "</td>"));
        row.append($("<td>" + rowresults[2] + "</td>"));
        row.append($("<td>" + rowresults[3] + "</td>"));
        row.append($("<td>" + rowresults[4] + "</td>"));
        row.append($("<td>" + rowresults[5] + "</td>"));
        row.append($("<td>" + rowresults[6] + "</td>"));
        row.append($("<td>" + rowresults[7] + "</td>"));
        row.append($("<td>" + rowresults[8] + "</td>"));
        row.append($("<td>" + rowresults[9] + "</td>"));
        row.append($("<td>" + rowresults[10] + "</td>"));
        row.append($("<td>" + rowresults[11] + "</td>"));
        row.append($("<td>" + rowresults[12] + "</td>"));
        row.append($("<td>" + rowresults[13] + "</td>"));
    }
});