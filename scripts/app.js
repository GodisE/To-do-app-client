import {
  signUp,
  signIn,
  createList,
  showList,
  indexLists,
  updateList,
  deleteList,
  createAct
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
const indexListContainer = document.querySelector("#list-group");
const showListContainer = document.querySelector("#show-list-container");
const createListContainer = document.querySelector("#create-list-container");
const actContainer = document.querySelector("#act-container")
const act = document.querySelector("#act")
const location = document.querySelector("#location")
const boolean = document.querySelector("#isComplete")

const createActContainer = document.querySelector("#create-act-container")


const title = document.querySelector("#title")

const listContainer = document.querySelectorAll("#index-list")

let userInputList = []
let userInputActList = []





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
  event.preventDefault()
  const hide = document.querySelector(".content-container")
  hide.classList.add("d-none")
  const userData = {
    credentials: {
      userName: event.target["userName"].value,
      password: event.target["password"].value,
    },
    
  }
  signIn(userData)
    .then((res) => res.json())
    .then((res) => signInSuccess(res.token))
    .catch(onError)
})

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
function addTitleToList (){
  //creating a div to 
  const div = document.createElement("div")
  //assigning a class to div
  div.classList.add("d-flex")
  //create input tag to hold checkbox
  // const checked = document.createElement("input")
  // //assign a type of checkbox so that the isComplete boolean is represented
  // checked.setAttribute("type='checkbox'")

  const input = document.createElement("input")
  input.type= "checkbox"

  div.appendChild(input)

  //creating list element
const li = document.createElement("li")
//creating node element to list value of user input
const node = document.createTextNode(title.value) 
if(node === "undefined"){
 title.innerHTML = ""
}
console.log(node)
div.appendChild(li)
li.appendChild(node)
document.getElementById("index-list").appendChild(div, li)
}



function addActToList(){

  //creating a div to 
  const div = document.createElement("div")
  //assigning a class to div
  div.classList.add("d-flex")

    //creating list element
    const li = document.createElement("li")

const deleteButton = document.createElement("input")
deleteButton.type= "button"
deleteButton.value = "delete"

const updateButton = document.createElement("input")
updateButton.type = "button"
updateButton.value = "update"

    //creating node element to list value of user input
    const node = document.createTextNode(act.value) 
    li.appendChild(node)
    li.appendChild(updateButton)
    li.appendChild(deleteButton)
    console.log(li)
    document.getElementById("index-list").appendChild(li)

  
  
} 


  // userInputList.forEach( list => {
  //   
  //   div.classList.add("list-group-item")
  //   div.classList.add("card")
  //   return list
  // })

	
  // console.log(titles)


function addLocation () {
    //creating a div to 
    const div = document.createElement("div")
    //assigning a class to div
    div.classList.add("d-flex")
  
    //creating list element
  const p = document.createElement("p")
  //creating node element to list value of user input
  const node = document.createTextNode(location.value) 
  p.appendChild(node)
  document.getElementById("index-list").appendChild(p)
}


function isComplete() {
  if (boolean === "checked"){
    console.log ("complete")
  }else{
    console.log ("not checked")
  }
// console.log(boolean.checked)


// if (isComplete == "true"){
//   console.log("complete")
// }
}



createListContainer.addEventListener("click",  (event) => {
  event.preventDefault()
  event.currentTarget.title.removeEventListener("click", (event))
    addTitleToList()
    isComplete()
    
  const listData = {
    list: {
      title: event.currentTarget.title.value,
      

	 
    },
  //  console.log(list._id)
      
  }
   const actData = {
      activity: {
        name: event.target["name"].value,
        // location: event.currentTarget.location.value,
        isComplete: boolean.value,
        listId: "${list._id}"
  
      },
    }
 console.log(listData, actData)
  createList(listData, actData)
  .then(createListSuccess)
  .catch(onError)
})


createActContainer.addEventListener("click", (event) => {
  event.preventDefault()
addActToList()
addLocation()

    
  })
//   console.log(actData)
//   createAct(actData)
//   .then(createActSuccess)
//   .catch(onError)
// })
