//#region Setup
const API_URL = "https://starwars.egghead.training/";
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");

function queryAPI(endpoint) {
  return fetch(API_URL + endpoint).then((response) => {
    return response.ok
      ? response.json()
      : Promise.reject(Error("Unsuccessful response"));
  });
}
//#endregion

// without Promise.all()
// Promises will resolve in waterfall manner (one after another)

// queryAPI("films")
//   .then((films) => {
//     return queryAPI("planets").then((planets) => {
//       output.innerText = `${films.length} films ,${planets.length} planets`;
//     });
//   })
//   .finally(() => {
//     spinner.remove();
//   });

// const promiseList = Promise.all([queryAPI("films"), queryAPI("planets")]); // multiple promise calls
// // Promise.all will be rejected if any promise is rejected
// promiseList
//   .then((result) => {
//     // result will contain according to given order above
//     console.log(result[0].length + " films, ", result[1].length + " planets");
//     output.innerText = `${result[0].length} films ,${result[1].length} planets`;
//   })
//   .catch((err) => {
//     console.warn("Error: " + err);
//   })
//   .finally(() => {
//     spinner.remove();
//   });

Promise.allSettled([queryAPI("films"), queryAPI("planets"), queryAPI("movies")]) // will return settltment objects
  .then((result) => {
    console.log('result: ', result)
    // result will contain according to given order above
    console.log(result[0].value.length + " films, ", result[1].value.length + " planets");
    output.innerText = `${result[0].value.length} films ,${result[1].value.length} planets`;
  })
  .catch((err) => {
    console.warn("Error: " + err);
  })
  .finally(() => {
    spinner.remove();
  });


  // Promise.any() returns the first promise fulfilled