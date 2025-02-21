document.getElementById("fetchPrice").addEventListener("click", async () => {
    const crypto = document.getElementById("cryptoSelect").value;
    const URL = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`;

    try {
        const response = await fetch(URL);
        const data = await response.json();
        document.getElementById("cryptoPrice").textContent = 
            `El precio de ${crypto.toUpperCase()} es $${data[crypto].usd} USD`;
    } catch (error) {
        console.error("Error al obtener el precio de la criptomoneda:", error);
    }
});
