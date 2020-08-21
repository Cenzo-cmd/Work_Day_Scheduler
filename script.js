$(document).ready(function() {

    var now = moment();
    var currentDay = moment().format("MMM Do yy");
    var justDay = moment().format("dddd");
    var justHour = moment().format("h:00 a");
    console.log(justHour);



    $("#currentDay").text(justDay + " " + currentDay);


    var leftCol = $(".myCol1");

    var hourBlocks = [];

    for (let hour = 7; hour < 19; hour++) {
        hourBlocks.push(moment({ hour }).format("hh:mma"));
        // console.log(hourBlocks);
    }

    hourBlocks.forEach(function(hourBlocks) {


        console.log("these are the hour blocks" + hourBlocks);

        var addRow = $("<div></div>");
        addRow.addClass("row border-dark myRow");
        $(".myContainer").append(addRow);

        var addCol1 = $("<div></div>");
        addCol1.addClass("col-2 border-dark myCol1");
        addCol1.text(hourBlocks);
        addRow.append(addCol1);


        var addCol2 = $("<input>");
        addCol2.addClass("col-8 border-dark text-center myCol2");
        addCol2.attr("placeholder", "Click here to type");
        addCol2.attr("id", hourBlocks);
        addRow.append(addCol2);


        var addCol3 = $("<div></div>");
        addCol3.addClass("col-2 border-dark myCol3");
        var addButton = $("<button>");

        addButton.addClass("saveButton");

        addCol3.append(addButton);
        addRow.append(addCol3);

    })

})