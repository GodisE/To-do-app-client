import {
  signUp,
  signIn,
  createList,
  showList,
  indexLists,
  updateList,
  deleteList,
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

} from "./ui.js";

//grabbing each card in my html and adding a click event listener
const cards = document.querySelectorAll(".card");
const signUpContainer = document.querySelector(".signUpContainer");
const signInContainer = document.querySelector(".signInContainer");
const indexListContainer = document.querySelector("#index-lists");
const showListContainer = document.querySelector("#show-list-container");
const createListContainer = document.querySelector("#create-list-container");
const title = document.querySelector("#title")
const act = document.querySelector("#act")
const titleButton = document.querySelector("#title-button")
const listContainer = document.querySelector("#index-list")
const actContainer = document.querySelector("#create-act-container")
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

// signInContainer.addEventListener("submit", (event) => {
//   event.preventDefault()
//   const userData = {
//     credentials: {
//       username: event.target["userName"].value,
//       password: event.target["password"].value,
//     },
//   }
// //   console.log(signIn)
//   signIn(userData)
//     .then((res) => res.json())
//     .then((res) => signInSuccess(res.token))
//     .catch(onError)
// })

// cards.forEach((day) =>
//   day.addEventListener("click", () => {
//     console.log("clicked");
//     const hide = document.querySelector("#date");
//     hide.classList.add("d-none");
//   })
// );

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

//created fucntion to add title to list
 function addTitleToList (){
	listContainer.innerHTML=`
  <li>${title.value}</li>
  `
  

  
  
 
// document.querySelector("")



	
  }
  
function addActToList(){
	listContainer.innerHTML=
	"<ul>" + act.value + "</ul>"

} 

createListContainer.addEventListener("click", addTitleToList, (event) => {
  event.preventDefault();
 
  const listData = {
    list: {
      name: event.target["name"].value,
      location: event.target["location"].value,
      isComplete: event.target["is-complete"].checked

	  
    },
  };
  createList(listData)
  .then(createListSuccess)
  .catch(onError)
})


// createActContainer.addEventListener("submit", (e) => {
//   e.preventDefault()

//   const actData = {
//     activity: {
//       event.target[""]
//     }
    
//   }
// })
