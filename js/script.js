// Typing Effect
const text = "Build Backend Systems Like a Pro 🚀";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

typeEffect();

// Scroll to Courses
function scrollToCourses() {
  document.getElementById("courses").scrollIntoView({
    behavior: "smooth"
  });
}


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const titles = document.querySelectorAll(".title");

let isAnimating = false;

function runAnimation(element) {
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
        }

        iteration += 1 / 3;
    }, 50);
}

// ▶ Run BOTH at the same time on load
window.addEventListener("load", () => {
    titles.forEach(el => runAnimation(el));
});

// ▶ Hover effect for EACH independently
titles.forEach(el => {
    el.addEventListener("mouseenter", () => {
        runAnimation(el);
    });
});