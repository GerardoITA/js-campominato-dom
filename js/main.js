let inizio = document.getElementById("start")
const Bombs = randomUniqueInteger(16, 1, 100);


console.log(Bombs);
inizio.addEventListener("click", 

    function(){
        clearBox("container");
        createBox(100, "container");

        let scatole = document.getElementsByClassName("box");
        for (const box of scatole) {
            box.addEventListener('click', function onClick() {

                let boxContent = box.innerHTML
                this.classList.toggle("clicked");
                console.log(boxContent);

                let isBoxABomb = boxBomb(boxContent);
                console.log(isBoxABomb);
                
             
            }
            );
        } 
    }   

    
)

/* let scatole = document.getElementsByClassName("box");

for (const box of scatole) {
    box.addEventListener('click', function onClick() {

        for(i = 1; i < scatole.length; i++){
            this.classList.toggle("clicked");
        }   
        console.log(i) 
    });
} 
 */




