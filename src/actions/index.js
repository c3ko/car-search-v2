import axios from 'axios';
export const FETCH_CARS = 'FETCH_CARS';

const ROOT_URL_PROD = "nelsonmobile.com:5000";
const ROOT_URL_DEV = 'localhost:5000';

export const fetchCars = (make, model) => {
    const URL = `${ROOT_URL_DEV}/cars/?make=${make}&model=${model}`;
    console.log(URL);
    const request = axios.get(URL);
    console.log(axios.get(URL));
    return {
        type: FETCH_CARS,
        payload: request
    }
}