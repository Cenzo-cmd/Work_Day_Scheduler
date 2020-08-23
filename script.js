$(document).ready(function() {

    var now = moment();
    var currentDay = moment().format("MMM Do yy");
    var justDay = moment().format("dddd");
    var currentTime = moment().format("LT");
    console.log(currentTime);
    var hourBlocks = [];

    $("#currentDay").text(justDay + " " + currentDay);
    $("#currentTime").text(currentTime);


    for (let hour = 7; hour < 23; hour++) {
        hourBlocks.push(moment({ hour }).format("hh:mma"));
    }

    hourBlocks.forEach(function(hourBlock) {
        elementId = hourBlock.replace(/:/, "");
        let storedItem = localStorage.getItem(elementId);
        var blockTime = moment(hourBlock, 'h:mm a');

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
        addCol2.addClass("mainContent");
        addCol2.attr("id", elementId);
        addCol2.val(storedItem);
        addRow.append(addCol2);


        var addCol3 = $("<div></div>");
        addCol3.addClass("col-2 border-dark myCol3");
        var addButton = $("<button>");
        addButton.addClass("saveButton");
        addCol3.append(addButton);
        addRow.append(addCol3);

        blockColor(blockTime, elementId);
    })

    var clearBtn = $("<button>" + "Clear All Saved Events" + "</button>");
    clearBtn.addClass("clearButton");
    $("#buttons").append(clearBtn);

    $(".saveButton").on("click", function() {
        let textInput = $(this).parent().siblings("input").val();
        var idEl = $(this).parent().siblings("input").attr("id");
        console.log("you clicked me");
        localStorage.setItem(idEl, textInput);
    })

    $(".clearButton").on("click", function() {
        localStorage.clear();
        location.reload();
    })

    function blockColor(blockTime, elementId) {
        if (now.isSame(blockTime, "hour")) {
            getIdEl = "#" + elementId;
            $(getIdEl).addClass("present");
        }
        if (now.isBefore(blockTime, "hour")) {
            getIdEl = "#" + elementId;
            $(getIdEl).addClass("future");
        }
        if (now.isAfter(blockTime, "hour")) {
            getIdEl = "#" + elementId;
            $(getIdEl).addClass("past");
        }
    }
})