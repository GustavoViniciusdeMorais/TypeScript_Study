/**
 * 
 * @param {number} weatherID 
 * @returns 
 */
async function getWeather(weatherID){
    const resp = await $.ajax({
        method: 'GET',
        url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly'
    });

    return resp.data;

    // return {
    //     id: 1,
    //     name: 'Gustavo',
    //     birthDate: new Date('02/05/1996')
    // };
}

getWeather(1).then((weather) => {
    console.log(weather);
    // contact.id = 2;
    // console.log(contact);
});