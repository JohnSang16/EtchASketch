
const body = document.querySelector("body");
const btn = document.createElement("button");
const container = document.createElement("div");
container.classList.add("container");
container.style.cssText = "height: 544px; width: 544px; display:flex; flex-wrap: wrap; border: 15px solid red";
btn.textContent = "reset"

for (let i = 0; i< 16; i++){
    for (let j = 0; j< 16; j++){
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", function(){
    square.style.backgroundColor = "black";
});


    square.style.cssText = "height: 32px; width: 32px; border:1px solid black;background-color:white; "
    container.appendChild(square);
    }
}

btn.addEventListener("click", function(){
    body.removeChild(container);
    const horiz = prompt("Enter the num of squares for horizontal side ")
    const vert = prompt("Enter the num of squares for vertical size ")
})



body.appendChild(btn);
body.appendChild(container);
