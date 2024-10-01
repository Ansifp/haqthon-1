// Simulated data for cryptocurrency information
const cryptoData = {
    bitcoin: {
        founder: "Satoshi Nakamoto",
        company: "Bitcoin Foundation"
    },
    ethereum: {
        founder: "Vitalik Buterin",
        company: "Ethereum Foundation"
    },
    dogecoin: {
        founder: "Billy Markus",
        company: "Dogecoin Foundation"
        
    }
};

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const cryptoName = params.get('crypto');

    if (cryptoData[cryptoName]) {
        document.getElementById('founder').innerText = cryptoData[cryptoName].founder;
        document.getElementById('company').innerText = cryptoData[cryptoName].company;
    } else {
        document.getElementById('founder').innerText = "Unknown";
        document.getElementById('company').innerText = "Unknown";
    }
}
