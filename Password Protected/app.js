function myfunc() {
    let passcode = "atanu404";
    let input = document.getElementById("inp").value;
    if (input == "" || input != passcode) {
        alert("Password invalid / Enter correct password");
        
    } else {
        alert("Hurray! Correct Password");
        document.getElementById("passwordBlock").style.display = "none";
        document.getElementById("overlay").style.display = "none";
        document.getElementById("code").classList.remove("blurring");
    }
}