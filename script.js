// Loop to create the rows that will contain our cells
// As long as the incrementer is below 16 a row will be
// created
// let button = document.createElement('button');
// button.innerHTML = prompt("Enter your grid dimensions");
// document.body.appendChild(button);

// console.log(button.value);
// for(var j = 0; j < user; j++) {
//     var row2 = document.createElement('div');
//     for(var k = 0; k < user; k++) {
//         var cell2 = document.createElement('div');
//         cell2.classList.add("square");
//         cell2.style.display = "inline-block";
        
//         row2.appendChild(cell2);
//     }
//     document.getElementById("container").appendChild(row2);
// }

// for (var i = 0; i < 16; i++) {
//     var row = document.createElement("div");
//     // Loop to create the cells/squares inside the rows
//     // As long as the incrementer is below 16, an additional
//     // cell will be created
//     for (var j = 0; j < 16; j++) {
//         var cell = document.createElement('div');
//         cell.classList.add("square");
//         cell.style.display = "inline-block";
//         row.appendChild(cell);
//     }
//     document.getElementById("container").appendChild(row); 
   
// }
const grid = document.querySelector('#container');
const square = document.querySelector('div');
square.addEventListener('mouseover', function(e) {
    console.log("moused over");
    e.target.classList.replace("square", "color");
})
// Create a button through the DOM
// Adds an event listener for the click, which then fires a prompt asking
// for grid parameters
// Text Node will be the text within the button
// Finally we appened the buttom to our document
let buttonContainer = document.createElement('div');
document.body.appendChild(buttonContainer);
buttonContainer.id = 'buttonContainer';
let button = document.createElement('button');
button.addEventListener('click', function (e) {
    let userValue = prompt("Enter the parameters for the grid please", "");
    console.log(userValue);
    for (var i = 0; i < userValue * userValue; i++) {
        var row = document.createElement("div");
        // Loop to create the cells/squares inside the rows
        // As long as the incrementer is below 16, an additional
        // cell will be created
        // for (var j = 0; j < userValue; j++) {
        //     var cell = document.createElement('div');
            row.classList.add('square');
            grid.appendChild(row);
            grid.setAttribute('style', `grid-template-columns: repeat(${userValue}, 2fr); grid-template-rows: repeat(${userValue}, 2fr);`)
            square.addEventListener('mouseover', function(e) {
                console.log("moused over");
                e.target.classList.replace("square", "color");
            })
        };
        document.getElementById("container").appendChild(row); 
       
});

button.innerHTML = "Click Me!";
buttonContainer.appendChild(button);



// function sizingGrid(grid) {
//     container.style.setProperty("--grid-rows", grid);
//     container.style.setProperty("--grid-cols", grid);
// }

// function createDiv(grid) {
//     for (let i = 0; i < grid * grid; i++) {
//         let divs = document.createElement('div');
//         divs.classList.add("divs");
//         container.appendChild(divs);
        
//     }
// }
