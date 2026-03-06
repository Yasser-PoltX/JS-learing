let btn = document.getElementById("create");

let form = document.getElementById("productForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  let numberOfProducts = Number(document.getElementById("number1").value);
  console.log(numberOfProducts);
  for (let index = 1; index <= numberOfProducts; index++) {
    let myMainElement = document.createElement("div");
    let myHeading = document.createElement("h2");
    let myParagraph = document.createElement("p");

    myMainElement.style.color = "red";
    myMainElement.style.backgroundColor = "black";
    myMainElement.style.fontSize = "20px";
    myMainElement.style.padding = "10px";
    myMainElement.style.margin = "10px";
    myMainElement.style.border = "1px solid white";
    myMainElement.style.borderRadius = "5px";
    myMainElement.style.textAlign = "center";
    myMainElement.style.width = "200px";
    myMainElement.style.height = "200px";
    myMainElement.style.display = "inline-block";

    let myHeadingText = document.createTextNode("Product Title " + index);
    let myParagraphText = document.createTextNode(
      "Product Description " + index,
    );

    myHeading.appendChild(myHeadingText);
    myMainElement.appendChild(myHeading);

    myParagraph.appendChild(myParagraphText);
    myMainElement.appendChild(myParagraph);

    myMainElement.className = "product";

    document.body.appendChild(myMainElement);
  }
});
