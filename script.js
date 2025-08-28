// heart icon counter
const count = document.getElementById("count");
let likeCount = 0;

const cardHearts = document.querySelectorAll(".card-heart");

cardHearts.forEach(function (heart) {
    heart.addEventListener("click", function () {
        likeCount++;
        count.textContent = likeCount;
    });
});

// copy button
const copyButtons = document.querySelectorAll(".card button:first-child");
let copyCounter = document.getElementById("copy-count");
let copyCount = 0;

copyButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const card = btn.closest(".card");
        const serviceNumber = card.querySelector(".service-number").textContent;

        navigator.clipboard.writeText(serviceNumber).then(() => {
            alert(`Number copied: ${serviceNumber}`);

            copyCount++;
            copyCounter.textContent = copyCount;
        }).catch(err => {
            alert("❌ Copy failed!");
            console.error("Failed to copy: ", err);
        });
    });
});

// call btn alert and coin count
const callButtons = document.querySelectorAll(".call-btn");
let coinCount = document.getElementById("coin-count");
let coins = parseInt(coinCount.textContent);
const historyList = document.getElementById("history-list");
const clearBtn = document.getElementById("clear-history");
const template = document.getElementById("history-template");

callButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        if (coins >= 20) {
            const card = btn.closest(".card");
            const serviceName = card.querySelector("h2").textContent;
            const serviceNumber = card.querySelector(".service-number").textContent;

            coins -= 20;
            coinCount.textContent = coins;

            const clone = template.content.cloneNode(true);
            clone.querySelector(".service-name").textContent = serviceName;
            clone.querySelector(".service-number").textContent = serviceNumber;
            clone.querySelector(".service-time").textContent = new Date().toLocaleTimeString();

            historyList.prepend(clone);

            alert(`📞 Calling ${serviceName} (${serviceNumber})...`);
        }

        else {
            alert("You don't have enough coins. You need at least 20 coins to make a call.")
        }
    });
});

clearBtn.addEventListener("click", function () {
    historyList.innerHTML = "";
});