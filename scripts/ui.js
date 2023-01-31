import { store } from './store.js'

const messageContainer = document.querySelector(".message")
const indexListsContainer = document.querySelector("#index-lists-container")
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
    console.log(userToken)
    messageContainer.innerHTML = 'Sign In Success'
    store.userToken = userToken
    signUpInContainers.classList.add("d-none")
    navBar.classList.remove("d-none")
   

}



export const createListSuccess = () => {

  messageContainer.innerHTML = "You've created a list!"
 


  
}

export const indexListSuccess = (lists) => {
    lists.forEach((list) => {
        const div = document.createElement("div")
        div.innerHTML = `
       <h3>${list.title}</h3> 
       <h3>${list._id}</h3>
       <button type="button" data-id="${list._id}">Show</button>
        `
        indexListsContainer.appendChild(div)
    })

    
   }


export const showListSuccess = (list) => {
   const div = document.createElement('div')
   div.innerHTML = `
   <h3>${list.id}</h3>
   <form data-id="${list.id}">
   <input type="text" name="title" value="${list.title}" />
   <input type="submit" value="Update List" />
  
</form>
<button data-id="${list._id}">Delete List</button>
   `
   showListContainer.appendChild(div)
}


export const updateListSuccess = () => {
   messageContainer.innerHTML = "Your list has been updated"
}


export const deleteListSuccess = () => {
   messageContainer.innerHTML = "Your list has been deleted"
}


export const createActSuccess = () => {
    messageContainer.innerHTML = "You created an Activity!"

}

export const updateActSuccess = () => {

}

export const deleteActSuccess = () => {
    
}