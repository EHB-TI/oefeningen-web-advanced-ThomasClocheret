'use strict'

window.onload   = () => {
    console.log('loaded');
}

//Oefening 1
alert("Hello World");


//Oefening 2
let a = 10;
a += 5;
console.log(a);

//Oefening 3


var age = window.prompt('Leeftijd?');

if (age >= 18)
{
    console.log('welcome');
}
else
{
    console.log('nog geen 18')
}

var age = prompt('Leeftijd?').value;

if (age >= 18)
{
    console.log('Welkom!');
}
else
{
    console.log('Nog geen 18')
}

//Oefening 4

let btn = document.getElementsByTagName("button")[0].onclick = function(){
    event.preventDefault(); // niet refreshen 
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
}

//Oefening 7

let zin = "hallo allemaal";

function setHooftLetter(zin){

    let eersteLetter = (zin.charAt(0)).toUpperCase();   //We selecteren de eerste letter en maken er een hooftletter van
    let restZin = zin.slice(1);                         //We snijden na de eerste letter de zin af

    let newZin = `${eersteLetter}${restZin}`;           //We plakken ze weer samen
    console.log(newZin);
}
setHooftLetter(zin);


//Oefening 8

let zin = "Judas Van Bergen";
let zinLengte = zin.length;
let tellerLengte = 0;

while(zinLengte > tellerLengte)
{
    let name = zin.slice(tellerLengte, zin.indexOf(" "));         // We scheiden de eerste naam van de volledige naam
    let lengte = name.length;                                     // We bepalen de lengte van de voornaam
    tellerLengte += lengte;
    let nieuweNaam = setHooftLetter(name);
    let nieuweZin = ` ${nieuweNaam}`;
    console.log(nieuweZin);
}

function setHooftLetter(zin){

    let eersteLetter = (zin.charAt(0)).toUpperCase();   
    let restZin = zin.slice(1);                       
    return `${eersteLetter}${restZin}`;        
}

//Oefening 9

let text = "Javascript is the main focus of Web Essentials";
let change = text.replace(/Essentials/g, "Advanced");

console.log(change);


//Oefening 10 Schrijf een functie die als parameter een lijst van landen accepteert.
//De functie geeft je het land met de langste naam terug. Test dit in de console.


let landen = [];

let btn2 = document.getElementsByTagName("button")[1].onclick = function(landen){
    let land = document.getElementById('land').value;
    landen.push("land");
};

let btn3 = document.getElementsByTagName("button")[2].onclick = function(){
    console.log(landen);
    lengteLand(landen);
};

let lengteLand = function(landen){
    let lengte = landen.length;
    let max = " ";
    for(let i = 0; i < lengte; i++)
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

let huidigeTijd = `${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

document.getElementById("date").innerHTML = huidigeTijd;

console.log(huidigeTijd);

// extra calc nog x dagen en het is feest 

const verjaardagD = 22;
const verjaardagM = 1;

let dagen = date.getDate;
let maanden = date.getMonth;

let aantalDagen //????

if(dagen === verjaardagD && maanden === verjaardagM)
{
    document.getElementById("date2").innerHTML = "Gelukkige verjaardag !"
}
else
{
    document.getElementById("date2").innerHTML = ` nog ${aantalDagen} en dan is het je verjaardag!`;
}

