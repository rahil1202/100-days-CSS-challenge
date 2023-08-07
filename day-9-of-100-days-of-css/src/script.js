const speed = 0.7; // speed of rain drops
let animationDuration = 0.8;
const container = document.querySelector(".rain");
if (container) {
  const height = +container.offsetHeight;

  animationDuration = height / speed / 400;
}
const allDurations = [
  animationDuration,
  animationDuration * 1.2,
  animationDuration * 1.4
];

function createRandomBox(addClass, parentWidth, dropSize = 0) {
  // Calculate a random value between 2rem and 100% - 2rem
  const randomLeft = Math.random() * (parentWidth - 3 * 2 * 10) + 2 * 10; // 16 pixels = 1rem

  // Create a new div element
  const divElement = document.createElement("div");

  // Add classes 'drop' and 'box--<small>'
  divElement.classList.add("drop", addClass);

  // Set the inline style for the left property
  divElement.style.left = `${randomLeft}px`;
  divElement.style.animationDuration = `${allDurations[dropSize]}s`;
  divElement.style.transform = "translateY(-500px)";
  return divElement;
}
const rain = document.querySelector(".rain");
const parWidth = +rain.clientWidth;
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    rain.append(createRandomBox("drop--large", parWidth, 0));
  }, 300 * i);
}
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    rain.append(createRandomBox("drop--medium", parWidth, 1));
  }, 300 * i);
}
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    rain.append(createRandomBox("drop--small", parWidth, 2));
  }, 300 * i);
}
