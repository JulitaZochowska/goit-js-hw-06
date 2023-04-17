function result() {
  const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  const gallery = document.querySelector(".gallery");
  const htmlToAdd = images.reduce(
    //metoda reduce bo ma być jedna operacja dodawania do DOM
    (acc, image) =>
      acc +
      `<li><img class="gallery-image" src="${image.url}" alt="${image.alt}"></img></li>`,
    ""
  );
  console.log(htmlToAdd); //string z trzema <li>

  gallery.insertAdjacentHTML("afterbegin", htmlToAdd);
}
result();
