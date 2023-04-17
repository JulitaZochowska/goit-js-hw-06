function result() {
  const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
  const list = document.querySelector("#ingredients");
  ingredients.forEach((ingredient) => {
    const item = document.createElement("li"); //tworzymy element li
    item.innerHTML = ingredient; //kazdemu li przypisujemy nazwe warzywa
    item.className = "item"; // kazdemu li przypisujemy class="item"
    list.appendChild(item);
  });
}

result();
