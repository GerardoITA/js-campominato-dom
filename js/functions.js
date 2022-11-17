function createBox(n, where) {
    
    for (let i = 1; i < n + 1; i++ ){

        document.getElementById(where).innerHTML += `
            <div class="box">${i}</div>
        `;
    }
}

function clearBox(where) {

    document.getElementById(where).innerHTML = ``;
    console.clear;

}
/* function addClassOnClick(){
   
    this.classList.toggle("clicked");
   
    
} */