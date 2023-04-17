function result() {
  const inputFontSize = document.querySelector("#font-size-control");
  const span = document.querySelector("#text");
  const setFontSize = () => {
    // fontSize musi być w px a ${} ESlint zaproponował
    span.style.fontSize = `${inputFontSize.value}px`;
  };
  inputFontSize.addEventListener("change", setFontSize);
}
result();
