const form = document.querySelector("form");
const result = document.querySelector("h2");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const incomeInput = document.querySelector("#income");
    const amountEarn = Number(incomeInput.value);

    if (!amountEarn || amountEarn < 0) {
        result.textContent = "Enter valid income";
        return;
    }

    let totalTax = 0;

    if (amountEarn <= 1200000) {
        totalTax = 0;
    } 
    else if (amountEarn <= 1600000) {
        totalTax = (amountEarn - 1200000) * 0.15;
    } 
    else if (amountEarn <= 2000000) {
        totalTax = 60000 + (amountEarn - 1600000) * 0.20;
    } 
    else {
        totalTax = 140000 + (amountEarn - 2000000) * 0.25;
    }

    result.textContent = `TOTAL TAX : ₹${totalTax.toLocaleString("en-IN")}`;
});