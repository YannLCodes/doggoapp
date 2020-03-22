import React, { useState, useEffect } from 'react';


export const UsApi = () => {
	const apik = "Qe5ddre98VQQC8vLpY-fXCVGkwOCmDr-eVKZbEevlDQ";
	const apiUrl = "https://api.unsplash.com/photos/";
	const randomUrl = "random/";
	const shoobQuery = "query=samoyed"
	const [item, setItem] = useState(null);
	const [loading, setLoading] = useState(true);


	useEffect(async()=>{ 
		const call = await fetch(`${apiUrl}${randomUrl}?client_id=${apik}&${shoobQuery}`); //Make the API Call
		const data = await call.json();
		const foo = data.urls.regular;
		setItem(foo);
		setLoading(false);
		console.log(data);
	}, [])

	
	return(
		<>
		{loading ? <h3> ... Loading ... </h3> : <img class="image-generated" src={item} /> }
		</>
	)
}