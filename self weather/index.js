const APIURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const key = "491727e5714212af2b050e9ac1cc98ec";
const cityName = document.getElementById('cityName');
const newCity = document.getElementById("newCity");
const newTemp = document.getElementById('newTemp');
const humidity = document.getElementById("Humidity");
const windSpeed = document.getElementById("windSpeed");
const searchBtn = document.getElementById('searchBtn');


searchBtn.addEventListener("click", () => {

    let promise = fetch(APIURL+cityName.value+"&appid="+key+"&units=metric");   

    
    promise

    .then((response)=>{
        if (!response.ok){
            alert("wrong city name")
        }
        return response.json();
    })
        
    .then((data) => {
        
        newCity.innerText = data.name;
        newTemp.innerText =data.main.temp+"°C";
        humidity.innerText = data.main.humidity+"%";
        windSpeed.innerText = data.wind.speed+"Km/H";
    });
});