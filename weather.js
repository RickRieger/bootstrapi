const cityForm = document.querySelector('#city-input');
const temp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const desc = document.querySelector('.desc');
const buttonSubmit = document.querySelector('#submit');
const buttonClear = document.querySelector('#clear');
const weatherObjectArray = [];
const carousal = document.querySelector('.carousel-inner');
buttonSubmit.addEventListener('click', getWeather);
buttonClear.addEventListener('click', clearFields);

function getWeather(){
  
    const city = cityForm.value;
    
    const URL2 = `https://goweather.herokuapp.com/weather/${city}`;
    
    fetch(URL2)
    
    .then((res) => res.json())
    
    .then((data) => {
        
        if(data.message === 'NOT_FOUND'){
            alert('No data available, please choose another city!');
            return;
        }
        
        carousal.innerText = '';
        temp.innerText = data.temperature;
        wind.innerText = data.wind;
        desc.innerText = data.description;
        
        

        weatherObjectArray.push({
            city: city,
            temperature: data.temperature,
            wind: data.wind,
            description: data.description
        });

       
        

        for(const object of weatherObjectArray){

        //Create Elements needed

        const divItem = document.createElement('div');
        const img = document.createElement('img');   
        const divCaption = document.createElement('div');
        const h1 = document.createElement('h1'); 
        const liOne = document.createElement('li');
        const liTwo = document.createElement('li');
        const liThree = document.createElement('li');
        
        //class names

        if(weatherObjectArray.indexOf(object) === (weatherObjectArray.length - 1)){
        divItem.className = "carousel-item active";
       
        } 

        else{
        divItem.className = "carousel-item";
        }

        img.className = 'd-block w-100';

        divCaption.className = 'carousel-caption d-none d-md-block';
        
        //Handle img src
        if (object.description.toLowerCase().includes('sunny')){
            img.src = 'images/sunny.jpg';
        }
        if (object.description.toLowerCase().includes('cloudy')){
            img.src = 'images/cloudy.jpg';
        }
        if (object.description.toLowerCase().includes('rain')){
            img.src = 'images/rain.jpg';
        }
        if (object.description.toLowerCase().includes('drizzle')){
            img.src = 'images/rain.jpg';
        }
        if (object.description.toLowerCase().includes('clear')){
            img.src = 'images/sunny.jpg';
        }
        
        //Handle innerText
        h1.innerText = object.city;
        liOne.innerText = `Temperature: ${object.temperature}`;
        liTwo.innerText = `Wind: ${object.wind}`;
        liThree.innerText = `Description: ${object.description}`;

        //Handle append to element
        divCaption.append(h1);
        divCaption.append(liOne);
        divCaption.append(liTwo);
        divCaption.append(liThree);
        
        divItem.append(img);
        divItem.append(divCaption);

        //Handle append to Element on dom
        carousal.append(divItem);



        };
    });
};

function clearFields(){
    
    temp.innerText = '';
    wind.innerText = '';
    desc.innerText = '';
    cityForm.value = '';

}