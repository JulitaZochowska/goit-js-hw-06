function result() {
  const inputFontSize = document.querySelector("#font-size-control");
  const span = document.querySelector("#text");
  const setFontSize = () => {
    // fontSize musi być w px a ${} ESlint zaproponował
    span.style.fontSize = `${inputFontSize.value}px`;
  };
  //mentor prosił aby zmienić "change" na "input", bo font-size musi zmieniać się natychmiast,
  // a nie przy zwolnieniu inputa (wcześniej się zmieniało jak kliknęłaś, przesunęłaś i puściłaś,
  //teraz odrazu przy przesuwaniu.)
  inputFontSize.addEventListener("input", setFontSize);
}
result();
