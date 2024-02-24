function isWithKids(inputDate: Date): boolean {
  const startDate = new Date("2023-12-24");
  const daysDifference = Math.floor(
    (inputDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  const weekOfCycle = Math.floor(daysDifference / 7) % 2;
  const dayOfWeek = inputDate.getDay();

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

document.getElementById("dateInput")?.addEventListener("change", () => {
  const dateInput = (<HTMLInputElement>document.getElementById("dateInput"))
    .value;
  const resultElement = document.getElementById("result");

  if (dateInput && resultElement) {
    const inputDate = new Date(dateInput);
    const withKids = isWithKids(inputDate);

    resultElement.innerText = withKids ? "Eran" : "Anat";
    resultElement.style.color = withKids ? "blue" : "pink";

    resultElement.className = withKids ? "with-kids" : "not-with-kids";
  }
});
