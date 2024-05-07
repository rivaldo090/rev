const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const secondQuestion = document.querySelector(".second-question");

let yesCount = 0;

yesBtn.addEventListener("click", () => {
    if (yesCount === 0) {
        question.innerHTML = "I Like you";
        secondQuestion.innerHTML = "how about you";
        img.src = "th.png";
        yesCount++;
    } else if (yesCount === 1) {
        window.location.href = "page2.html";
    }
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
