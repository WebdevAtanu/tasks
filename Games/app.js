// ==============Rock, Paper, Scissor game====================
let things = ['Rock', 'Paper', 'Scissor'];
let computer = things[Math.floor(Math.random() * things.length)];

function func() {
    var selected = document.querySelector('input[name="opt"]:checked');
    if (!selected) {
        alert("select a option");
    } else {
        document.getElementById("btn1").disabled = true;
        document.getElementById("loader1").style.display = "block";

        let opt = document.getElementsByName("opt");
        for (i = 0; i < opt.length; i++) {
            if (opt[i].checked) {
                user = opt[i].value;
            }
        }
        if (user == computer) {
            document.getElementById("res").innerHTML = "Match Tied";
            document.getElementById("res").classList.add("draw");
        } else if (user == "Paper" && computer == "Rock") {
            document.getElementById("res").innerHTML = "You Won";
            document.getElementById("res").classList.add("win");
        } else if (user == "Rock" && computer == "Paper") {
            document.getElementById("res").innerHTML = "You Loose";
            document.getElementById("res").classList.add("lost");
        } else if (user == "Paper" && computer == "Scissor") {
            document.getElementById("res").innerHTML = "You Loose";
            document.getElementById("res").classList.add("lost");
        } else if (user == "Scissor" && computer == "Paper") {
            document.getElementById("res").innerHTML = "You Won";
            document.getElementById("res").classList.add("win");
        } else if (user == "Scissor" && computer == "Rock") {
            document.getElementById("res").innerHTML = "You Loose";
            document.getElementById("res").classList.add("lost");
        } else {
            document.getElementById("res").innerHTML = "You Won";
            document.getElementById("res").classList.add("win");
        }
    }
}

function reloadFunc() {
    location.reload();
}


// ==============Guess the Number game====================
var inp = document.getElementById("num");
inp.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn2").click();
    }
});
var a = Math.random();
a = Number.parseInt(a * 100);
var ch = 100;

function guess() {
    ch = ch - 1;
    var input = document.getElementById("num").value;
    input = Number.parseInt(input);

    if (input == a) {
        document.getElementById("ans").innerHTML = `Correct Number, Chances used ${100-ch}`;
        document.getElementById("btn2").disabled = true;
        document.getElementById("loader2").style.display = "block";
    } else if (input < 100 && input > a) {
        document.getElementById("ans").innerHTML = "Number is Bigger. Try another number.";
    } else if (input < 100 && input < a) {
        document.getElementById("ans").innerHTML = "Number is Smaller. Try another number.";
    } else {
        document.getElementById("ans").innerHTML = "Invalid Input/Enter Number";
    }
}