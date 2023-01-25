const messageContainer = document.querySelector(".message")

export const signUpSuccess = () => {
    messageContainer.innerHTML = 'You\'ve created a new user! Now Sign In'
}

export const onError = (error) => {
    messageContainer.innerHTML = "you've encountered a error"
}