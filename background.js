function createStick(left = mouse.x, top = mouse.y) {
  const stick = document.createElement("div");
  stick.classList.add("stick");
  stick.style.setProperty("--left", left + (Math.random() - 0.5) * 100 + "px");
  stick.style.setProperty("--top", top + (Math.random() - 0.6) * 100 + "px");
  stick.style.setProperty("--size", Math.random() * 0.75 + 0.5);
  stick.style.setProperty("--rotation", (Math.random() + 1) * 360 + "deg");
  stick.style.setProperty("--angle", Math.random() * 360 + "deg");
  stick.style.setProperty("--travel-x", (Math.random() - 0.5) * 100 + "dvw");
  stick.style.setProperty("--travel-y", (Math.random() - 0.5) * 100 + "dvh");
  stick.style.setProperty("--delay", 0 + "s");
  let duration = Math.random() * 3.83 + 1 + "s";
  stick.style.setProperty("--duration", duration);
  stick.style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 156 + 100) +
    "," +
    Math.floor(Math.random() * 156 + 100) +
    "," +
    Math.floor(Math.random() * 156 + 100) +
    ")";
  document.getElementById("background").appendChild(stick);
  setTimeout(() => {
    stick.remove();
  }, duration.replace("s", "") * 1000);
}

const mouse = { x: 0, y: 0 };

document.addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  createStick();
});

setInterval(() => {
  const randomLeft = Math.random() * window.innerWidth;
  const randomTop = Math.random() * window.innerHeight;
  createStick(randomLeft, randomTop);
}, 200);
