import { 
    signUp
} from "./api.js"

import {
    signUpSuccess,
    onError
} from "./ui.js"

//grabbing each card in my html and adding a click event listener
const cards = [...document.querySelectorAll(".card")]
const signUpContainer = document.querySelector(".signInContainer")
const signInContainer = document.querySelector(".signInContainer")

cards.forEach((day) => day.addEventListener("click", () => {
    console.log("clicked")
    const hide = document.querySelector("#date")
    hide.classList.add("d-none")

}))

signUpContainer.addEventListener("submit", (event) => {
    event.preventDefault()
    const signContained = document.querySelector(".signInContainer")
    signContained.classList.add("d-none")
    
    const myUserData = {
        credentials: {
            username: event.target["username"].value,
            password: event.target["password"].value
        }
    }
    signUp(myUserData)
    .then(signUpSuccess)
    .catch(onE=rror)
})