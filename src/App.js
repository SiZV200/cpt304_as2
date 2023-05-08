import './App.css';
import HolidayPage from "./pages/HolidayPage";
import HotelPage from "./pages/HotelPage";
import {useState} from "react";

function App() {
    const [date, setDate] = useState('2023-5-8');
    return (
        <div className="App">
            <header className="App-header">
                <h1>CPT-304 Assignment 2</h1>
            </header>
            <HolidayPage dateHook={setDate}></HolidayPage>
            <HotelPage date={date}></HotelPage>
        </div>
    );
}

export default App;
