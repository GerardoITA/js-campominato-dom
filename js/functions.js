function createBox(n, where) {
    
    for (let i = 1; i < n + 1; i++ ){

        document.getElementById(where).innerHTML += `
            <div class="box">${i}</div>
        `;
        //creai div e lo metti una una variabile
        //variabile (elemento)aggiungi la classe box
        //metit numero corrente nel div
        //aggiungio event listener

        //
    }
}

function clearBox(where) {

    document.getElementById(where).innerHTML = ``;

}

function randomInteger(max, min){
     
    return ( Math.floor(Math.random() * ((max + 1) - min) + min));

}

function randomUniqueInteger(howMany, minNum, maxNum) {
    
   const uniqueArr = [];

    for (let i = 0; i < howMany + 1; i++){

        let newNumber = randomInteger(minNum, maxNum);

        if (!uniqueArr.includes(newNumber)) {
            uniqueArr.push(newNumber);
        }

    }

    return uniqueArr;




      /* while (uniqueArr.length < howMany) {

        let newNumber = randomInteger(minNum, maxNum);

        if (!uniqueArr.includes(newNumber)) {
            uniqueArr.push(newNumber);
        }
    } */
}

function boxBomb(num) {

    let risultato;

    if (Bombs.includes(num)) {
        risultato = "boom";
    } else {
        risultato = "safe";
    }

    return risultato;
}