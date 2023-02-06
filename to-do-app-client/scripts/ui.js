// Lost of blank space in this file. Make sure to clean it up and not leave random empty lines behind
import { store } from './store.js'

const messageContainer = document.querySelector(".message")
const indexListsContainer = document.querySelector("#index-lists-container")
// Remove unused variables
const showListContainer = document.querySelector("#show-list-container")
const createListContainer = document.querySelector("#create-list-index")
const signUpInContainers = document.querySelector(".content-container")
const navBar = document.querySelector(".navbar")


export const signUpSuccess = () => {
    messageContainer.innerHTML = 'You\'ve created a new user! Now Sign In'
   
}

export const onError = () => {
    messageContainer.innerHTML = "you've encountered a error"
}

export const signInSuccess = (userToken) => {
    messageContainer.innerHTML = 'Sign In Success'
    store.userToken = userToken
    signUpInContainers.classList.add("d-none")
    navBar.classList.remove("d-none")
   

}



export const createListSuccess = () => {

  messageContainer.innerHTML = "You've created a list!"



  
}

export const indexListSuccess = (listData) => {
    const div = document.createElement("div")



    indexListsContainer.appendChild(div)
   }


export const showListSuccess = () => {
   
}


// export const updateListSuccess = () => {
//    messageContainer.innerHTML = "Your list has been updated"
// }


// export const deleteListSuccess = () => {
//    messageContainer.innerHTML = "Your list has been deleted"
// }


export const createActSuccess = () => {
    messageContainer.innerHTML = "You created an Activity!"

}

export const updateActSuccess = () => {

}

export const deleteActSuccess = () => {
    
}