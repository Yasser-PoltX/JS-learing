let myElement = document.createElement("div");
let myAttribute = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This is a div");
myElement.className = "product";
myElement.setAttributeNode(myAttribute);
myElement.setAttribute("data-test","test value");
myElement.appendChild(myComment);
myElement.appendChild(myText);

document.body.appendChild(myElement);