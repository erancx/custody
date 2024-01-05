"use strict";
function isWithKids(inputDate) {
    var startDate = new Date('2023-12-24');
    var daysDifference = Math.floor((inputDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    // Determine the week of the cycle (0 or 1)
    var weekOfCycle = Math.floor(daysDifference / 7) % 2;
    // Determine the day of the week (0-6)
    var dayOfWeek = inputDate.getDay();
    // Explicitly never with the kids on Wed and Mon
    if (dayOfWeek === 0 || dayOfWeek === 3) { // Sunday or Tuesday
        return false;
    }
    // Always with the kids on Sun and Tue
    if (dayOfWeek === 0 || dayOfWeek === 2) {
        return true;
    }
    // Week 0: I'm with the kids on Thu
    if (weekOfCycle === 0 && dayOfWeek === 4) {
        return true;
    }
    // Week 1: I'm with the kids on Fri and Sat
    if (weekOfCycle === 1 && (dayOfWeek === 5 || dayOfWeek === 6)) {
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
        resultElement.className = withKids ? 'with-kids' : 'not-with-kids';
    }
    else if (resultElement) {
        resultElement.innerText = "Please enter a date";
        resultElement.style.color = '';
        resultElement.className = '';
    }
}
