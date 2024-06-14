let data = [{
        "src": "ex.jpg"
    }, {
        "src": "ex2.jpg"
    }, {
        "src": "ex3.jpg"
    }, {
        "src": "ex4.jpg"
    }, {
        "src": "ex2.jpg"
    }, {
        "src": "ex3.jpg"
    }, {
        "src": "ex4.jpg"
    }, {
        "src": "ex2.jpg"
    }, {
        "src": "ex3.jpg"
    }, {
        "src": "ex4.jpg"
    }

]
function delay() {
    function Item(i) {
        document.getElementById("image").setAttribute("src", data[i].src);
        if (i < data.length - 1) {
            setTimeout(() => {
                Item(i + 1);
            }, 3000);
        }
        document.getElementById("prog").value = 0;
        setInterval(() => {
            document.getElementById("prog").value += 1;
        }, 100)
    }
    Item(0);
}
delay();