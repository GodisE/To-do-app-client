import { store } from "./store.js"
const messageContainer = document.querySelector(".message")
const indexListContainer = document.querySelector("#index-list-container")
const showListContainer = document.querySelector("#show-list-container")
const createListContainer = document.querySelector("#create-list-index")
const signUpInContainers = document.querySelector(".content-container")



export const signUpSuccess = () => {
    messageContainer.innerHTML = 'You\'ve created a new user! Now Sign In'
}

export const onError = (error) => {
    messageContainer.innerHTML = "you've encountered a error"
}

export const signInSuccess = (userToken) => {
    messageContainer.innerHTML = 'Sign In Success'
    store.userToken = userToken
    signUpInContainers.classList.add("d-none")


}



export const createListSuccess = () => {
  messageContainer.innerHTML = "You've created a list!"
}

// export const indexListSuccess = (lists) => {
//    lists.forEach((list) => {
//     const div = document.createElement("div")
//     div.classList.add("card")
//     div.innerHTML = `
//     <h2>${list.title}</h2>
//     <textarea>${textarea.value}</textarea>
//     <button type"button" data-id = "${list._id}">Show List</button>
//     `
//     indexListContainer.appendChild(div)
//    })
   
// }


// export const showListSuccess = () => {
   
// }


// export const updateListSuccess = () => {
//    messageContainer.innerHTML = "Your list has been updated"
// }


// export const deleteListSuccess = () => {
//    messageContainer.innerHTML = "Your list has been deleted"
// }


export const createActSuccess = () => {

}

export const updateActSuccess = () => {

}

export const deleteActSuccess = () => {
    
}