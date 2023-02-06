// Changing between double and single quotes in this file. Choose one or the other and stick to it
import { store } from './store.js'

export const signUp = (data) => {
	return fetch(`http://localhost:8000/sign-up`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

export const signIn = (data) => {
	return fetch(`http://localhost:8000/sign-in`, {
		method: "POST",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	})
}
 

// export const signOut = (userToken, data) => {
// 	return fetch(`http://localhost:8000/sign-out`, {
// 		method: "GET",
// 		headers: {
// 			"Accept": "application/json",
// 			"Content-Type": "application/json",
// 			'Authorization': `Bearer ${store.userToken}`,
// 		},
// 		body: JSON.stringify(data)
// 	})
// }


// Love these code comments for your sections of API calls! To make them a little more clear you can add * or = to the heading to make it stand out. So:
// ========== LIST ACTIONS ===============
// ********** LIST ACTIONS ***************
// both of the above show off clearly that this is a section of code.
                     //LIST ACTIONS

// remove unused `userToken` from params
export const createList = (userToken) => {
	return fetch(`http://localhost:8000/lists`, {
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		}
	})
}

export const showList = (id) => {
	return fetch(`http://localhost:8000/lists/${id}`, {
		method: "GET",
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

export const indexLists = () => {
	return fetch(`http://localhost:8000/lists`, {
		method: "GET",
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

export const updateList = (data, id) => {
	return fetch(`http://localhost:8000/lists/${id}`, {
		method: "PATCH",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
			'Authorization': `Bearer ${store.userToken}`,
		},
		body: JSON.stringify(data)
	})
}

export const deleteList = (id) => {
	return fetch(`http://localhost:8000/lists/${id}`, {
		method: "DELETE",
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		}
	})
}


// Same comment as above for heading comments
                     //ACTIVITY ACTIONS

export const createAct = (data, userToken) => {
	return fetch(`http://localhost:8000/list`, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${store.userToken}`,
		},
		body: JSON.stringify(data)
	})
}

export const updateAct = (id, data) => {
	return fetch(`http://localhost:8000/list/${id}`, {
		method: "UPDATE",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${store.userToken}`,
		},
		body: JSON.stringify(data)
	})
}

export const deleteAct = (id) => {
	return fetch(`http://localhost:8000/list/${id}`, {
		method: "DELETE",
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}
