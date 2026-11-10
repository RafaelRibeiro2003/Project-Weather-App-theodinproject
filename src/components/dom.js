import { getWeather } from './api.js'
import { Weather } from './weather.js'


const displaySearchCity = async () => {
    const display = document.createElement("div");
    display.classList.add("display");

    const titleDisplay = document.createElement("h1");
    titleDisplay.textContent = "Get the Weather";
    
    const form = document.createElement("form");

    const input = document.createElement("input");
    input.placeholder = "Enter a city...";

    const button = document.createElement("button");
    button.textContent = "Search"

    form.append(input, button);
    display.append(titleDisplay, form);

    const divContent = document.querySelector("#content");
    divContent.appendChild(display);

    form.addEventListener("submit", async (event) => {
        handleSearch(event, input);
    });
};


const handleSearch = async (event, input) => {
    event.preventDefault();

    const location = input.value.trim();

    if (!location) return;

    const form = event.currentTarget;

    try {
        const data = await getData(location);
        displayWeatherCity(data);
        
    } catch (error) {
        console.error(error);
        displayNotFindLocation(form);
    }
};


const getData = async (location) => {
    const data = await getWeather(location);
    return new Weather(data);
};

const displayNotFindLocation = (form) => {
    const oldError = form.querySelector(".errorMessage");
    if (oldError) oldError.remove();

    const errorText = document.createElement("p");
    errorText.classList.add("errorMessage");
    errorText.textContent = "City not found. Please try again.";

    form.appendChild(errorText);
};

const displayWeatherCity = (dataWeather) => {
    const display = document.querySelector(".display");
    display.replaceChildren();
    display.classList.add("increase");

    /* Divs*/
    const displayWeather = document.createElement("div");
    displayWeather.classList.add("displayWeather");
    displayWeather.classList.add("weather-animation");

    const displayLocationWeatherDiv = document.createElement("div");
    displayLocationWeatherDiv.classList.add("displayLocationWeather");
    displayLocationWeather(displayLocationWeatherDiv, dataWeather.location, dataWeather.date);

    const displaySearchWeatherDiv = document.createElement("div");
    displaySearchWeatherDiv.classList.add("displaySearchWeather");
    displaySearchWeather(displaySearchWeatherDiv);

    const displayTempWeatherDiv = document.createElement("div");
    displayTempWeatherDiv.classList.add("displayTempWeather");
    displayTempWeather(displayTempWeatherDiv, dataWeather.temperature, dataWeather.conditions);

    const displayInfoWeatherDiv = document.createElement("div");
    displayInfoWeatherDiv.classList.add("displayInfoWeather");
    displayInfoWeather(displayInfoWeatherDiv, dataWeather.icon, dataWeather.feelsLike, dataWeather.humidity, dataWeather.windSpeed, dataWeather.cloudiness);

    const displayWeekWeatherDiv = document.createElement("div");
    displayWeekWeatherDiv.classList.add("displayWeekWeather");
    displayWeekWeather(displayWeekWeatherDiv, dataWeather.days);


    displayWeather.append(displayLocationWeatherDiv, displaySearchWeatherDiv, displayTempWeatherDiv, displayInfoWeatherDiv, displayWeekWeatherDiv);
    display.appendChild(displayWeather);

};



const displayLocationWeather = (displayDiv, location, date) => {
    const locationText = document.createElement("p");
    locationText.classList.add("locationText");
    locationText.textContent = location;
    
    const dateText = document.createElement("p");
    dateText.classList.add("dateText");
    dateText.textContent = date;

    displayDiv.append(locationText, dateText);
};



const displaySearchWeather = (displayDiv) => {
   const form = document.createElement("form");

    const input = document.createElement("input");
    input.placeholder = "Enter a city...";

    const button = document.createElement("button");
    button.textContent = "Search"

    form.append(input, button);

    form.addEventListener("submit", async (event) => {
        handleSearch(event, input);
    });

    displayDiv.appendChild(form);
};



const displayTempWeather = (displayDiv, temperature, conditions) => {
    const temperatureText = document.createElement("p");
    temperatureText.classList.add("temperatureText");
    temperatureText.textContent = temperature;

    const celsiusConditionsDiv = document.createElement("div");
    celsiusConditionsDiv.classList.add("celsiusConditionsDiv");

    const celsiusText = document.createElement("p");
    celsiusText.textContent = '°C';

    const conditionsText = document.createElement("p");
    conditionsText.textContent = conditions;

    celsiusConditionsDiv.append(celsiusText, conditionsText);

    displayDiv.append(temperatureText, celsiusConditionsDiv);
};


const displayInfoWeather = (displayDiv, icon, feelsLike, humidity, windSpeed, cloudiness) => {
    const iconImg = document.createElement("img");
    iconImg.src = `./images/icons/${icon}.svg`;
    iconImg.alt = icon;

    const infoTextsWeatherDiv = document.createElement("div");
    infoTextsWeatherDiv.classList.add("infoTextsWeatherDiv");

    const feelsLikeText = document.createElement("p");
    feelsLikeText.textContent = `Feels like: ${feelsLike}°C`;

    const humidityText = document.createElement("p");
    humidityText.textContent = `Humidity: ${humidity}%`;

    const windSpeedText = document.createElement("p");
    windSpeedText.textContent = `Wind: ${windSpeed} km/h`;

    const cloudinessText = document.createElement("p");
    cloudinessText.textContent = `Cloudiness: ${cloudiness}%`;

    infoTextsWeatherDiv.append(feelsLikeText, humidityText, windSpeedText, cloudinessText);
    displayDiv.append(iconImg, infoTextsWeatherDiv);
};

const displayWeekWeather = (displayDiv, data) => {
    const displayDays = document.createElement("div");
    displayDays.classList.add("displayDays");

    for(let day of data.slice(1)){
        const divDay = document.createElement("div");
        divDay.classList.add("dayDiv");

        const weekdayText = document.createElement("p");
        weekdayText.textContent = day.weekday;
        
        const dateText = document.createElement("p");
        dateText.textContent = day.date;

        const imgIconDay = document.createElement("img");
        imgIconDay.classList.add("imgIconDay");
        imgIconDay.src = `./images/icons/${day.icon}.svg`;
        imgIconDay.alt = day.conditions;

        const tempText = document.createElement("p");
        tempText.textContent = `${Math.round(day.minTemperature)}° - ${Math.round(day.maxTemperature)}°`;

        const conditionsText = document.createElement("p");
        conditionsText.textContent = day.conditions;


        divDay.append(weekdayText, dateText, imgIconDay, tempText, conditionsText);
        displayDays.appendChild(divDay);
    };

    displayDiv.appendChild(displayDays);
};


export {
    displaySearchCity
};