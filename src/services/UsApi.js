export const UsApi = () => {
	const apik = "Qe5ddre98VQQC8vLpY-fXCVGkwOCmDr-eVKZbEevlDQ";
	const apiUrl = "https://api.unsplash.com/photos/";
	const randomUrl = "random/";



	let response =  fetch("https://api.unsplash.com/photos/random?client_id=Qe5ddre98VQQC8vLpY-fXCVGkwOCmDr-eVKZbEevlDQ")
	.then( (thingimabob) => {
	 	console.log(thingimabob) 
	 });
}