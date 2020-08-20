$(document).ready(function() {

    var now = moment();
    var currentDay = moment().format("MMM Do yy");
    var justDay = moment().format("dddd");
    var justHour = moment().format("h:00 a");
    console.log(justHour);



    $("#currentDay").text(justDay + " " + currentDay);


    var leftCol = $(".myCol1");




    function makeCalendar() {
        var addRow = $("<div></div>");
        addRow.addClass("row border-dark myRow");
        $(".myContainer").append(addRow);

        var addCol1 = $("<div></div>");
        addCol1.addClass("col-2 border-dark myCol1");
        addRow.append(addCol1);


        var addCol2 = $("<input>");
        addCol2.addClass("col-8 border-dark text-center myCol2");
        addCol2.attr("placeholder", "Click here to type");
        addRow.append(addCol2);


        var addCol3 = $("<div></div>");
        addCol3.addClass("col-2 border-dark myCol3");
        addRow.append(addCol3);
    }




    for (var i = 6; i < 20; i++) {
        makeCalendar();


    }






})