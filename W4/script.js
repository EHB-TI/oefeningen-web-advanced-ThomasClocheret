'use strict'

window.onload = () => {
    console.log('loaded');
}


// Stel we willen task 2 pas laten uitvoeren na task 1
/*
function task1() {
    console.log("task1");
}

function task2() {
    console.log("task2");
}

setTimeout(task1, 2000);
task2();
*/
// We gaan een callback moeten maken 



// 1)  Genereer een getal tussen 1 en 20 in uw javascriptcode. 
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max - min +1)+ min);
}

const randomInt = randomIntFromInterval(1, 20);
console.log(randomInt);

// aanspreken van de button
let buttonNR = document.getElementById('buttonNR');

buttonNR.addEventListener("click", function(event){
    event.preventDefault();
    compareNumber();
});

// promise maken 

let compareNumber = () => {
    let p = new Promise((resolve, reject) => {
        let inputnr = document.getElementById("inputnr").value;
        if(inputnr == randomInt) {
            resolve('Je hebt het mysterieuze nummer geraden!');
        } 
        else if(inputnr > randomInt) {
            reject('Het mysterieuze getal is lager.');
        }
        else if(inputnr < randomInt) {
            reject('Het mysterieuze getal is hoger.');
        }
        else {
            reject('is geen geldig nummer (Fout)');
        }
    })

    p.then((message) => {
        alert(message);
    }).catch((message) => {
        alert (message + ' Raad nog eens!');
    })
}
