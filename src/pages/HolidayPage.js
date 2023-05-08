import React, {useState} from 'react';
import holidayAPI from "../apis/holidayAPI";
import HolidayTable from "../components/HolidayTable";

function HolidayPage(props) {
    const [items, setItems] = useState([])
    const [year, setYear] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await holidayAPI(year, countryCode);
        console.log(res)
        setItems(res)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setYear(e.target.value)} value={year} placeholder={'Year'}></input>
                <input onChange={(e) => setCountryCode(e.target.value)} value={countryCode}
                       placeholder={'Country Code e.g., US'}></input>
                <button type='submit'>Click to submit</button>
            </form>
            <HolidayTable items={items} dateHook={props.dateHook}/>
        </div>
    );
}

export default HolidayPage;