



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
 
 
 
                     //LIST ACTIONS
 

export const createList = (userToken) => {
	return fetch(`http://localhost:8000/lists`, {
		headers: {
			"Authorization" : `Bearer ${"token", userToken}`
		}
	})
}



export const showList = (id) => {
	return fetch(`http://localhost:8000/lists/${id}`, {
		method: "GET",
		headers: {
			"Authorization" : `Bearer ${"token", userToken}`
		},
	
	})
}

export const indexLists = () => {
	return fetch(`http://localhost:8000/lists`, {
		method: "GET",
		headers: {
			"Authorization" : `Bearer ${"token", userToken}`

		},
	
	})
}

export const updateList = (data, id) => {
	return fetch(`http://localhost:8000/lists/${id}`, {
		method: "PATCH",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
			"Authorization" : `Bearer ${"token", userToken}`
		},
		body: JSON.stringify(data)
	})
}


export const deleteList = (id) => {
	return fetch(`http://localhost:8000/lists/${id}`, {
		method: "DELETE",
		headers: {
			"Authorization" : `Bearer ${"token", userToken}`
		}
		
	})
}



                     //ACTIVITY ACTIONS

export const createAct = (data, userToken) => {
	return fetch(`http://localhost:8000/list`, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			"Authorization" : `Bearer ${"token", userToken}`
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
			"Authorization" : `Bearer ${"token", userToken}`
		},
		body: JSON.stringify(data)
	})
}

export const deleteAct = (id) => {
	return fetch(`http://localhost:8000/list/${id}`, {
		method: "DELETE",
		headers: {
			"Authorization" : `Bearer ${"token", userToken}`
		},
		
	})
}
