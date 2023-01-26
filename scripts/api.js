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
	return fetch(`http://localhost:8000/sign-in`), {
		method: "POST",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	}
}
 
 
 
  //LIST ACTIONS
 

export const createList = (data) => {
	return fetch(`http://localhost:8000/lists`), {
		method: "POST",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	}
}



export const showList = (data) => {
	return fetch(`http://localhost:8000/lists/${id}`), {
		method: "GET",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	}
}

export const indexList = (data) => {
	return fetch(`http://localhost:8000/lists`), {
		method: "GET",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	}
}

export const updateList = (data) => {
	return fetch(`http://localhost:8000/lists/${id}`), {
		method: "PATCH",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	}
}


export const deleteList = (data) => {
	return fetch(`http://localhost:8000/lists/${id}`), {
		method: "POST",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	}
}





