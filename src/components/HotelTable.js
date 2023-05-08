import React from "react";

function HotelTable({items}) {
    try {
        return (
            <div>
                <table id="hotellist">
                    <caption>HotelLists</caption>
                    <thead>
                    <tr>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Hotel Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item, i) => <HotelRow item={item} key={i}/>)}
                    </tbody>
                </table>
            </div>
        );
    } catch (error) {
        return (
            <table id="holidaylist">
                <caption>HotelLists</caption>
                <thead>
                <tr>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Hotel Name</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>NaN</td>
                    <td>NaN</td>
                    <td>ERROR: Not found!</td>
                </tr>
                </tbody>
            </table>
        );
    }

}

function HotelRow({item}) {
    return (
        <tr>
            <td>{item.latitude}</td>
            <td>{item.longitude}</td>
            <td>{item.name}</td>
        </tr>
    );
}

export default HotelTable;