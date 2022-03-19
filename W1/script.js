'use strict'

window.onload   = () => {
    console.log('loaded');
}

//Oefening 1
alert("Hello World");


//Oefening 2
let getal = 10;
getal += 5;
console.log(getal);

//Oefening 3


var age = window.prompt('Leeftijd?'); //Gewoon promt() is ook mogelijk 

if (age >= 18)
{
    console.log('welcome');
}
else
{
    console.log('nog geen 18');
}

//Oefening 4

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){
    //event.preventDefault(); // niet refreshen 
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    function calcAge(){
        if (age >= 18)
        {
            console.log('Welcome', name);
        }
        else
        {
            console.log('Nog geen 18', name);
        }
    };
    calcAge();
})


//Oefening 7

let woord = "hallo";

function setHooftLetter(woord){

    let eersteLetter = (woord.charAt(0)).toUpperCase();   //We selecteren de eerste letter en maken er een hooftletter van
    let restWoord = zin.slice(1);                         //We snijden na de eerste letter de zin af

    let newWoord = `${eersteLetter}${restWoord}`;           //We plakken ze weer samen
    console.log(newWoord);
}
setHooftLetter(woord);

//Oefening 8
 

let naam = "judas de verader";

function test(naam){
    let word = naam.trim();
    let words = word.split(" ");
    for(let i = 0; i < words.length; i++) // of for(let i in words);
    {
        console.log(words);
        words[i] = words[i].slice(0,1).toUpperCase()+words[i].substring(1);
    }
    console.log(words.join(" "));
}
test(naam);

//Oefening 9

let text = "Javascript is the main focus of Web Essentials";
let change = text.replace(/Essentials/g, "Advanced");

console.log(change);


//Oefening 10 Schrijf een functie die als parameter een lijst van landen accepteert.
//De functie geeft je het land met de langste naam terug. Test dit in de console.


let landen = [];
let teller = 0;

let btn2 = document.getElementById("btn2").onclick = function(){
    let land = document.getElementById('land').value;
    fullArray(land);
    teller++;
};
let fullArray = function(land){
    landen.push(land);
}

let btn3 = document.getElementById("btn3").onclick = function(){
    lengteLand();
};


let lengteLand = function(){
    
    let max = "";
    for(let i = 0; i < teller; i++)
    {
        if (landen[i].length > max)
        {
            max = landen[i];
        }
    }
    console.log(max);
};

// DATE print huidige date 

let date = new Date();
console.log(date);

var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let month = mL[getMonth];
/*
let month;
switch(date.getMonth()){
    case 0: 
        month ="Jan";
        break;
    case 1: 
        month ="Feb";
        break;
    case 2: 
        month ="Mar";
        break;
    case 3: 
        month ="Apr";
        break;
    case 4: 
        month ="May";
        break;
    case 5: 
        month ="Jun";
        break;
    case 6: 
        month ="Jul";
        break;
    case 7: 
        month ="Aug";
        break;
    case 8: 
        month ="Sep";
        break;
    case 9: 
        month ="Oct";
        break;
    case 10: 
        month ="Nov";
        break;
    case 11:
        month = "Dec";
}
*/

let huidigeTijd = `${date.getDate()} ${month} ${date.getFullYear()}`

document.getElementById("date").innerHTML = huidigeTijd;

console.log(huidigeTijd);

// extra calc nog x dagen en het is feest 

const verjaardagD = 22;
const verjaardagM = 1;

let dagen = date.getDate;
let maanden = date.getMonth;

let aantalDagen;

if(maanden > 2){
    var a = (12 - maanden)%2;
    if(a == 0)
    {
        var b = (12 - maanden)/2;
        aantalDagen = b*30 + b+31 + 53;
    }
    else if(a != 0){
        var c = ((12 - maanden)-1)/2
        aantalDagen = b*30 + b+31 + 53 + 30;
    }
    if((12 - maanden)>6){
        aantalDagen++;
    }
    aantalDagen - dagen;
}
else if(maanden < 2){
    aantalDagen = 53 - dagen;
}
else if (maanden == 2){
    aantalDagen = 22 - dagen;
}

if(dagen === verjaardagD && maanden === verjaardagM)
{
    document.getElementById("date2").innerHTML = "Gelukkige verjaardag !"
}
else
{
    document.getElementById("date2").innerHTML = ` nog ${aantalDagen} en dan is het je verjaardag!`;
}
