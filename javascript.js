
const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("container");
container.style.cssText = "height: 544px; width: 544px; display:flex; flex-wrap: wrap; border: 15px solid red";

for (let i = 0; i< 16; i++){
    for (let j = 0; j< 16; j++){
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.cssText = "height: 32px; width: 32px; border:1px solid black;"
    container.appendChild(square);
    }
}
console.log("hello")

body.appendChild(container);
