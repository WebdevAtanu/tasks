document.getElementById("evalbtn").addEventListener("click", () => {
        let inp = document.getElementById("inp");
        try {
            inp.value = eval(inp.value);
        } catch (err) {
            alert("😑 Don't you know the basic math rule?");
        }

    }

)
let inp = document.getElementById("inp");
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        document.getElementById("evalbtn").click();
    }
    switch (event.key) {
        case "0":
            inp.value += "0";
            break;
        case "1":
            inp.value += "1";
            break;
        case "2":
            inp.value += "2";
            break;
        case "3":
            inp.value += "3";
            break;
        case "4":
            inp.value += "4";
            break;
        case "5":
            inp.value += "5";
            break;

        case "6":
            inp.value += "6";
            break;
        case "7":
            inp.value += "7";
            break;
        case "8":
            inp.value += "8";
            break;
        case "8":
            inp.value += "8";
            break;
        case "9":
            inp.value += "9";
            break;
        case "+":
            inp.value += "+";
            break;
        case "-":
            inp.value += "-";
            break;
        case "*":
            inp.value += "*";
            break;
        case "/":
            inp.value += "/";
            break;
        case ".":
            inp.value += ".";
            break;
        case "%":
            inp.value += "%";
            break;
        default:
            alert("Invalid Button");
    }
})