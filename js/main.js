let inizio = document.getElementById("start")

inizio.addEventListener("click", 

    clearBox("container"),
    createBox(100, "container")

    
)
let scatole = document.getElementsByClassName("box");

for (const box of scatole) {
    box.addEventListener('click', function onClick() {

        for(i = 1; i < scatole.length; i++){

            this.classList.toggle("clicked");

        }   
        console.log(i)
    });
} 

const myArray = randomUniqueInteger(16, 1, 100);

