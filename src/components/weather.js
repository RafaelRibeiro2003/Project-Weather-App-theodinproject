class Weather {
    constructor(data) {
        this.processWeatherData(data);
    }

    processWeatherData(data) {
        const current = data.currentConditions;

        this.location = data.resolvedAddress;

        // Current weather
        this.date = this.formatDate(
            current.datetimeEpoch,
            data.timezone
        );

        this.temperature = current.temp;
        this.feelsLike = current.feelslike;
        this.humidity = current.humidity;
        this.cloudiness = current.cloudcover;
        this.windSpeed = current.windspeed;
        this.conditions = current.conditions;
        this.icon = current.icon;

        // Daily forecast
        this.days = data.days.map(day => ({
            ...this.formatDay(day.datetime),
            temperature: day.temp,
            maxTemperature: day.tempmax,
            minTemperature: day.tempmin,
            humidity: day.humidity,
            windSpeed: day.windspeed,
            conditions: day.conditions,
            icon: day.icon,
        }));
    }

    // Format current date and time
    formatDate(timestamp, timezone) {
        const date = new Date(timestamp * 1000);

        return date.toLocaleString("en-GB", {
            timeZone: timezone,
            weekday: "long",
            day: "numeric",
            month: "long",
            hour: "2-digit",
            minute: "2-digit"
        });
    }

    // Format forecast dates
    formatDay(date) {
            const formattedDate = new Date(`${date}T12:00:00`);
        return {
            weekday: formattedDate.toLocaleDateString("en-GB", {
                weekday: "long"
            }),

            date: formattedDate.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long"
            })
        };
    }
}


export { Weather };