// variables for all querrySelectors //
const container = document.querySelector(".container");
const startGrit = document.querySelector(".startGrit");

// variables to createElement // 
const createDiv = document.createElement("div");

// variables to change style //
const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    width: "512px",
    height: "512px"
}

const divStyle = {
    border: "0.5px solid black",
    padding: "15.5px",
}

// function to create empty divs //
for (let i = 0; i < (16*16); i++) {
    const createDiv = document.createElement("div");
    container.appendChild(createDiv);
    createDiv.className = "square";
    Object.assign(createDiv.style, divStyle);
    Object.assign(container.style, containerStyle);
    // colors div
    createDiv.addEventListener("mouseover", () => {
        createDiv.style.backgroundColor = "red";
    });
    // uncolors div
    // createDiv.addEventListener("mouseout", () => {
    //     createDiv.style.backgroundColor = "white";
    // })
}

// function to create new grid //
function newGrid(prompt) {
    for (let i = 0; i < (prompt*prompt); i++) {
        const createDiv = document.createElement("div");
        container.appendChild(createDiv);
        createDiv.className = "square";
        Object.assign(createDiv.style, divStyle);
        Object.assign(container.style, containerStyle);
        // colors div
        createDiv.addEventListener("mouseover", () => {
            createDiv.style.backgroundColor = "red";
        });
        // uncolors div
        // createDiv.addEventListener("mouseout", () => {
        //     createDiv.style.backgroundColor = "white";
        // })
    }
}

// eventListener to get user input for grid size, delets old grid, builds up new grid //
startGrit.addEventListener("click", () => {
    let promptValue = prompt("Please choose the size of the new grid");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    newGrid(promptValue);
});