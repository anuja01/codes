const API_URL = "https://starwars.egghead.training/";
const output = document.getElementById("output");

output.innerText = "Loading...";

const responsePromise = fetch(API_URL + 'films');
responsePromise.then(res => {
    console.log(res); //this will contain entire response including headers, status etc.
    const response = res.json();// x.json() will return a promise with res.body
    console.log(response) 
    return response; // return value will be passed as param to next .then
}).then(body => {
    console.log(body) // return value of preious promise will be passed as input. here we can manipulate data
    const filmTitles = body
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(film => {
        return `${film.episode_id}. ${film.title}`
    }).join('\n');
    console.log(filmTitles)
    output.innerText = filmTitles
})