let a = [1,2,4,7,"Dhruvil"];
console.log("This is a array");
console.log(a);
console.log("This is a length function : " + a.length);  // This is a method, which return length of array.
console.log("This is a poped element : " + a.pop());  // This is a function, which is delete at last element of array.
console.log("This is a array after used pop function");
console.log(a);
a.push("Computer");  // This is a function, which is add element at last position.
console.log("This is a array after used push function");
console.log(a);
console.log("This is a shifted element : " + a.shift());
console.log("This is a array after used shift function");  // This is a function, which is delete at first element of array.
console.log(a);
a.unshift(21);  // This is a function, which is add element at first position.
console.log("This is a array after used unshift function");
console.log(a);
console.log("This is a array after used sort function");  // This is a function, which sort array in to ascending order.
console.log(a.sort());
console.log("This is a array after used toString function");  // This is a fuction, which covert array into string.
console.log(a.toString());
