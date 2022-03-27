'use strict'

window.onload = () => {
    console.log('loaded')
}

// Oefening 1

let color = {
    nR: null,
    nG: null,
    nB: null,

    setColor: function(){
        let r = prompt("r");
        let g = prompt("g");
        let b = prompt("b");
        if(r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255){
            console.log('error');
        }
        else if(r == null || g == null || b == null){
            console.log("error");
        }
        else
        {
            this.nR = r;
            this.nG = g;
            this.nB = b;
            console.log('succes')
            color.showColor();
        }
    },

    showColor: function(){
        console.log(`RGB(${this.nR},${this.nG},${this.nB})`);
    },

    
};

color.setColor();


// Oefening 2

let student = {
    name: "Thomas" ,
    age: 18,
    degree: "Software bro",
    courses: [],

    setPersonalDetails: function(){
        let name = prompt("Wat is je naam? :");
        let age = prompt("Wat is je leeftijd? :");
        let degree = prompt("Wat is je degree? :");
        
        this.name = name;
        this.age = age;
        this.degree = degree;
    },

    addCourse(course){
        this.courses.push(course);
    },

    showStudent(){
        console.log(`Mijn naam is ${this.name}. Ik ben ${this.age} jaar oud en volg ${this.degree}. \nMijn vakken zijn: ${this.courses.join(', ')}`);
    },
}

student.setPersonalDetails();

while(true){
    let course = prompt("Geef een vak (cancel om af te sluiten)");
    if (course){
        student.addCourse(course);
    }
    else{
        break;
    }      
}

student.showStudent();





// Oefening 3 | OEF 5-6

let student2 = {
    name: "Default Name" ,
    age: 18,
    degree: "DigX",
    courses: [],

    setPersonalDetails: function(details){
        [this.name, this.age, this.degree] = details;
    },

    addCourse(...courses){
        this.courses = [...this.courses, ...courses];
    },

    showStudent(){
        console.log(`Mijn naam is ${this.name}.\nIk ben ${this.age} jaar oud en volg ${this.degree}.\nMijn vakken zijn: ${this.courses.join(', ')}`);
    },
}


let name = prompt("Wat is je naam? :");
let age = prompt("Wat is je leeftijd? :");
let degree = prompt("Wat is je degree? :");
let data = [name,age, degree];
student2.setPersonalDetails(data);

student2.addCourse('WE', 'WDA');
student2.addCourse('Programming Essentials');
student2.addCourse('Programming Advanced', 'Android', 'iOS', 'Design');

student2.showStudent();





// OEFENING 3 | OEF 7

document.getElementById('create').addEventListener('click', createStudent);
document.getElementById('show').addEventListener('click', showStudent);

let listOfStudents = [];

//CONSTRUCTOR FUNCTIE
function Student(name, age, degree){

    this.name = name;
    this.age = age;
    this.degree = degree;
    this.courses = [];
    this.setPersonalDetails = function(details){
        [this.name, this.age, this.degree] = details;

    }
    this.addCourse = function(course){
        this.courses.push(course);
    }
    this.showStudent = function(){
        console.log(`Mijn naam is ${this.name}.\nIk ben ${this.age} jaar oud en volg ${this.degree}.\nMijn vakken zijn: ${this.courses.join(', ')}`);
    }
}


function createStudent(){
    let name = prompt("Wat is je naam? :");
    let age = prompt("Wat is je leeftijd? :");
    let degree = prompt("Wat is je degree? :");
    let student = new Student();
    student.setPersonalDetails(data);

    let data = [name,age, degree];
    student.setPersonalDetails(data);

    while(true){
    let course = prompt("Geef een vak (cancel om af te sluiten)");
        if (course){
            student.addCourse(course);
        }
        else{
            break;
        }
    }   
    
    // Add to list of students

    listOfStudents.push(student);

}


function showStudent(){
    let div = document.get 
    for(let s of listOfStudents){
        //Create paragraph
        let p = document.createElement('p');
        //Fill with content 
        p.innerHTML = s.showStudent();
        //Add to div
        document.getElementById('content').appendChild(p);
    }
}
