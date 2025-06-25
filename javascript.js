
const body = document.querySelector("body");
const btn = document.createElement("button");
let container = document.createElement("div");
container.classList.add("container");
container.style.cssText = "height: 544px; width: 544px; display:flex; flex-wrap: wrap; border: 15px solid red";
btn.textContent = "reset"
const redbtn = document.createElement("button");
redbtn.textContent = "red";
const greenbtn = document.createElement("button");
greenbtn.textContent = "green";
const blackbtn = document.createElement("button");
blackbtn.textContent = "black";
const whitebtn = document.createElement("button");
whitebtn.textContent = "white";
let currentColor = "black";

function enablePainting(container) {
  container.addEventListener("mousedown", () => {
    painting = true;
  });

  container.addEventListener("mouseup", () => {
    painting = false;
  });
}
enablePainting(container);



redbtn.addEventListener("click", function(){
    currentColor = "red";
})

greenbtn.addEventListener("click", function(){
    currentColor = "green";
})


blackbtn.addEventListener("click", function(){
    currentColor = "black";
})


whitebtn.addEventListener("click", function(){
    currentColor = "white";
})


for (let i = 0; i< 16; i++){
    for (let j = 0; j< 16; j++){
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", function(){
    if (painting){
        square.style.backgroundColor = currentColor;
    }
});


    square.style.cssText = "height: 32px; width: 32px; border:1px solid black;background-color:white; "
    container.appendChild(square);
    }
}

btn.addEventListener("click", function(){
 body.removeChild(container);


    let horiz = prompt("Enter the num of squares for horizontal side: ");
    while(horiz>100 || horiz <= 0 || isNaN(horiz)){
        horiz = prompt("Please enter a valid num from 1-100 for horizontal side:")
    }
    let vert = prompt("Enter the num of squares for vertical size ");
    while (vert > 100 || vert <= 0 || isNaN(vert)) {
    vert = prompt("Please enter a valid num from 1-100 for vertical side:");
}
    container = document.createElement("div");


    container.classList.add("newContainer");
    container.style.cssText = "height: 544px; width: 544px; display:flex; flex-wrap: wrap; border: 15px solid red";
    body.appendChild(container);

    enablePainting(container);


    const squareWidth = 544/horiz;
    const squareHeight= 544/vert;


    for(let i = 0; i< horiz; i++){
        for(let j = 0; j < vert; j++){
            const newSquare = document.createElement("div");
            newSquare.classList.add("newSquare");

            
            newSquare.addEventListener("mouseover", function(){
            if(painting){newSquare.style.backgroundColor = currentColor; 
            }

    });


            newSquare.style.cssText = `height: ${squareHeight-2}px; width: ${squareWidth-2}px; border:1px solid black;background-color:white; `
            container.appendChild(newSquare);

    
        }
    }

   
})



body.appendChild(redbtn);
body.appendChild(greenbtn);
body.appendChild(blackbtn);
body.appendChild(whitebtn);
body.appendChild(btn);
body.appendChild(container);
