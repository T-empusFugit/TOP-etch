

const containerGrid = document.querySelector(".container-grid");

const input = document.querySelector("input")

// let numRow = input.value;
// console.log(numRow);

// let numRow = 8;

// let testText = document.createElement("div")
// testText.textContent = "Hello"

// containerGrid.appendChild(testText)

// let square = document.createElement("div");
// // square.style.cssText = "height: 50px; width: 50px; background-color: grey"
//     square.style.cssText = `
//         height: 50px;
//         width: 50px;
//         background-color: #555;
//     `;

// containerGrid.appendChild(square)



// let colorHover = "white";

// squares = document.querySelectorAll(".square");

const btnSize = document.querySelector(".button-size");
btnSize.addEventListener("click", createGrid);


containerGrid.addEventListener("mouseover", (event) => {
    let target = event.target;
    // console.log(event);
    // console.log(target);

    // console.log(target.classList[0])


    if (target.classList[0] == "square") {
        target.style.backgroundColor = "blue";
        target.style.borderColor = "blue";
            //     height: 50px;
            //     width: 50px;
            //     background-color: blue;
            //     border-style: solid;
            //     border-color: blue;
            //     border-width: 1px;
            // `;
    }

    // 

})


function createGrid() {

    emptyContainerGrid()


    const input = document.querySelector("input")
    let numRow = Math.min(input.value, 100);

    const totalHeight = 400;
    let height = totalHeight / numRow;
    let width = height;


    for (let j=1; j<=numRow; j++) {
        let row = document.createElement("div");
        
        for (let i=1; i<=numRow; i++) {
            let square = document.createElement("div");
            square.classList.toggle("square");
            square.style.cssText = `
                width: 50px;
                height: 50px;
                background-color: #555;
                border-style: solid;
                border-width: 1px;
            `;
            square.style.height = height.toString() + "px";
            square.style.width = width.toString() + "px";

            row.appendChild(square);
        }
        containerGrid.appendChild(row);
    }
}

function emptyContainerGrid() {
    while (containerGrid.firstElementChild) {
        containerGrid.firstElementChild.remove();
    }
}