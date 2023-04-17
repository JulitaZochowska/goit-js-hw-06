function countCategoriesAndElements() {
  const categoriesGeneral = document.querySelectorAll("ul#categories li.item");
  const categoriesGeneralLength = [...categoriesGeneral].length;
  console.log(`Number of categories: ${categoriesGeneralLength}`);
  categoriesGeneral.forEach((element) => {
    const header = element.querySelector("h2").textContent;
    const items = element.querySelectorAll("li").length;
    console.log(`Category: ${header}`);
    console.log(`Elements: ${items}`);
  });
}
countCategoriesAndElements();
