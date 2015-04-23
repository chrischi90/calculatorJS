$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };

	var number = "";
    var newNumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");

    //Number buttons
    $("#numbers a").not("#clear,#clearAll").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });

    //Operator buttons
    $("#operators a").not("#equals").click(function(){
		operator = $(this).text();
		newNumber = number;
		number = "";
		totaldiv.text("0");
    });

    //Clear and Clear All buttons
    $("#clear,#clearAll").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearAll") {
			newNumber = "";
		}
    });

    //Equal Button
    $("#equals").click(function(){
        number = parseInt(number,10);
        newNumber = parseInt(newNumber,10);
        var results;
        if (operator === "+"){
            results = newNumber + number;
        } else if (operator === "-"){
            results = newNumber - number;
        } else if (operator === "*"){
            results = newNumber * number;
        } else if (operator === "/"){
            results = newNumber / number;
        }

        //Output results and reset number and newNumber
        results = results.toString(10);
        totaldiv.text(results);
        testNumLength(results);
        number = "";
        newNumber = "";
});
});
