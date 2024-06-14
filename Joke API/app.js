function misc() {
    document.getElementById("loader1").style.display = "block";
    let data = fetch("https://v2.jokeapi.dev/joke/Miscellaneous");
    data.then((value1) => {
        return value1.json();
    }).then((value2) => {
        <!-- let result=JSON.stringify(value2); -->
        document.getElementById("miscp1").innerHTML = value2["setup"];
        document.getElementById("miscp2").innerHTML = value2["delivery"];
        document.getElementById("loader1").style.display = "none";
    })
}

function dark() {
    document.getElementById("loader2").style.display = "block";
    let data = fetch("https://v2.jokeapi.dev/joke/Dark");
    data.then((value1) => {
        return value1.json();
    }).then((value2) => {
        <!-- let result=JSON.stringify(value2); -->
        document.getElementById("darkp1").innerHTML = value2["setup"];
        document.getElementById("darkp2").innerHTML = value2["delivery"];
        document.getElementById("loader2").style.display = "none";
    })
}

function pun() {
    document.getElementById("loader3").style.display = "block";
    let data = fetch("https://v2.jokeapi.dev/joke/Pun");
    data.then((value1) => {
        return value1.json();
    }).then((value2) => {
        <!-- let result=JSON.stringify(value2); -->
        document.getElementById("punp1").innerHTML = value2["setup"];
        document.getElementById("punp2").innerHTML = value2["delivery"];
        document.getElementById("loader3").style.display = "none";
    })
}

function prog() {
    document.getElementById("loader4").style.display = "block";
    let data = fetch("https://v2.jokeapi.dev/joke/Programming");
    data.then((value1) => {
        return value1.json();
    }).then((value2) => {
        <!-- let result=JSON.stringify(value2); -->
        document.getElementById("progp1").innerHTML = value2["setup"];
        document.getElementById("progp2").innerHTML = value2["delivery"];
        document.getElementById("loader4").style.display = "none";
    })
}

function spooky() {
    document.getElementById("loader5").style.display = "block";
    let data = fetch("https://v2.jokeapi.dev/joke/Spooky");
    data.then((value1) => {
        return value1.json();
    }).then((value2) => {
        <!-- let result=JSON.stringify(value2); -->
        document.getElementById("spookyp1").innerHTML = value2["setup"];
        document.getElementById("spookyp2").innerHTML = value2["delivery"];
        document.getElementById("loader5").style.display = "none";
    })
}

function christ() {
    document.getElementById("loader6").style.display = "block";
    let data = fetch("https://v2.jokeapi.dev/joke/Christmas");
    data.then((value1) => {
        return value1.json();
    }).then((value2) => {
        <!-- let result=JSON.stringify(value2); -->
        document.getElementById("christp1").innerHTML = value2["setup"];
        document.getElementById("christp2").innerHTML = value2["delivery"];
        document.getElementById("loader6").style.display = "none";
    })
}