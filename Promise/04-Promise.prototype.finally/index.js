//#region Setup
const API_URL = "https://starwars.egghead.training/";
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");

const getFilmTitles = (film) =>
  film
    .sort((a, b) => a.episode_id - b.episode_id)
    .map((film) => `${film.episode_id}. ${film.title}`)
    .join("\n");
//#endregion

fetch(API_URL + "movies")
  .then((res) => {
    if (!res.ok) {
      throw Error("Unsuccessful API endpoint"); //if you just return error string, line number won't appear in stack trace
    }
    return res.json().then((item) => {
      console.log("03: " + "item: ", item);
      output.innerText = getFilmTitles(item);
    });
  })
  // in case of first promise rejected, this below fulfilment handler won't execute.
  // So spinner will still be there in case of previous fulfilment handler rejection.
  .then(
    () => {
      spinner.remove();
      console.log('==== next then after reject')
    },
    // if below Rejected handler is there, then it won't got to catch because errors will caught by first reject handler
    (err) => {
      console.warn("======== rejected with: " + err);
      output.innerText = ":(";
    }
  )
  .catch((err) => { // Rejection handler
    console.warn("03: " + "error is : ", err);
    output.innerText = ":(";
  })
  .finally(() => {
    // finally() will be executed after promise is settled (either fulfilled or rejected). So best place to do cleanup activities
    spinner.remove();
  });
