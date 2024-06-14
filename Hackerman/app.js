function hacker() {
    let inp = document.getElementById("inp").value;
    let con = document.getElementById("con").value;
    if (inp == null || inp == "") {
        alert("Enter the model number");
    } else if (con == null || con == "") {
        alert("Enter the system SKU");
    } else {
        setInterval(() => {
            document.getElementById("id1").style.display = "block";
            document.getElementById("id2").style.display = "none";
        }, 100);
        setInterval(() => {
            document.getElementById("id1").style.display = "none";
            document.getElementById("id2").style.display = "block";
        }, 300);

        setInterval(() => {
            document.getElementById("id3").style.display = "block";
            document.getElementById("id4").style.display = "none";
        }, 100);
        setInterval(() => {
            document.getElementById("id3").style.display = "none";
            document.getElementById("id4").style.display = "block";
        }, 300);

        document.getElementById("prog").style.display = "block";
        document.getElementById("btn").innerText = "STOP";
        setTimeout(
            () => {
                document.getElementById("pid").innerHTML = "Fetching the BIOS ID of the system model number " + inp + ", please wait...";
                document.getElementById("prog").value = 7;
            }, 2000);
        setTimeout(
            () => {
                document.getElementById("pid1").innerHTML = "BIOS ID of the model number- " + inp + " has been found...";
                document.getElementById("prog").value = 18;
            }, 6000);
        setTimeout(
            () => {
                document.getElementById("pid2").innerHTML = "Breaking the firewalls...";
                document.getElementById("prog").value = 27;
                document.getElementById("prog2").style.display = "block";
                setInterval(() => {
                    document.getElementById("prog2").value += 1;
                }, 50)
            }, 10000);
        setTimeout(
            () => {
                document.getElementById("pid3").innerHTML = "Access granted...";
                document.getElementById("prog").value = 43;
            }, 16000);
        setTimeout(
            () => {
                document.getElementById("pid4").innerHTML = "Hacking complete. Accessing the files now...";
                document.getElementById("prog").value = 67;
            }, 20000);
        setTimeout(() => {
            let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
            let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
            var alres = "";
            var numres = "";
            for (i = 0; i <= 5; i++) {
                var randomalpha = alpha[Math.floor(Math.random() * alpha.length)];
                var randomnum = num[Math.floor(Math.random() * num.length)];
                var alres = alres.concat(randomalpha);
                var numres = numres.concat(randomnum);
            }
            var finalres = alres.concat(numres);
            document.getElementById("pid5").innerHTML = "The access key of the system model number- " + inp + " is " + finalres;
            document.getElementById("prog").value = 83;
        }, 22000)

        setTimeout(() => {
            document.getElementById("pid6").innerHTML = "Downloading the files now...";
            document.getElementById("prog1").style.display = "block";
            setInterval(() => {
                document.getElementById("prog1").value += 1;
            }, 200)
            document.getElementById("prog").value = 100;
        }, 26000)

        setTimeout(() => {
            document.getElementById("pid7").innerHTML = "Ha!Ha! Got you &#128512, Its a fake hacking created by Atanu &#128516 &#128516";
        }, 48000)
    }
}