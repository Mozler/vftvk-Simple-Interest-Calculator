// Element variables
const principal = document.getElementById("principal");
const rate = document.getElementById("rate");
const rateText = document.getElementById("rate-text");
const years = document.getElementById("years");
const result = document.getElementById("result");
const computeBtn = document.getElementById("compute-btn");

// Functions
function compute() {
    const amount = parseFloat(principal.value);
    if (isNaN(amount) || amount <= 0) {
        window.alert("Please enter a positive number!")
        principal.focus()
        return
    }
    const intRate = rate.value;
    const termYears = years.value;
    const intAmount = amount * intRate / 100 * termYears;
    const yearStr = new Date().getUTCFullYear() + parseInt(termYears);

    result.innerHTML = `<p>If you deposit <span class="result-text">${amount}</span>,</br>
    at an interest rate of <span class="result-text">${intRate}%</span>,</br>
    You will receive an amount of <span class="result-text">${intAmount}</span>,</br>
    in the year <span class="result-text">${yearStr}</span>!</p>`
}

// Event Listeners
computeBtn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default to avoid page refresh
    compute()
})

// Updates rate if mouse wheel is:
// on pull deltaY is + value, lower rate by 0.5
// on push deltaY is - value, increase rate by 0.5
// Update rate text
rate.addEventListener('wheel', (WheelEvent) => {
    let currRate = parseFloat(rate.value)
    console.log(currRate);
    WheelEvent.deltaY > 0 ? rate.value = currRate - 0.5 : rate.value = currRate + 0.5;
    rateText.innerText = `${rate.value} %`
})
// Update rate text on mouse drag
rate.addEventListener('input', () => {
    rateText.innerText = `${rate.value} %`
})