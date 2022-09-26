let a = document; // Here document return whole html.

console.log("DOM : ");
a = document.all; // Here document.all return all element in array form which is in DOM.
a = document.body; // Here document.body return body.
a = document.forms; // Here document.forms return all form in array form which is in DOM.
a = document.forms[0]; // Here also we caan use index to access particular form.

console.log(a);

/* 
 * Element selectors :
 * 1) Single element selectors
 * 2) Multi element selectors
*/

// Single element selectors :
console.log("Single element selectors : ");

let element = document.getElementById("item1"); // Here getElementById return tag which is containe item1 id.
console.log("document.getElementById : ");
console.log(element);
console.log(element.childNodes); // Here ciledNodes return child elements in array form.
console.log(element.childNodes[1]); // Here we can access particular element using index.
console.log(element.parentNode); // Here parentNode return parent node.

console.log(element.className); // Here we can access class using className
element.className = "Item10"; // Also we can change class name.
console.log(element.innerHTML); // Return inner html.
element.innerHTML = "<i>Item 1.1</i>"; // Also we can change html.
console.log(element.innerText); // Return inner text.
element.innerText = "Item 1"; // Also we can change text.

element.style.color = "red"; // We can give css.

console.log("document.querySelector : ");
let selector = document.querySelector("#item2"); // Query select using id.
selector = document.querySelector(".item") // Query select using class.
console.log(selector); // This is only one element return which is first, because we are using single element selector.
selector = document.querySelector("div"); // Query select using tag.
console.log(selector); // This is only one element return which is first, because we are using single element selector.
selector.style.color = "green";

// Multi element selector :
console.log("Multi element selector : ");

let elems = document.getElementsByClassName("item"); // Here getElementsByClassName return all elements in array form which is containe item class.
console.log("document.getElementsByClassName : ");
console.log(elems);
console.log(elems[0]); // We can also access element using index.
elems[1].style.color = "gray"; // We can give style on one element using index.
/*
 * But we can't use directly elems.style.color = "pink" for give style all element.
 * If we give style all element, then we use loop.
*/
/*
 * We can't use directly foreach loop.
 * elems.forEach(element => {
       console.log(element);
       element.style.background = "yellow";
   });
 * We use Array.from(elem) in foreach loop.
*/ 
Array.from(elems).forEach(element => {
    console.log(element);
    element.style.background = "yellow";
});

console.log("document.getElementsByTagName : ");
elems = document.getElementsByTagName("label");
console.log(elems);
console.log(elems[0]); // We can also access element using index.
elems[0].style.color = "orange";
/*
 * But we can't use directly elems.style.color = "pink" for give style all element.
 * If we give style all element, then we use loop.
*/ 
/*
 * We can't use directly foreach loop.
 * elems.forEach(element => {
       console.log(element);
       element.style.background = "pink";
   });
 * We use Array.from(elems) in for each loop.
*/ 
Array.from(elems).forEach(element =>{
    console.log(element);
    element.style.background = "pink";
})
/*
 * In multy element if we want to give style all element, then we can also use for loop.
*/ 
