// let myAge = 23;
// console.log(myAge);

//let variables are block scope, can't be accessed outside its scope

let count = 0;
function increment(){
    count = count + 1;
    document.getElementById("count").innerText= count;
}

function save(){
document.getElementById("save-el").textContent += count +  " - ";
count = 0;
document.getElementById("count").textContent= count;
//innerText-Returns the visible text content of an element and all its child elements, including CSS attributes like bolding and italics. It's useful when you want to see the rendered text content of a node without the formatting.  
//innerHTML-Returns all text, including HTML tags, within an element. It's useful for manipulating HTML content, such as setting or changing the innerHTML content of an element. However, it's not recommended to use innerHTML when inserting plain text because it can be used by cybercriminals to embed JavaScript code. 
//textContent-Returns all text contained by an element and all its children, but ignores formatting (css). It's useful for handling raw text content.
}