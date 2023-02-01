import { store } from "./store.js";
//adding this to repush
const messageContainer = document.querySelector(".message");
const indexListsContainer = document.querySelector("#index-lists-container");
const showListContainer = document.querySelector("#show-lists-container");
const createListContainer = document.querySelector("#create-list-index");
const signUpInContainers = document.querySelector("#content-container");
const toDoContainer = document.querySelector("#to-do-container");
const navBar = document.querySelector(".navbar");

export const signUpSuccess = () => {
  messageContainer.innerHTML = "You've created a new user! Now Sign In";
};

export const onError = () => {
  messageContainer.innerHTML = "you've encountered a error";
};

export const signInSuccess = (userToken) => {
  // console.log(userToken)
  messageContainer.innerHTML = "Sign In Success";
  store.userToken = userToken;
  console.log(store.userToken);
  signUpInContainers.classList.add("d-none");
  navBar.classList.remove("d-none");
  toDoContainer.classList.remove("d-none");
};

export const createListSuccess = () => {
  messageContainer.innerHTML = "You've created a list!";
};

export const indexListSuccess = (lists) => {
  console.log(lists);
  if (!store.userToken) {
    return;
  }
  const div = document.createElement("div")
  div.classList.add("list-group")
  lists.forEach((list) => {
    const li = document.createElement("li");
    li.classList.add("List-item")
    li.classList.add("card")
    li.innerHTML = `
       <h3>${list.title}</h3> 
       <button type="button" data-id="${list._id}">Show</button>
        `;
        div.appendChild(li)
    indexListsContainer.appendChild(div);
  });
};
// .map(lists => lists).join ( ',' ) }

export const showListSuccess = (lists) => {
  console.log(lists);
  // lists.forEach((list) => {
  console.log(lists.title);
  const div = document.createElement("div");
  div.innerHTML = `
   <h3 id="index-lists">${lists.title}</h3>
   <form data-id="${lists._id}">
   <input type="text" name="title" value="${lists.title}" />
   <input id="update-list-button" data-id="${lists._id}" type="submit" value="Update List" />
  
</form>

<input type="submit" value="Delete List" id ="delete-list-button" data-id="${lists._id}"/>
<h3>Add Activity</h3>
<form data-id="${lists._id}">
<input type="text" name="name" placeholder="Activity Name" />
<input type="text" name="location" placeholder="Add Location" />
<input type="checkbox" name="isComplete" />
<input data-id="${lists._id}" type="submit" value="Add Act"/>
   `;
  showListContainer.appendChild(div);
  const listarray = document.querySelector("#index-lists");
  console.log(listarray);
};
// )}

export const updateListSuccess = (lists) => {
  console.log(lists);

  messageContainer.innerHTML = "Your list has been updated";
  return lists.innerHTML;
};

export const deleteListSuccess = () => {
  console.log(lists);
  messageContainer.innerHTML = "Your list has been deleted";
};

export const createActSuccess = () => {
  messageContainer.innerHTML = "You created an Activity!";
};

export const updateActSuccess = () => {};

export const deleteActSuccess = () => {};

// export function showIndexLists (){

// }