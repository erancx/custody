function isWithKids(inputDate: Date): boolean {
    let startDate = new Date('2024-01-05');
    let daysDifference = (inputDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);

    let weekOfCycle = Math.floor(daysDifference / 7) % 2 + 1;

    let dayOfWeek = inputDate.getDay();

    if (dayOfWeek === 0 || dayOfWeek === 2) {  // Sunday or Tuesday
        return true;
    } else if (weekOfCycle === 1 && (dayOfWeek === 5 || dayOfWeek === 6)) {  // First week, Friday and Saturday
        return true;
    } else if (weekOfCycle === 2 && dayOfWeek === 4) {  // Second week, Thursday
        return true;
    }

    return false;
}

function checkCustody(): void {
    let dateInput = (<HTMLInputElement>document.getElementById('dateInput')).value;
    let resultElement = document.getElementById('result');
    if (dateInput && resultElement) {
        let inputDate = new Date(dateInput);
        let withKids = isWithKids(inputDate);

        resultElement.innerText = withKids ? "Eran" : "Anat";
        resultElement.style.color = withKids ? 'blue' : 'pink';

    } else if (resultElement) {
        resultElement.innerText = "Please enter a date";
        resultElement.style.color = 'black';
    }
}
