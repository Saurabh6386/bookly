let cards = document.querySelector(".cards");
function createUI() {
  blogs.books.forEach((element) => {
    console.log(element);
    let li = document.createElement("li");
    let image = document.createElement("img");
    image.src = element.image;
    console.log(image);
    let title = document.createElement("h6");
    title.innerText = element.title;
    let author = document.createElement("p");
    author.innerText = element.author;
    let btn = document.createElement("button");
    btn.innerText = "Buy now";
    li.append(image, title, author, btn);
    cards.append(li);
  });
}
createUI();
