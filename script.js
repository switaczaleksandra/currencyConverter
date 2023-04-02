let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateUSD = 4.35;
let rateEUR = 4.68;
let rateCHF = 4.73;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "USD":
            result = amount / rateUSD;
            break;

            case "EUR":
            result = amount / rateEUR;
            break;

            case "CHF":
            result = amount / rateCHF;
            break;
    }
    resultElement.innerHTML = `Wynik: ${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
})
