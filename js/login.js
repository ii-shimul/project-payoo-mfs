// ! search: form submit reloading the page

document
	.getElementById("btn-login")
	.addEventListener("click", function (event) {
		event.preventDefault(); // prevents page from loading

		// get the phn number
		const phoneNumber = document.getElementById("phn-num").value;

    const pinNumber = document.getElementById("pin-number").value;

		if (phoneNumber === '557' && pinNumber === '1234') {
			console.log("you are logged in");
			window.location.href = '../home.html' // go to another html file or page
		}
		else{
			alert("wrong info");
		}
	});