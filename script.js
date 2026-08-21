const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.addEventListener("click", () => {
  message.innerHTML =
    "YAYYY! 🥹❤️ I knew you'd say YES! Forever starts now 💍✨";

  yesBtn.innerHTML = "I LOVE YOU ❤️";

  for (let i = 0; i < 30; i++) {
    createHeart();
  }
});

noBtn.addEventListener("mouseover", moveButton);

noBtn.addEventListener("click", moveButton);

function moveButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

function createHeart() {
  const heart = document.createElement("div");

  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = Math.random() * 25 + 15 + "px";
  heart.style.transition = "4s linear";
  heart.style.zIndex = "999";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.top = "-10vh";
    heart.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    heart.remove();
  }, 4500);
}
