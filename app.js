document.getElementById('button').addEventListener('click',getResults);

function getResults(){
    // Consts
    const city = document.getElementById('city-name').value;
    const state = document.getElementById('state-name').value;
    const apikey = 'c6d18aac47e9bed284b6413747508730';

    // Show temp on click
    document.getElementById('temperature').style.visibility = 'visible';
    

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${apikey}`, true);

    xhr.onload = function(){
        if(this.status===200){
            const results = JSON.parse(this.responseText);
            
            const temp = (results.main.temp);
            const celcius = (temp.toFixed(0) - 273);
            const condition = (results.weather[0].main);
            const icon = (results.weather[0].icon)
            
            document.getElementById('temp').innerHTML = `<p>${celcius}&#176; C
            </p>`;
            document.getElementById('condition').innerHTML = `<p>${condition}</p>
            <img id="icon" src='http://openweathermap.org/img/w/${icon}.png'>`
        }
    };

    xhr.send();

}