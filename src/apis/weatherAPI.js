export default async function weatherAPI(city, date) {

    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + '/' + date + '?unitGroup=metric&key=3ACTEBUHFWC75F3G6Y5H7WDLN&contentType=json';
    const options = {
        method: 'GET',
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const result = data['days'][0]
        console.log(result)
        return result;
    } catch (error) {
        //console.log(error)
        return error;
    }

}
