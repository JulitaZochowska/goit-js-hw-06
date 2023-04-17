function result() {
  const input = document.querySelector("#validation-input");
  const blur = () => {
    // dataset.length jest stringiem (atrybuty zawsze są stringiem)
    // a value.length jest Number, więc toString sprowadza do wspólnego typu.
    if (input.value.length.toString() === input.dataset.length) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid"); // dodawanie klasy z CSS
      input.classList.remove("valid");
    }
  };

  input.addEventListener("blur", blur);
}
result();
