function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function result() {
  const button = document.querySelector(".change-color");
  const span = document.querySelector(".color");

  const handleClick = () => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    span.innerHTML = randomColor;
  };
  button.addEventListener("click", handleClick);
}
result();
