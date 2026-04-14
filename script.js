const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const title = document.querySelector("#title");

let isAnimating = false;

// 🎯 Reusable animation function
function runAnimation(element) {
    if (isAnimating) return;

    isAnimating = true;
    let iteration = 0;
    const originalText = element.dataset.text;

    const interval = setInterval(() => {
        element.innerText = originalText
            .split("")
            .map((letter, index) => {
                if (index < iteration) return originalText[index];
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= originalText.length) {
            clearInterval(interval);
            isAnimating = false;
        }

        iteration += 1 / 3;
    }, 50);
}

window.addEventListener("load", () => {
    runAnimation(title);
});

title.addEventListener("mouseenter", () => {
    runAnimation(title);
});