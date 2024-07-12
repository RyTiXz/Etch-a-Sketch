// variables for all querrySelectors //
const container = document.querySelector(".container");
const startGrid = document.querySelector(".startGrid");
const changeGridSize = document.querySelector(".changeGridSize");
const resetGrid = document.querySelector(".reset");

// variables to createElement // 
const createDiv = document.createElement("div");
const computedStyle = getComputedStyle(container);

// Array for all the colors
const colors = [];

for (let i = 0; i < 100; i++) {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  colors.push(randomColor);
}

// function to create empty divs //
for (let i = 0; i < (16*16); i++) {
    const createDiv = document.createElement("div");
    container.appendChild(createDiv);
    createDiv.className = "square";
    createDiv.addEventListener("mouseover", () => {
        createDiv.style.backgroundColor = colors[(Math.floor(Math.random() * colors.length))];
    });
}


// function to create new grid //
let promptValueString = 0;

function newGrid(prompt) {
    const newDivSize = 100 - (computedStyle.width.slice(0, -2)/promptValueString)/computedStyle.width.slice(0, -2)*100;
    for (let i = 0; i < (prompt*prompt); i++) {
        const createDiv = document.createElement("div");
        container.appendChild(createDiv);
        createDiv.className = "square";
        createDiv.style.flex = "0 0 calc(var(--containerWidth) - " + newDivSize + "%";
        createDiv.addEventListener("mouseover", () => {
            createDiv.style.backgroundColor = colors[(Math.floor(Math.random() * colors.length))];
        });
    }
}

// eventListener to get user input for grid size, delets old grid, builds up new grid //
startGrid.addEventListener("click", () => {
    do{
        var promptValue = parseInt(window.prompt("Please enter a number from 1 to 100", ""), 10);
    }while(isNaN(promptValue) || promptValue > 100 || promptValue < 1);
    promptValueString = promptValue.toString();

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    newGrid(promptValueString);
});

// eventListener to change grid size, without changing the amount of grids
changeGridSize.addEventListener("click", () => {
    const oldGridSize = getComputedStyle(container).getPropertyValue('--containerWidth').slice(0, -2);
    console.log(oldGridSize);
    do{
        var promptGridSize = parseInt(window.prompt("Please enter a number from 100 to 1000", ""), 10);
    }while(isNaN(promptGridSize) || promptGridSize > 1000 || promptGridSize < 100);
    container.style.setProperty('--containerWidth', promptGridSize+"px");
})