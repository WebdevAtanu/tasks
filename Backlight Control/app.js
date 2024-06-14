function myfunc() {
    let data = document.getElementById("slider").value;
    console.log(data);
    if (data <= 10) {
        document.getElementById("overlay").style.opacity = "0.1";
    } else if (data <= 20) {
        document.getElementById("overlay").style.opacity = "0.2";
    } else if (data <= 30) {
        document.getElementById("overlay").style.opacity = "0.3";
    } else if (data <= 40) {
        document.getElementById("overlay").style.opacity = "0.4";
    } else if (data <= 50) {
        document.getElementById("overlay").style.opacity = "0.5";
    } else if (data <= 60) {
        document.getElementById("overlay").style.opacity = "0.6";
    } else if (data <= 70) {
        document.getElementById("overlay").style.opacity = "0.7";
    } else if (data <= 80) {
        document.getElementById("overlay").style.opacity = "0.8";
    } else if (data <= 90) {
        document.getElementById("overlay").style.opacity = "0.9";
    } else {
        document.getElementById("overlay").style.opacity = "1";
    }

}