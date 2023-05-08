import React from "react";


function HolidayTable({items, dateHook}) {
    try {
        return (
            <table id="holidaylist">
                <caption>HolidayLists</caption>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Holiday Name</th>
                    <th>Local Name</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, i) => <HolidayRow item={item} key={i} dateHook={dateHook}/>)}
                </tbody>
            </table>
        );
    } catch (error) {
        return (
            <table id="holidaylist">
                <caption>HolidayLists</caption>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Holiday Name</th>
                    <th>Local Name</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>xxxx-xx-xx</td>
                    <td>NULL</td>
                    <td>NULL</td>
                </tr>
                </tbody>
            </table>
        );
    }

}

function HolidayRow({item, dateHook}) {
    const handleClick = () => {
        dateHook(item.date);
    }
    console.log(dateHook)
    return (
        <tr>
            <td onClick={handleClick} style={{cursor: 'pointer'}}><u>{item.date}</u></td>
            <td>{item.name}</td>
            <td>{item.localName}</td>
        </tr>
    );
}

export default HolidayTable;