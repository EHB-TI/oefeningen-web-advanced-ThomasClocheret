'use strict'

// Async 
let config = null;

async function getConfig(){
    let resp = await fetch('config.json');
    let data = await resp.json();
    config = data;
}

window.onload = () => {
    console.log('loaded');
    getConfig();

    document.getElementById('searchButton').addEventListener('click', submitForm);
    document.getElementById('card').style.display = 'none';
    
    async function getData(serachParameter){
        let url = `${config.baseurl}s=${serachParameter}${config.apikey}`;
        console.log(url);
        let resp = await fetch(`${config.baseurl}s=${serachParameter}${config.apikey}`);
        let data = await resp.json();
        console.log(data);
    }
    

    let submitForm = event => {
        event.preventDefault();
        let movieInput = document.getElementById('movieInput').value;
        console.log(movieInput);

        //search for the movie 
        let result = getData(movieInput);
    }

}

