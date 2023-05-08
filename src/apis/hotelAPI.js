export default async function hotelAPI(city) {

    const url = 'https://hotels4.p.rapidapi.com/locations/search?query=' + city + '&locale=en_US';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f8c4616089mshe900737500916d4p1bd091jsn29c0a733ec1a',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const result = data['suggestions'][1]['entities']
        console.log(result)
        return result;
    } catch (error) {
        console.log(error)
        return error;
    }

}
