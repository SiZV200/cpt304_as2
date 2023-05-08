import React from "react";

function WeatherTable({items}) {
    try {
        return (
            <table id="holidaylist">
                <caption>WeatherList</caption>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Weather</th>
                    <th>Min(℃)</th>
                    <th>Max(℃)</th>
                </tr>
                </thead>
                <tbody>
                <td>{items.datetime}</td>
                <td>{items.conditions}</td>
                <td>{items.tempmin}</td>
                <td>{items.tempmax}</td>
                </tbody>
            </table>
        );
    } catch (error) {
        return (
            <table id="holidaylist">
                <caption>WeatherList</caption>
                <thead>
                <tr>
                    <th>Day</th>
                    <th>Weather</th>
                    <th>Min(℃)</th>
                    <th>Max(℃)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>NaN</td>
                    <td>NaN</td>
                    <td>NaN</td>
                    <td>ERROR: Not found!</td>
                </tr>
                </tbody>
            </table>
        );
    }

}

export default WeatherTable;