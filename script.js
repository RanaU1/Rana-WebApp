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
