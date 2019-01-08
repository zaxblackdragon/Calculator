$(document).ready(function () {
    var firstNum = 0;
    var secondNum = 0;
    var operator = "";
    var isCalculated = false;
    var isOperatorChosen = false;

    function initCalculator() {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        isOperatorChosen = false;
        isCalculated = false;
        results = 0;
        $(".equation-display, .solution-display").empty();
      };

// Checks to see if the solution is odd or even and displays that in the html - written in ES6
    const isEvenOrOdd = results => results % 2 === 0 ? $("#info-box").text("Your solution is an Even Number. ") : $("#info-box").text("Your solution is an Odd Number.");
        
// creates the first number if no operator has been chosen, then the second number after choosing the operator
    $(".btn-num").on("click", function () {
    // checks to see if the calculation has been run
        if (isCalculated) {
            return false;
    // If there is an operator already chosen, it will write secondNum
        } else if (isOperatorChosen) {
            secondNum += $(this).val();
    // once the operator is selected, then the secondNum gets written and added to the display, showing the equation that has been built
            $(".equation-display").text(parseInt(firstNum) + " " + operator + " " + parseInt(secondNum));
    // if no calculation and no operator, then create the firstNum
        } else {
            firstNum += $(this).val();
            $(".equation-display").text(parseInt(firstNum));
        }
    });

// Chooses the operator and displays in the html
    $(".btn-operator").on("click", function () {
        // Check if a first number has already been selected
        // Or we've already run a calculation, if so we just exit.
        if (!firstNum || isCalculated) {
            return true;
        };
        // isOperatorChosen is set to true in order to start the second number
        isOperatorChosen = true;
        // stores the value of the operator when the button is clicked
        operator = $(this).val();
        // Displays the start of the equation ie firstNum and operator to the html
        $(".equation-display").text(parseInt(firstNum) + " " + operator);
    });

// Executes the equation and displays the final solution right of the "=".
    $(".btn-equal").on("click", function () {
        // prevent recalculation over and over again
        if (isCalculated) {
            return false;
        };
        // Disabble the user's option of multiple clicks on the "=" button        
        isCalculated = true;
        
        // Convert string inputs to numbers for calculation
        firstNum = parseInt(firstNum, 10);
        secondNum = parseInt(secondNum, 10);
        
        // Switch statement to execute the desired equation
        switch (operator) {
            case "+":
                results = firstNum + secondNum;
                $(".solution-display").html(results)
                isEvenOrOdd(results);
                    break;
            case "-":
                results = firstNum - secondNum;
                $(".solution-display").html(results)
                isEvenOrOdd(results);
                    break;
            case "x":
                results = firstNum * secondNum;
                $(".solution-display").html(results)
                isEvenOrOdd(results);
                    break;
            case "/":
                results = firstNum / secondNum;
                $(".solution-display").html(results)
                isEvenOrOdd(results);
                    break;
        }
        // adds the "=" to the equation display
        $(".equation-display").append(" =");
    });

    // Clear button emptys the fields and resets the start of the process again
    $(".btn-clear").on("click", function () {
        // reloads the page everytime to clear any initial inputs
        location.reload();
        // initialises the app
        initCalculator();
    })
    initCalculator();
});