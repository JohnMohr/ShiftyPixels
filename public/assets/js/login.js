// if all login fields are filled out, make POST request to validate user
document.addEventListener("DOMContentLoaded", (e) => {
	document.querySelector("#enter").addEventListener("click", () => {


		e.preventDefault();

		const email = document.querySelector('#email-login').value.trim();
		const password = document.querySelector('#password-login').value.trim();

		if (email && password) {
			let userdata = {
				email:email,
				password: password
			}
			$.post("/login", userData).then(() => {
				console.log("success!")

			}).catch(() => {
				console.log("error")
			}
			)

		}

	// check the response status
	// if (response.ok) {
	// 	document.location.replace('/dashboard');
	// } else {
	// 	document.location.replace('/login');
	// 	return;
	// }

	
})
});