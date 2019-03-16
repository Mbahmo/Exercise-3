$(document).ready(function () {
    var url = 'https://swapi.co/api/planets/?format=json';
    var page = 1;
    LoadData();
    $("#prev").on('click', function (prev) {
        --page;
        url = "https://swapi.co/api/planets/?format=json&page=" + page;
        
        LoadData();
    });
    $("#next").click(function (next) {
        ++page;
        url = "https://swapi.co/api/planets/?format=json&page=" + page;
        LoadData();
    });
    function LoadData() {
        if (page == 1) {
            $("#prev").css("visibility", "hidden");
        } else {
            $("#prev").css("visibility", "visible");
        }
        console.log(page);
        $("#results tbody").empty();
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            results: [],
            success: function (results, textStatus, jqXHR) {
                drawTable(results);
            }
        });
        function drawTable(results) {
            for (var i = 0; i < Object.keys(results.results).length; i++) {
                drawRow(i + 1, Object.values(results.results[i]));
            }
        }
        function drawRow(no, rowresults) {
            var row = $("<tr/>");
            $("#results tbody").append(row);
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
    }
});