import {
  signUp,
  signIn,
  createList,
  updateList,
  deleteList,
  showList,
  indexLists,
  createAct,
  deleteAct,


} from "./api.js";
import { store } from "./store.js";
import {
signUpSuccess,
signInSuccess,
createListSuccess,
deleteListSuccess,
updateListSuccess,
showListSuccess,
indexListSuccess,   
onError,
updateActSuccess,
deleteActSuccess,
createActSuccess,

 
  
 
} from "./ui.js";

//grabbing each card in my html and adding a click event listener
const cards = document.querySelectorAll(".card");
const signUpContainer = document.querySelector(".signUpContainer");
const signInContainer = document.querySelector(".signInContainer");
const act = document.querySelector("#act");
const location = document.querySelector("#location");
const boolean = document.querySelector("#isComplete");
const title = document.querySelector("#title");
const createListForm = document.querySelector("#create-list-form");
const createActForm = document.querySelector("#create-act-form");
const indexListsContainer = document.querySelector("#index-lists-container");
const showListContainer = document.querySelector("#show-lists-container");
const addActContainer = document.querySelector("#add-act-container");

//user
signUpContainer.addEventListener("submit", (event) => {
  event.preventDefault();
  const userData = {
    credentials: {
      userName: event.target["userName"].value,
      password: event.target["password"].value,
    },
  };

  signUp(userData).then(signUpSuccess).catch(onError);
});

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
    .then((res) => signInSuccess(res.token))
    .then(indexLists)
    .then((res) => res.json())
    .then((res) => indexListSuccess(res.list))
    .catch(console.error);
});


 //List apps



createListForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const listData = {
    list: {
      title: event.target["title"].value,
    },
  };

console.log(listData)
  createList(listData)
    .then((list) => {
      createListSuccess(list.id)
      console.log (list)
      
    })
    .then((list) => {
      addTitleToList()
      console.log (list)
      
    })

    .then(onError)
    

});



function addTitleToList() {

  //creating a div to
  const div = document.createElement("div")
  //assigning a class to div
  div.classList.add("list-group-item")
  div.id = "#title-div"
 const button = document.createElement("input")
 button.type = "button"
 button.value = "show"
//  button.dataset.id = list.id
// console.log(button.dataset.id)

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
  div.appendChild(head);
  div.appendChild(button)
  head.appendChild(node);
  document.getElementById("index-lists-container").appendChild(div, head);




}


indexListsContainer.addEventListener("click", (event) => {
  const id = event.target.getAttribute("data-id");
  
  if (!id) return;

  showList(id)
    .then((res) => res.json())
    .then((res) => {
      showListSuccess(res.list)
    })
    .catch(onError);
    console.log(id)
});


showListContainer.addEventListener("submit", (event) => {
  console.log("clicked")
  event.preventDefault()
  const id = event.target.getAttribute("data-id");
    console.log(id)
  const listData = {
    list: {
      title: event.target["title"].value,
    },

}
    updateList(listData, id)
    .then(updateListSuccess)
    .catch(console.error)

})

showListContainer.addEventListener("click", (event) => {
  console.log("clicked")
  event.preventDefault()
  const id = event.target.getAttribute("data-id")
  if (!id) return



})


// indexLists()
// .then((res) => res.json())
// .then((res) => indexListSuccess(res.list))
// .catch(onError)

//acts apps
function addActToList() {
  //creating a div to
  const div = document.createElement("div");
  //assigning a class to div
  div.classList.add("list-group-item");

  const newDiv = document.createElement("div");
  newDiv.classList.add("list-group-item")

  //creating list element
  const li = document.createElement("li");
  const p = document.createElement("li")

  const deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "delete";
  deleteButton.id = "delete";


  const updateButton = document.createElement("input");
  updateButton.type = "button";
  updateButton.value = "update";
  updateButton.id = "update";

  //creating node element to list value of user input
  const node = document.createTextNode(act.value);
  const newNode = document.createTextNode(location.value)

 newDiv.appendChild(newNode)
 newDiv.appendChild(updateButton)
 newDiv.appendChild(deleteButton)
 

 div.appendChild(li)
 div.appendChild(p)
 div.appendChild(node)

  document.getElementById("index-lists-container").appendChild(div);
  document.getElementById("index-lists-container").appendChild(newDiv);
}





createActForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const actData = {
    activity: {
      name: document.getElementsByName("name")[0].value,
      location: document.getElementsByName("location")[0].value,
      isComplete: document.getElementsByName("isComplete")[0].value,
    },
  }
  
  console.log(actData);
  createAct(actData)
    .then(createListSuccess)
    .then(addActToList()) 
    .catch(onError)
   
})






addActContainer.addEventListener("submit", (event) => {
  event.preventDefault();
  const actData = {
    activity: {
      name: document.getElementsByName("name")[0].value,
      location: document.getElementsByName("location")[0].value,
      isComplete: document.getElementsByName("isComplete")[0].value,
      listId: store.currentListId,
    },
  };
  createAct(actData)
  .then(createActSuccess)
  .catch(onError);
});

//calander app
cards.forEach((day) =>
  day.addEventListener("click", () => {
    console.log("clicked");
    const hide = document.querySelector("#date");
    hide.classList.add("d-none");
  })
);



