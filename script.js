$(document).ready(function() {

    var now = moment();
    var currentDay = moment().format("MMM Do yy");
    var justDay = moment().format("dddd");
    var justHour = moment().format("hh:00 a");
    console.log(justHour);
    $("#currentDay").text(justDay + " " + currentDay);


    var leftCol = $(".myCol1");

    var hourBlocks = [];

    for (let hour = 7; hour < 23; hour++) {
        hourBlocks.push(moment({ hour }).format("hh:mma"));
        // console.log(hourBlocks);
    }

    hourBlocks.forEach(function(hourBlock) {
        let storedItem = localStorage.getItem(hourBlock);
        var blockTime = moment(hourBlock, 'h:mm a');
        // console.log(blockTime);

        var addRow = $("<div></div>");
        addRow.addClass("row border-dark myRow");
        $(".myContainer").append(addRow);

        var addCol1 = $("<div></div>");
        addCol1.addClass("col-2 border-dark myCol1");
        addCol1.text(hourBlock);
        addRow.append(addCol1);


        var addCol2 = $("<input>");
        addCol2.addClass("col-8 border-dark text-center myCol2");
        addCol2.attr("placeholder", "Click here to type");
        addCol2.attr("id", hourBlock);
        addCol2.val(storedItem);
        addRow.append(addCol2);


        var addCol3 = $("<div></div>");
        addCol3.addClass("col-2 border-dark myCol3");
        var addButton = $("<button>");
        addButton.addClass("saveButton");
        addCol3.append(addButton);
        addRow.append(addCol3);

        blockColor(blockTime);
    })




    $(".saveButton").on("click", function() {
        let textInput = $(this).parent().siblings("input").val();
        var idEl = $(this).parent().siblings("input").attr("id");

        localStorage.setItem(idEl, textInput);
    })

    function blockColor(blockTime) {
        if (now.isSame(blockTime, "hour")) {

            console.log("I am during");
        }
        if (now.isBefore(blockTime, "hour")) {

            console.log("I am before");
        }
        if (now.isAfter(blockTime, "hour")) {

            console.log("I am after");
        }
    }

})