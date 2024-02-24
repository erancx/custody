var _a;
function isWithKids(inputDate) {
    var startDate = new Date("2023-12-24");
    var daysDifference = Math.floor((inputDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    var weekOfCycle = Math.floor(daysDifference / 7) % 2;
    var dayOfWeek = inputDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 3) {
        return false;
    }
    if (dayOfWeek === 0 || dayOfWeek === 2) {
        return true;
    }
    if (weekOfCycle === 0 && dayOfWeek === 4) {
        return true;
    }
    if (weekOfCycle === 1 && (dayOfWeek === 5 || dayOfWeek === 6)) {
        return true;
    }
    return false;
}
(_a = document.getElementById("dateInput")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", function () {
    var dateInput = document.getElementById("dateInput")
        .value;
    var resultElement = document.getElementById("result");
    if (dateInput && resultElement) {
        var inputDate = new Date(dateInput);
        var withKids = isWithKids(inputDate);
        resultElement.innerText = withKids ? "Eran" : "Anat";
        resultElement.style.color = withKids ? "blue" : "pink";
        resultElement.className = withKids ? "with-kids" : "not-with-kids";
    }
});
