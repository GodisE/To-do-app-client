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


 
                     //LIST ACTIONS
 

export const createList = (data) => {
	return fetch(`http://localhost:8000/lists`, {
		method: "POST",
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
			"Accept": "application/json",
			"Content-Type": "application/json",

		},
		body: JSON.stringify(data)
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
		
	},

	)
	
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



                     //ACTIVITY ACTIONS

export const createAct = (data) => {
	return fetch(`http://localhost:8000/list`, {
		method:"POST",
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
