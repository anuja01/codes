// const API_URL = "https://star-wars.egghead.training/";
/**
 * above URL will return 'Uncaught (in promise)' if rejected handler is not defined.
 * Need to handle both fulfilment and rejection of the promise
 */
const API_URL = "https://starwars.egghead.training/";
const output = document.getElementById("output");

output.innerText = "Loading...";
 //01
// either fulfilment or reject handler will execute. So if there's any error in fulfilment handler it won't got to reject handler.
// to overcome this we can use catch()
fetch(API_URL + "films").then(
  // fulfilment handler
  (res) =>
    res.json().then((response) => {
      console.log('01: ' + response);
    }),
  // reject handler
  // errors in fulfilment handler won't throw here because it'll only execute fulfilment or rejected
  (error) => console.warn('01' + error)
);
//02
// add .catch() to promise chanin so we can catch the errors in fulfilment scenario as well.
fetch(API_URL + "films")
  .then(
    // fulfilment handler
    (res) => {
      return Promise.reject("invalid JSON response").then((response) => {
        // catch will
        //   return res.json().then((response) => {
        output.innerText = getFilmTitles(response);
        console.log('01: ' + response);
      });
    }
  )
  .catch((error) => {
    // use catch after all .then - this will capture errors in promise and in fulfilment as well. (catch errors in promise chain)
    console.warn('02: ' + "Error: ", error);
    output.innerText = ":)";
  });
//03
  // when endpoint is not found, fetch will return {} and goto fulfilment handler.
  //if we need to reject the promise based on http status code, can do it within fulfilment hander
fetch(API_URL + "movies")
  .then((res) => {
    if(!res.ok) {
        throw Error('Unsuccessful API endpoint')
    }
    return res.json().then((item) => {
      console.log('03: ' + "item: ", item);
    });
  })
  .catch((err) => {
    console.warn('03: ' + "error is : ", err);
  });

  const getFilmTitles = (film) =>
  film
    .sort((a, b) => a.episode_id - b.episode_id)
    .map((film) => `${film.episode_id}. ${film.title}`)
    .join("\n");


//     // if we have any rejected promise in our promise chain, it'll fall through until we hit the first rejected handler.