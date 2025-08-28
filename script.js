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


// call btn alert
const callButtons = document.querySelectorAll(".call-btn");

callButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const card = btn.closest(".card");
        const serviceName = card.querySelector("p").textContent;
        const serviceNumber = card.querySelector(".service-number").textContent;
        alert(`📞Calling National Emergency Service 999...`);
    });
});