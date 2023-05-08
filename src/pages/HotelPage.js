import React, {useState} from 'react';
import HotelTable from "../components/HotelTable";
import hotelAPI from "../apis/hotelAPI";
import WeatherTable from "../components/WeatherTable";
import weatherAPI from "../apis/weatherAPI";

function HotelPage({date}) {
    const [items, setItems] = useState([])
    const [weatherItems, setWeatherItems] = useState({})
    const [cityName, setCityName] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await hotelAPI(cityName);
        const weatherRes = await weatherAPI(cityName, date);

        console.log(weatherRes)

        setItems(res)
        setWeatherItems(weatherRes)
    }

    return items === [] ? (<div>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setCityName(e.target.value)} value={cityName} placeholder={'City Name'}></input>
            <div>Date selected: {date}</div>
            <button type='submit'>Click to submit</button>
        </form>
        <div style={{color: "red"}}>
            Note: You can select the holiday by clicking the date in the holiday list.
        </div>
    </div>) : (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setCityName(e.target.value)} value={cityName} placeholder={'City Name'}></input>
                <input placeholder={date} disabled='disabled'></input>
                <button type='submit'>Click to submit</button>
            </form>
            <div style={{color: "red"}}>
                Note: You can select the holiday by clicking the valid date in the holiday list.
            </div>

            <HotelTable items={items}/>
            <WeatherTable items={weatherItems}></WeatherTable>
        </div>
    );
}

export default HotelPage;