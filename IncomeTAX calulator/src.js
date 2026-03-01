const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const Income = document.querySelector("#income");
    const AmountEarn = parseInt(Income.value);
    const REsult = document.querySelector('h2');
    let TotalTAx = 0;
    if (AmountEarn <= 1200000){
        TotalTAx = 0;}

    else if (AmountEarn <= 1600000){
        TotalTAx = (AmountEarn - 1200000) * 0.15;}

    else if (AmountEarn <= 2000000){
        TotalTAx = (AmountEarn - 1200000) * 0.20 + 60000;}

    else (AmountEarn <= 2400000)
    TotalTAx = (AmountEarn - 1200000) * 0.25 + 60000 + 80000;

    REsult.textContent = `TOTAL TAX : ${TotalTAx}`;
    form.reset()
})
