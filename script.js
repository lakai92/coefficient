document.title = "whynot";

var usdtCoefficientURL = 'https://raw.githubusercontent.com/lakai92/coefficient/main/usdt_coefficient2.js';
fetch(usdtCoefficientURL)
    .then(function (response) {
        if (response.status === 200) {
            return response.text();
        } else {
            throw new Error("undefined");
        }
    })

window.scriptLoaded = true;
