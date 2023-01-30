import {
  signUp,
  signIn,
  createList,
  showList,
  indexLists,
  updateList,
  deleteList,
  createAct,
} from "./api.js";

import {
  createListSuccess,
  signUpSuccess,
  onError,
  signInSuccess,
  //   createListSuccess,
  //   indexListSuccess,
  //   showListSuccess,
  //   updateListSuccess,
  //   deleteListSuccess,
  createActSuccess,
  updateActSuccess,
  deleteActSuccess,
  indexListSuccess,
} from "./ui.js";

//grabbing each card in my html and adding a click event listener
const cards = document.querySelectorAll(".card");
const signUpContainer = document.querySelector(".signUpContainer");
const signInContainer = document.querySelector(".signInContainer");
const act = document.querySelector("#act");
const location = document.querySelector("#location");
const boolean = document.querySelector("#isComplete");
const title = document.querySelector("#title");
const createListButton = document.querySelector("#create-list-button");
const indexListContainer = document.querySelector("#index-lists-container")
// indexLists()
// .then((res) => res.json())
// .then((res) =>
// indexListSuccess(res.lists))
// .catch(onError)

// signUpContainer.addEventListener("submit", (event) => {
//   event.preventDefault()
//   const userData = {
//     credentials: {
//       userName: event.target["userName"].value,
//       password: event.target["password"].value,
//     },
//   }

//   signUp(userData).then(signUpSuccess).catch(onError);
// })

signInContainer.addEventListener("submit", (event) => {
  event.preventDefault();
  const hide = document.querySelector(".content-container");
  hide.classList.add("d-none");
  const userData = {
    credentials: {
      userName: event.target["userName"].value,
      password: event.target["password"].value,
    },
  };
  signIn(userData)
    .then((res) => res.json())
    .then((res) => signInSuccess(res.userToken))
    .then((res) => res.json())
    .then((res) => indexListSuccess(res.lists))
    .catch(onError);
});

cards.forEach((day) =>
  day.addEventListener("click", () => {
    console.log("clicked");
    const hide = document.querySelector("#date");
    hide.classList.add("d-none");
  })
);

// indexListContainer.addEventListener("click", (event) => {
//   const id = event.target.getAttribute("data-id");

//   if (!id) return;

//   showList(id)
//     .then((res) => res.json())
//     .then((res) => {
//       showListSuccess(res.list);
//     })
//     .catch(onError);
// });

// created function to add title to list
function addTitleToList() {
  //creating a div to
  const div = document.createElement("div");
  //assigning a class to div
  div.classList.add("list-group-item");
  //create input tag to hold checkbox
  // const checked = document.createElement("input")
  // //assign a type of checkbox so that the isComplete boolean is represented
  // checked.setAttribute("type='checkbox'")

  const input = document.createElement("input");
  input.type = "checkbox";

  div.appendChild(input);

  //creating list element
  const head = document.createElement("h3");
  //creating node element to list value of user input
  const node = document.createTextNode(title.value);
  if (node === "undefined") {
    div.style.display = "none";
    input.classList.add("d-none");
  }
  console.log(node);
  div.appendChild(head);
  head.appendChild(node);
  document.getElementById("index-lists-container").appendChild(div, head);
}

function addActToList() {
  //creating a div to
  const div = document.createElement("div");
  //assigning a class to div
  div.classList.add("list-group-item");

  //creating list element
  const head = document.createElement("h6");

  //creating node element to list value of user input
  const node = document.createTextNode(act.value);
  head.appendChild(node);

  document.getElementById("index-lists-container").appendChild(head);
}

function addLocation(listdata) {
  //creating a div to
  const div = document.createElement("div");
  //assigning a class to div
  div.classList.add("list-group-item");

  const deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "delete";
  deleteButton.id = "delete";
  deleteButton.dataset.id = `${listdata}`

  const updateButton = document.createElement("input");
  updateButton.type = "button";
  updateButton.value = "update";
  updateButton.id = "update";
  updateButton.dataset.id = `${listdata}`

  //creating list element
  const p = document.createElement("p");
  //creating node element to list value of user input
  const node = document.createTextNode(location.value);
  p.appendChild(node);
  p.appendChild(updateButton)
  p.appendChild(deleteButton)

  console.log(p)
  document.getElementById("index-lists-container").appendChild(p);
}

function isComplete() {
  if (boolean === "checked") {
    console.log("complete");
  } else {
    console.log("not checked");
  }

}

createListButton.addEventListener("click", (event) => {
  event.preventDefault();
  addTitleToList();
  addActToList();
  addLocation();
  isComplete();


    const actData = {
    activity: {
      name: event.target["name"].value,
      // location: event.target["location"].value,
      // isComplete: event.target["isComplete"].value

    },
    };

  const listData = {
    list: {
      title: event.target["title"].value,
      activities: [actData]
    },
  };

 
  console.log(listData, actData);
  createList(listData, actData).then(createListSuccess).catch(onError);
});
