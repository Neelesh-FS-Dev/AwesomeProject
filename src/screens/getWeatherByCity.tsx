import axios from 'axios';
import {BASE_URL, API_KEY} from './config';

export const getWeatherByCity = async city => {
  try {
    const response = await axios.get(
      `${BASE_URL}weather?q=${city}&appid=${API_KEY}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
