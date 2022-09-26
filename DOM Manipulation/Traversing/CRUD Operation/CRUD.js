// Create an element :
let element = document.createElement("li"); // Create an element.

element.className = "list-item"; // Set class.
element.id = "item5"; // Set id.
element.setAttribute("title","list-item-5"); // Set Attribute.
element.innerText = "My Account"; // Set inner text.
/*
 * If We want to set html then we use innerHTML, because in innerText we can't use HTML.
 * For Ex. element.innerHTML = "<b>My Account</b>";
 * We can also use document.createTextNode() for set text.
 * For Ex. let text = document.createTextNode("My Account");
 *         element.appendChild(text); 
*/ 

console.log(element);
let elem = document.querySelector("ul.list");
elem.append(element); // appendChild add element at last.
/*
 * But if we want to add child at first, then we use prependChild().
 * For Ex. elem.prepend(element);
 * If we want to add specific location then we use insertBefor().
 * For Ex. elem.insertBefor(element,elem.children[1]);
*/
console.log(elem);

let newElement = document.createElement("h2");
newElement.className = "item";
newElement.id = "item0";
newElement.getAttribute("title","list-item-0");
newElement.innerText = "Home";

console.log(newElement);
elem.replaceChild(newElement,elem.children[0]); // replaceChild() replace a element.

let a = document.createElement("div");
a.className = "conatainer-fluid";
a.id = "model";
a.setAttribute("title","box");

console.log(a.getAttribute("class")); // gertAttribute return attribute value.
console.log(a.getAttribute("id"));

console.log(a.hasAttribute("title")); // hasAttribute return true if attributr is available in element which we give.

a.removeAttribute("title"); // removeAttribute remove attribute which we give.

console.log(a);

