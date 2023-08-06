var digitone;
var digittwo;
var operation;
var display = document.getElementById("display");
function deleteDisplay() {
    display.innerText = null;
}
function opp(opera) {
    if (operation == null) {
        operation = opera;
        display.innerText += operation;
    }
}
function digin(digit) {
    if (operation == null && digitone == null) {
        digitone = digit;
        display.innerText += digit;

    } else if (operation == null && digitone != null) {
        digitone = digitone * 10;
        digitone += digit;
        display.innerText += digit;
    } else if (operation != null && digittwo == null) {
        digittwo = digit;
        display.innerText += digit;
    } else if (digittwo != null) {
        digittwo = digittwo * 10;
        digittwo += digit;

        display.innerText += digit;
    }
}
function result() {
    if (operation != null) {
        switch (operation) {
            case '+': deleteDisplay();
                display.innerText = digitone + digittwo;
                digitone = null;
                digittwo = null;
                operation = null;
                break;
            case '-': deleteDisplay();
                display.innerText = digitone - digittwo;
                digitone = null;
                digittwo = null;
                operation = null;
                break;
            case '*': deleteDisplay();
                display.innerText = digitone * digittwo;
                digitone = null;
                digittwo = null;
                operation = null;
                break;
            case '/': deleteDisplay();
                display.innerText = digitone / digittwo;
                digitone = null;
                digittwo = null;
                operation = null;
                break;

            default: display.innerText = "Enter a valid Operation";
                digitone = null;
                digittwo = null;
                break;
        }
    }

}
function remove() {
    deleteDisplay();
    if (digittwo != null) {
        display.innerHTML = digitone + operation;
        digittwo = null;
    } else if (digittwo == null && operation !== null) {
        display.innerHTML = digitone;
        operation = null;
    } else {
        digitone = null;
    }
}
