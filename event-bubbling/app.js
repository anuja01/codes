const container = document.querySelector(".container");
const ul = document.querySelector("ul");
const li = document.querySelector("li");
const button = document.querySelector("input");
const wrapper = document.querySelector(".wrapper");
const containerBubble = document.querySelector("#container-bubble");

// due to event bubblig, once you click li, click events for ul and container will also get executed.
li.addEventListener("click", () => console.log("li - Clicked :)"));
ul.addEventListener("click", () => console.log("ul - Clicked :)"), true); // this will execute in order of capturing
container.addEventListener("click", () =>
  console.log("container - Clicked :)")
);

// in capture, oreder is otherway around. First it'll execute most outer elemnts click event.
button.addEventListener("click", () => console.log("button - Clicked :)"));
wrapper.addEventListener(
  "click",
  (e) => {
    console.log(e.target) // this will contain the clicked element, in this case it's our button
    e.stopPropagation() // this will prevent event bubbling, propergation
    console.log("wrapper - Clicked :)");
  },
  true
); // passing third argument as true will enable event capturing

/** 
 * usecase
  for list of elements, instead of adding click events to all, 
  you can add single click event to parent and get value from e.target and handle the click.
*/

containerBubble.addEventListener('click', (e) => {
  console.log('clicked list item: ', e.target)
})

// Web APIs
// setInterval()
// setTimeout()
// Fetch API
// XMLHttpRequest