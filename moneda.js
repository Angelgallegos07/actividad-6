document.addEventListener("DOMContentLoaded", async () => {
    const amountInput = document.getElementById("amount");
    const fromSelect = document.getElementById("from");
    const toSelect = document.getElementById("to");
    const swapButton = document.getElementById("swap");
    const convertButton = document.getElementById("convert");
    const resultText = document.getElementById("result");

    const API_URL = "https://api.exchangerate-api.com/v4/latest/USD";
    let exchangeRates = {};

    async function fetchRates() {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            exchangeRates = data.rates;
            populateSelects(Object.keys(exchangeRates));
        } catch (error) {
            console.error("Error al obtener las tasas de cambio:", error);
        }
    }

    function populateSelects(currencies) {
        fromSelect.innerHTML = currencies.map(cur => `<option value="${cur}">${cur}</option>`).join("");
        toSelect.innerHTML = fromSelect.innerHTML;
        fromSelect.value = "USD";
        toSelect.value = "EUR";
    }

    function convertCurrency() {
        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromSelect.value;
        const toCurrency = toSelect.value;
        
        if (isNaN(amount) || amount <= 0) {
            resultText.textContent = "Ingresa una cantidad válida.";
            return;
        }

        const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        
        resultText.textContent = `${amount} ${fromCurrency} equivale a ${convertedAmount} ${toCurrency}`;
    }

    swapButton.addEventListener("click", () => {
        [fromSelect.value, toSelect.value] = [toSelect.value, fromSelect.value];
    });

    convertButton.addEventListener("click", convertCurrency);

    await fetchRates();
});
