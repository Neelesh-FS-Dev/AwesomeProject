import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Text, View} from 'react-native';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather',
        {
          params: {
            q: 'London',
            appid:
              'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}',
            units: 'metric',
          },
        },
      );

      if (response.status === 200) {
        setWeatherData(response.data);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  if (weatherData === null) {
    return <Text>Loading...</Text>;
  }

  // Extract and use the relevant data from weatherData

  return (
    <View>
      <Text>The temperature in London is {weatherData.main.temp}°C.</Text>
      <Text>Weather: {weatherData.weather[0].description}</Text>
    </View>
  );
};

export default WeatherComponent;
