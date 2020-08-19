$(document).ready(function() {

    var now = moment();
    var currentDay = moment().format("MMM Do yy");
    var justDay = moment().format("dddd");



    $("#currentDay").text(justDay + " " + currentDay);


    var leftCol = $(".myCol1");

    function createRows() {
        var addRow = $("<div></div");
        addRow.addClass("row border-dark myRow");
        $(".myContainer").append(addRow);
    }

    function createCol1() {
        var addCol1 = $("<div></div>");
        addCol1.addClass("col-2 border-dark myCol1");
        $(".myRow").append(addCol1);
    }

    function createCol2() {
        var addCol2 = $("<input></input>");
        addCol2.addClass("col-8 border-dark text-center myCol2");
        addCol2.attr("placeholder", "Click here to type");
        $(".myRow").append(addCol2);
    }

    function createCol3() {
        var addCol3 = $("<div></div>");
        addCol3.addClass("col-2 border-dark myCol3");
        $(".myRow").append(addCol3);
    }



    for (var i = 6; i < 20; i++) {

        createRows();
        createCol1();
        createCol2();
        createCol3();


    }






})