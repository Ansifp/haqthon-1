function searchCrypto() {
    const cryptoName = document.getElementById('crypto-input').value.toLowerCase();
    const cryptoDetails = document.getElementById('crypto-details');

    // Example static data
    const cryptoData = {
        bitcoin: {
            name: 'Bitcoin',
            value: '$30,000',
            founders: 'Satoshi Nakamoto'
        },
        ethereum: {
            name: 'Ethereum',
            value: '$2,000',
            founders: 'Vitalik Buterin'
        },
        dogecoin: {
            name: 'Dogecoin',
            value: '$0.06',
            founders: 'Billy Markus, Jackson Palmer'
        }
    };

    if (cryptoData[cryptoName]) {
        cryptoDetails.innerHTML = `
            <h3>${cryptoData[cryptoName].name}</h3>
            <p><strong>Value:</strong> ${cryptoData[cryptoName].value}</p>
            <p><strong>Founders:</strong> ${cryptoData[cryptoName].founders}</p>
        `;
    } else {
        cryptoDetails.innerHTML = '<p>Cryptocurrency not found. Please try again.</p>';
    }
}
function searchCrypto() {
    const crypto = document.getElementById('crypto-search').value.toLowerCase();
    if (crypto) {
        window.location.href = `crypto-details.html?crypto=${crypto}`;
    } else {
        alert("Please enter a cryptocurrency name.");
    }
}
// Function to fetch cryptocurrency data using CoinGecko API
function fetchCryptoRates() {
    const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#crypto-table tbody");
            tableBody.innerHTML = '';  // Clear existing table data

            data.forEach(coin => {
                const row = document.createElement("tr");

                // Cryptocurrency Name
                const nameCell = document.createElement("td");
                nameCell.textContent = coin.name;
                row.appendChild(nameCell);

                // Current Price
                const priceCell = document.createElement("td");
                priceCell.textContent = `$${coin.current_price.toLocaleString()}`;
                row.appendChild(priceCell);

                // Market Cap
                const marketCapCell = document.createElement("td");
                marketCapCell.textContent = `$${coin.market_cap.toLocaleString()}`;
                row.appendChild(marketCapCell);

                // 24h Volume
                const volumeCell = document.createElement("td");
                volumeCell.textContent = `$${coin.total_volume.toLocaleString()}`;
                row.appendChild(volumeCell);

                // 24h Price Change
                const changeCell = document.createElement("td");
                changeCell.textContent = `${coin.price_change_percentage_24h.toFixed(2)}%`;
                changeCell.classList.add("change");
                if (coin.price_change_percentage_24h > 0) {
                    changeCell.classList.add("positive");
                } else {
                    changeCell.classList.add("negative");
                }
                row.appendChild(changeCell);

                // Append the row to the table body
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching cryptocurrency data:', error);
        });
}

// Call the function when the page loads
window.onload = fetchCryptoRates;
