
const messageContainer = document.querySelector(".message")
const indexListContainer = document.querySelector("#index-list-container")
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
    signUpInContainers.classList.add("d-none")
    navBar.classList.remove("d-none")
    window.localStorage.setItem("token", userToken)

}



export const createListSuccess = (title) => {
  window.localStorage.setItem("list-title", title)

  messageContainer.innerHTML = "You've created a list!"
  
}

export const indexListSuccess = (lists, title) => {
    window.localStorage.getItem("list-title", title)
    lists.forEach((list) => {
    const div = document.createElement("div")
    div.classList.add("card")
    div.innerHTML = `
    <h2>${list.title}</h2>
    <textarea>${textarea.value}</textarea>
    <button type"button" data-id = "${list._id}">Show List</button>
    `
    indexListContainer.appendChild(div)
   })
   
}


// export const showListSuccess = () => {
   
// }


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