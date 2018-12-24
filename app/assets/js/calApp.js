$(document).ready(function () {
    var firstNum = 0;
    var secondNum = 0;
    var isCalculated = false;
    var isOperatorChosen = false;
// creates the first number if no operator has been chosen
    $(".btn-num").on("click", function () {
        if (isCalculated) {
            return false;
        } else if (isOperatorChosen) {
            secondNum += $(this).val();
            console.log(secondNum); 
        } else {
        firstNum += $(this).val();
        $(".answer-display").text(firstNum);
        }
    });
});