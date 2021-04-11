const URL = 'https://official-joke-api.appspot.com/jokes/random';
const URL2 = 'https://official-joke-api.appspot.com/jokes/programming/ten';
const joke = document.querySelector('h1');
const punchline = document.querySelector('h2');
const buttonRandomJokes = document.querySelector('#random-joke');
const buttonProgrammingJokes = document.querySelector('#random-programmer-joke');
const buttonPunchLine = document.querySelector('#punch-line');
let data = {};

buttonRandomJokes.addEventListener('click', getRandomJoke);
buttonProgrammingJokes.addEventListener('click', getRandomProgrammerJoke);
buttonPunchLine.addEventListener('click', getPunchLine);

function getRandomJoke(){
    
    fetch(URL)
    
    .then((res) => res.json())
    
    .then((data) => {
        punchline.style.visibility = 'hidden';
        console.log(data);
        joke.innerText = data.setup;
        punchline.innerText = data.punchline;
    });
};



function getRandomProgrammerJoke(){

    fetch(URL2)
    
    .then((res) => res.json())
    
    .then((data) => {
        punchline.style.visibility = 'hidden';
        console.log(data);
        joke.innerText = data[0].setup;
        punchline.innerText = data[0].punchline;
    });
};

function getPunchLine(data){
    punchline.style.visibility = 'visible';
};