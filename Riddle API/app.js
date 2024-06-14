function fun() {
	let data = fetch("https://riddles-api.vercel.app/random");
	data.then((val1) => {
		return val1.json();
	}).then((val2) => {
		document.getElementById("ques").innerHTML = val2.riddle;
		document.getElementById("ans").innerHTML = "";
		document.getElementById("quesbtn").disabled = true;
		setTimeout(function() {
			document.getElementById("quesbtn").disabled = false;
		}, 22000);
		let i = 21;
		var myinterval = setInterval(() => {
			i--;
			document.getElementById("ans").innerHTML = "Answer in " + i + " seconds";
		}, 1000);
		setTimeout(() => {
			document.getElementById("ans").innerHTML = val2.answer;
			clearInterval(myinterval);
		}, 21000);
	})
}