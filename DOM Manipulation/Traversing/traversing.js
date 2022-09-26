let element = document.querySelector("div.container");
console.log(element);

console.log(element.parentNode);

console.log(element.childNodes); // Here childNodes return all child in array form, but it's also include comment and text.

console.log(element.childNodes[0].firstChild); // firstChild return first child, but it's include comment and text.
console.log(element.childNodes[0].lastChild); // lastchild return last child, but it's include comment and text.
console.log(element.childNodes[0].firstChild.nextSibling); // nextSibling return next child node,, but it's also include comment and text.

console.log(element.children); // Here children return only child element in array form.

console.log(element.children[0].children); // children return child element in array form so, if we want to access any child, then we use index.

console.log(element.children[0].firstElementChild); // Return first child element.
console.log(element.children[0].lastElementChild); // Return last child element.

console.log(element.children[0].firstElementChild.nextElementSibling); // nextElementSilbing return next child element.

// Also we do like this :
console.log(element.children[0].firstElementChild.nextSibling);
console.log(element.children[0].firstChild.nextElementSibling);
 
// Above all think we can also apply on childNodes.