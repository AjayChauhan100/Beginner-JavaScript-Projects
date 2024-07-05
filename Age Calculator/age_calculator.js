const inputs = document.querySelectorAll("input")

document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;
    inputs[1].value = currentDate;
    inputs[0].value = currentDate;
});

inputs.forEach(element => {
    element.addEventListener("click", function (event) {
        event.target.showPicker()
    })
})

function calculate() {
    const date1 = new Date(inputs[0].value);
    const date2 = new Date(inputs[1].value);
    let difference = date2 - date1;
    let valid = true;
    if (difference < 0) {
        valid = false;
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const oneYear = oneDay * 365.25;
    const oneMonth = oneDay * 30;

    const years = Math.floor(difference / oneYear);
    difference -= years * oneYear;

    const months = Math.floor(difference / oneMonth);
    difference -= months * oneMonth;

    const days = Math.floor(difference / oneDay);

    const result = document.getElementById('result');

    if (valid === true) {
        if (years !== 0 || months !== 0 || days !== 0) {
            result.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
            result.style.display = "block";
        } else {
            result.style.display = "none";
        }
    } else if(valid === false) {
        result.textContent = `Please put Date of Birth or Current Date correctly.`;
        result.style.display = "block";
    }
}
