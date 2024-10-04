// add money

document
	.getElementById("btn-add-money")
	.addEventListener("click", function (event) {
		event.preventDefault();
		const inputAmount = document.getElementById("input-amount").value;

		const pinNumber = document.getElementById("pin").value;

		if (pinNumber === "1") {
			const balance = document.getElementById("balance").innerText;
			const balanceNum = parseFloat(balance);
			const inputAmountNum = parseFloat(inputAmount);
			const newBalance = inputAmountNum + balanceNum;
			console.log(newBalance);
      // update balance
			document.getElementById("balance").innerText = newBalance;

      // update transaction history
      const p = document.createElement('p');
      p.innerText = `${inputAmountNum}TK. New Balance ${newBalance}`
      document.getElementById('tran-container').appendChild(p);
		} else {
			alert("Add money failed");
		}
	});

// cash out

document
	.getElementById("btn-cash-out")
	.addEventListener("click", function (event) {
		event.preventDefault();
		const inputAmount = document.getElementById("input-cash-amount").value;

		const pinNumber = document.getElementById("pin-cash-out").value;

		if (pinNumber === "1") {
			const balance = document.getElementById("balance").innerText;
			const balanceNum = parseFloat(balance);
			const inputAmountNum = parseFloat(inputAmount);
			const newBalance = balanceNum - inputAmountNum;
			console.log(newBalance);

			document.getElementById("balance").innerText = newBalance;
		} else {
			alert("Cash out failed");
		}
	});

// show hide function

function show(id) {
	document.getElementById("am-form").classList.add("hidden");
	document.getElementById("co-form").classList.add("hidden");
	document.getElementById("tran-sec").classList.add("hidden");

	document.getElementById(id).classList.remove("hidden");
}

// show cash out form

document
	.getElementById("btn-show-co")
	.addEventListener("click", function (event) {
		show("co-form");
	});

// show add money form

document
  .getElementById("btn-show-am")
    .addEventListener("click", function () {
	    show("am-form");
});

document
  .getElementById("btn-show-tran")
    .addEventListener("click", function () {
	    show("tran-sec");
});