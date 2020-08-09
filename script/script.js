const container = document.querySelector('.container');

let x = 16;

buildGrid();

function buildGrid(){
    for (let i = 0; i < x*x; i++) {
        gridItem = document.createElement('div');
        gridItem.style.width = x + "fr";
        gridItem.style.height = x + "fr";
        gridItem.classList.add('gridBlock');
        gridItem.id = "gridBlock";
        container.appendChild(gridItem);
    };
    container.addEventListener('mouseover', hoverGrid);
}

//function to change grid size
const ChangeSIZE = document.querySelector('#Size');

ChangeSIZE.addEventListener('click', promptSize);

function promptSize(){
    newSize = prompt("How many squares would you like in each Row and Column?");
    container.innerHTML = '';

    if (newSize > 100 || newSize == 0) {
        alert("Please enter a number between 1 and 100.")
      }
else{
    for (let i = 0; i < newSize*newSize; i++) {
        newGridItem = document.createElement('div');
        newGridItem.style.width = newSize + "fr";
        newGridItem.style.height = newSize + "fr";
        newGridItem.classList.add('gridBlock');
        newGridItem.id = "gridBlock";
        container.appendChild(newGridItem);  
    };
    container.style['grid-template-columns'] = `repeat(${newSize}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${newSize}, 1fr)`;
    container.addEventListener('mouseover', hoverGrid);
}
}

//function to change to Black only
function hoverGrid(e){
    if (e.target.className === "gridBlock") {
        e.target.style.background = "#000";
      }
      console.log(e.target.className)
    };

//function to change to random RGB
  function hoverRGB(e){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    
    if (e.target.className === "gridBlock"){
        e.target.style.background = bgColor;
    }
    } 

const menu = document.querySelector('.button');

menu.addEventListener("click", function(e){
    resetGrid();
    if (e.target.id == "color") {
    container.removeEventListener("mouseover", hoverGrid);
    container.addEventListener("mouseover", hoverRGB);
    }
    else if (e.target.id == "black") {
        container.removeEventListener("mouseover", hoverRGB);
        container.addEventListener("mouseover", hoverGrid);
    }
})

// reset grid to black and white
function resetGrid(){
    const gridTile = document.getElementsByClassName('gridBlock');
      for (i=0; i < gridTile.length; i++){
          gridTile[i].style.background = "white";
          } 
      }