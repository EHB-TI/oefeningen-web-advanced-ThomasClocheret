'use strict'

window.onload = () => {
    console.log('loaded');
}

document.getElementById('register').addEventListener('click', createStudent);
//document.getElementById('show').addEventListener('click', showStudent);

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
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let student = new Student(name,age);
    // Object Created

    //Empty  inputfields
    document.getElementById('name').value ='';
    document.getElementById('age').value = '';

    listOfStudents.push(student);

    localStorage.setItem('list', JSON.stringify(listOfStudents));

    //Toon alert
    addAlert(true, "student object created successfully");

    console.log(listOfStudents);

}

function addAlert(status, message){
    let content = "";
    if(status){ //True  = success
        content = `<div class="alert alert-success" role="alert">${message}</div>`;
    }else{ // False Error
        content = `<div class="alert alert-danger" role="alert">${message}</div>`
    }

    // Add message on top page 

    document.getElementById('messages').innerHTML = content;
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