import { FETCH_CARS } from "../actions";

const data = [
    {
        date_posted: "Sun, 05 Aug 2018 17:27:42 GMT",
        description: null,
        full_name: "Toyota Sienna 2001 ",
        id: 356,
        link: "https://www.kijiji.ca/v-cars-trucks/mississauga-peel-region/toyota-sienna-2001/1374541111",
        location: "The Westway, Etobicoke, ON M9R 1H7, Canada",
        make: "Toyota",
        mileage: 193224,
        model: "Sienna",
        price: 3200,
        transmission: "Automatic",
        year: 2001
        },
        {
        date_posted: "Sun, 05 Aug 2018 17:27:51 GMT",
        description: null,
        full_name: "Wanted: ",
        id: 354,
        link: "https://www.kijiji.ca/v-cars-trucks/markham-york-region/2007-toyota-sienna/1374535843",
        location: "Vaughan, ON L4J9K3",
        make: "Toyota",
        mileage: 300000,
        model: "Sienna",
        price: 4000,
        transmission: "Automatic",
        year: 2007
        },
        {
        date_posted: "Sun, 05 Aug 2018 18:08:38 GMT",
        description: null,
        full_name: "2002 Toyota Sienna CE Plus ",
        id: 355,
        link: "https://www.kijiji.ca/v-cars-trucks/city-of-toronto/2002-toyota-sienna-ce-plus/1374556860",
        location: "Toronto, ON M1L2V5",
        make: "Toyota",
        mileage: 215000,
        model: "Sienna",
        price: 3500,
        transmission: "Automatic",
        year: 2002
        },
        {
        date_posted: "Mon, 06 Aug 2018 17:56:51 GMT",
        description: null,
        full_name: "2002 Toyota Sienna CE Plus",
        id: 353,
        link: "https://www.kijiji.ca/v-cars-trucks/city-of-toronto/2002-toyota-sienna-ce-plus/1374763660",
        location: "Toronto, ON M1L2V5",
        make: "Toyota",
        mileage: 215000,
        model: "Sienna",
        price: "None",
        transmission: "Automatic",
        year: 2002
        },
        {
        date_posted: "Tue, 07 Aug 2018 07:48:02 GMT",
        description: " ",
        full_name: "2018 Toyota Sienna XLE 7-Passenger XLE 7-Passenger",
        id: 346,
        link: "https://www.kijiji.ca/v-cars-trucks/mississauga-peel-region/2018-toyota-sienna-xle-7-passenger-xle-7-passenger/1374904958",
        location: "312 Guelph St, Georgetown, ON, L7G 4B5",
        make: "Toyota",
        mileage: "None",
        model: "Sienna",
        price: 55575,
        transmission: "Automatic",
        year: 2018
        },
        {
        date_posted: "Tue, 07 Aug 2018 07:54:05 GMT",
        description: " ",
        full_name: "2018 Toyota Sienna LE 7-Passenger LE 7-Passenger",
        id: 344,
        link: "https://www.kijiji.ca/v-cars-trucks/mississauga-peel-region/2018-toyota-sienna-le-7-passenger-le-7-passenger/1374904969",
        location: "312 Guelph St, Georgetown, ON, L7G 4B5",
        make: "Toyota",
        mileage: "None",
        model: "Sienna",
        price: 43175,
        transmission: "Automatic",
        year: 2018
        }
]
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CARS:
            return ({
                list: [...data]
    
            })    
        default:
            //return state;
            return ({
                list: [...data]
            })
    }
}