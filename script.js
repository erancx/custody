"use strict";
function isWithKids(inputDate) {
    var startDate = new Date('2024-01-05');
    var daysDifference = (inputDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
    var weekOfCycle = Math.floor(daysDifference / 7) % 2 + 1;
    var dayOfWeek = inputDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 2) { // Sunday or Tuesday
        return true;
    }
    else if (weekOfCycle === 1 && (dayOfWeek === 5 || dayOfWeek === 6)) { // First week, Friday and Saturday
        return true;
    }
    else if (weekOfCycle === 2 && dayOfWeek === 4) { // Second week, Thursday
        return true;
    }
    return false;
}
function checkCustody() {
    var dateInput = document.getElementById('dateInput').value;
    var resultElement = document.getElementById('result');
    if (dateInput && resultElement) {
        var inputDate = new Date(dateInput);
        var withKids = isWithKids(inputDate);
        resultElement.innerText = withKids ? "Eran" : "Anat";
        resultElement.style.color = withKids ? 'blue' : 'pink';
    }
    else if (resultElement) {
        resultElement.innerText = "Please enter a date";
        resultElement.style.color = 'black';
    }
}
