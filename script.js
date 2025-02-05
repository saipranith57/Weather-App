const API_KEY = "bd74fcc47c908217af294d75e562f9a0";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search_bar = document.querySelector(".search input");
const search_btn = document.querySelector(".search button");
const update_img = document.querySelector(".weather img")
const CheckWeather = async (city) => {
    const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
    const data = await response.json();
    if(response.status==404){
document.querySelector(".error").style.display="block";
    }
    else{
        document.querySelector(".city").innerHTML = data.name;
    const temp = Math.round(Number(data.main.temp));
    document.querySelector(".temp").innerHTML = `${temp}°c`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}g/m^3`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} Km/h`;
     const key =data.weather[0].main;
  switch (key) {
    case 'Clear':
        update_img.src ="images/clear.png"
        break;
    case 'Rain':
        update_img.src ="images/rain.png"
        break;
    case 'Clouds':
        update_img.src ="images/clouds.png"
        break;
    case 'Mist':
            update_img.src ="images/mist.png"
            break;
    case 'Drizzle':
                update_img.src ="images/drizzle.png"
                break;
    case Snow :
        update_img.src ="images/snow.png"
                break;
    default:
        update_img.src ="images/snow.png"
        break;
  }
document.querySelector(".weather").style.display="block";
    }


};


search_btn.addEventListener("click", () => {
    const city = search_bar.value;
    CheckWeather(city);
});
search_bar.addEventListener("keydown", (event) => {
    if(event.key==="Enter"){
        const city = search_bar.value;
        CheckWeather(city);
    }
});
