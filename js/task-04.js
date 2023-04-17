function result() {
  let counterValue = 0; //początkowa wartość licznika
  //pobieranie elementów
  const incrementButton = document.querySelector("[data-action=increment]");
  const decrementButton = document.querySelector("[data-action=decrement]");
  const counter = document.querySelector("#value");
  //   counter.innerHTML =
  //     "<strong>mam 36 lat<strong> <button type='button' data-action='increment'>+1</button>";

  //   const test = document.querySelector("#counter");
  //   console.log(test.innerHTML);
  //test.innerHTML = "poniedziałek"; //manipuluje trescia pomiedzy tagami

  incrementButton.addEventListener("click", () => {
    counterValue++;
    counter.innerHTML = counterValue;
  });
  decrementButton.addEventListener("click", () => {
    counterValue--;
    counter.innerHTML = counterValue;
  });
}
result();
