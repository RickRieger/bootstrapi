const URL = 'https://dog.ceo/api/breeds/image/random';

const imagePlaceholder = document.querySelector('img');
const button = document.querySelector('.btn-warning');
console.log(button);
const carousel = document.querySelector('.carousel-inner');
let imagesArray = [];
button.addEventListener('click', () => 
// Step 1: Make a GET request to the Dog API URL
fetch(URL)

// Step 2: Extract JSON from response
.then((resVariable) => resVariable.json())

// Step 3: Process JSON as we please
.then((result) => {
    
    imagesArray.push(result.message);
    console.log(imagesArray);
    const div = document.createElement('div');
    if (imagesArray.length === 1){
        div.className = 'carousel-item active';
    }
    else{
        div.className = 'carousel-item';
    }
    const img = document.createElement('img');
    img.src = result.message;
    img.className = 'd-block w-100';
    div.appendChild(img);
    carousel.appendChild(div);
    imagePlaceholder.src = result.message; 
    
}));


