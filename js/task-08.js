function result() {
  const form = document.querySelector(".login-form");
  const onSubmit = (event) => {
    // Zapobiega odświezaniu strony podczas przesyłania formularza
    event.preventDefault();
    const {
      elements: { email, password },
    } = event.currentTarget;
    // Sprawdzenie czy wszystkie pola są wypełnione
    if (email.value === "" || password.value === "") {
      alert("Please fill in all the fields");
      return;
    }
    //mentor nie zaakceptował: console.log(`Email: ${email.value}, Password: ${password.value}`);
    console.log(form.elements);
    form.reset();
  };
  form.addEventListener("submit", onSubmit);
}
result();
