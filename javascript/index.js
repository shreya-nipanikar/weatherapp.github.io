const api = {
    key: "d0e66d43dff074870fa0108373244b2a",
    baseurl: "https://api.openweathermap.org/data/2.5/",
}

//const searchbox = document.querySelector('.myInput').value;
//searchbox.addEventListener('onClick', setQuery);

function getInputValue(){
    var inputValueb = document.getElementById("myInput").value;
    
    getResults(inputValueb);

    document.getElementById("myInput").value="";
}

function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&appid=${api.key}`)
    .then(results => {
        return results.json();
    }).then(displayResults);
}

function displayResults (weather) {
    console.log(weather);

    let imgicon = document.querySelector('.icon');
    imgicon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}.png"><span> Weather Report</span>`;
    
    let now = new Date();
    let date = document.querySelector('.citytime');
    date.innerText = `${weather.name}, ${weather.sys.country}, ${dateBuilder(now)}`;

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>&degC</span>`;

    let currweather = document.querySelector('.currweather');
    currweather.innerText = `${weather.weather[0].description}`;

    let feelslike = document.querySelector('.feelslike');
    feelslike.innerHTML = `${Math.round(weather.main.feels_like)}<span>&degC</span>`;

    let temperature = document.querySelector('.temperature');
    temperature.innerHTML = `${Math.round(weather.main.temp_max)}<span>&degC</span>/${Math.round(weather.main.temp_min)}<span>&degC</span>`;

    let humidity = document.querySelector('.humidity');
    humidity.innerText = `${weather.main.humidity}`;
    
    let wind = document.querySelector('.wind');
    wind.innerText = `${weather.wind.deg}`;

    let sky = document.querySelector('.sky');
    sky.innerText = `${weather.weather[0].main}`;
}

function dateBuilder(d) {
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}
