const getWeather = async (location) => {
    try {
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?unitGroup=metric');

        const dataJson = await response.json();

        return dataJson;
    } catch(error){
        console.error(error);  
    }
};


export { getWeather };
