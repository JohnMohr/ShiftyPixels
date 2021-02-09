// if all login fields are filled out, make POST request to validate user
const localPageView = window.location

document.addEventListener("DOMContentLoaded", (e) => {
	document.querySelector("#enter").addEventListener("click", () => {


		e.preventDefault();

		const email = document.querySelector('#email-login').value.trim();
		const password = document.querySelector('#password-login').value.trim();

		if (email && password) {
			let userData = {
				email: email,
				password: password
			}
			
			$.post("/login", userData).then(() => {
				console.log("success!")
				window.location.replace(`/user`);

			}).catch((err) => {
				console.log(err)
			}
			)

		}

		


	})
});