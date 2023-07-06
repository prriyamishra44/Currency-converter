const currencyFirstEl = document.getElementById("currency-first");
const worthFirst = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecond = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();
function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/983ecf23a874649bba848986/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
      const rate = data.conversion_rates[currencySecondEl.value];
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${
        rate + " " + currencySecondEl.value
      }`;
      worthSecond.value = (worthFirst.value * rate).toFixed(2)
    });
}
currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirst.addEventListener("input", updateRate);
