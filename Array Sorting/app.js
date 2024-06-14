function sorted() {
    let el = document.getElementById("elements").value;
    if (el == "") {
        alert("Enter elements");
    } else {
        let arr = el.split(",");

        let sortedArr = arr.sort((function(a, b) {
            return a - b;
        }));

        for (i = 0; i <= arr.length - 1; i++) {
            var div = document.createElement('div');
            div.innerHTML = `
	<h1>${sortedArr[i]}</h1>
	`;
            document.getElementById("theSortedArray").appendChild(div);
            div.setAttribute("class", "sortBall")
        }

        gsap.to(
            ".sortBall", {
                y: 200,
                opacity: 1,
                boxShadow: "0px 20px 20px 0px #8080809c",
                duration: 1,
                stagger: 1,
                ease:"bounce.out"
            }
        )
    }

}