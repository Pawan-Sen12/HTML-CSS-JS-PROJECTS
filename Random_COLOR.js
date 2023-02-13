const containerEl = document.querySelector(".container")

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
    
}

const colorContainerEls = document.querySelectorAll(".color-container")

generatecolors();
function generatecolors(){
    colorContainerEls.forEach(
    (colorContainerE1)=>{
        const newColor = randomcolor();
        
        colorContainerE1.style.backgroundColor = "#" + newColor;
        colorContainerE1.innerHTML = "#" + newColor;

    }
    )
}

function randomcolor(){
    const chars = "0123456789abcdef"
    const colorcodelenght = 6
    let colorcode = ""
    for (let index = 0; index < colorcodelenght; index++) {
        const randomNum = Math.floor(Math.random()*chars.length);
        colorcode += chars.substring(randomNum,randomNum + 1)
          
        
    }
    return colorcode;
}