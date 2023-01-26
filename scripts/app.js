import { 
    signUp,
    signIn,
    createList,
    showList,
    indexList,
    updateList,
    deleteList
} from "./api.js"

import {
    signUpSuccess,
    onError,
    signInSuccess
} from "./ui.js"

//grabbing each card in my html and adding a click event listener
const cards = document.querySelectorAll(".card")
const signUpContainer = document.querySelector(".signUpContainer")
const signInContainer = document.querySelector(".signInContainer")


signUpContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const userData = {
		credentials: {
			username: event.target['username'].value,
			password: event.target['password'].value,
		},
	}
	signUp(userData).then(signUpSuccess).catch(onError)
})

signInContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const userData = {
		credentials: {
			username: event.target['username'].value,
			password: event.target['password'].value,
		},
        
	}
	signIn(userData)
		.then((res) => res.json())
		.then((res) => signInSuccess(res.token))
		.catch(onError)
})




cards.forEach((day) => day.addEventListener("click", () => {
    console.log("clicked")
    const hide = document.querySelector("#date")
    hide.classList.add("d-none")

}))






