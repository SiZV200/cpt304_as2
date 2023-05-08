export default async function holidayAPI(year, countrycode) {

    const url = 'https://public-holiday.p.rapidapi.com/' + year + "/" + countrycode;
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': 'f8c4616089mshe900737500916d4p1bd091jsn29c0a733ec1a',
            'X-RapidAPI-Host': 'public-holiday.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        //console.log(data)
        return data;
    } catch (error) {
        //console.log(error)
        return error;
    }

}
