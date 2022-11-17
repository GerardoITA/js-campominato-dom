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

function pod(num) {
        
        let risultato;

        if (num % 2 === 0) {
            risultato = "pari";
        } else {
            risultato = "dispari";
        }

        return risultato;
}