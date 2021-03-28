const axios = require('axios').default;

export default function Firestore() {

	return(
		<button onClick={()=> callFirestore()}>poop</button>
	)


}

function callFirestore(){

	axios.get('/api/entry')
		.then(function (response) {
			// handle success
			console.log("response", response.data);
		})
		.catch(function (error) {
			// handle error
			console.log("error", error);
		})
		.then(function () {
			// always executed
			console.log("just checking");
		});
}