function fun() {
    let randomnum = Math.floor(Math.random() * 800);
    let data = fetch(`https://www.superheroapi.com/api.php/1637127203359769/${randomnum}`);
    data.then((val1) => {
        return val1.json();
    }).then((val2) => {
        document.getElementById("imgsrc").src = val2.image.url;
        document.getElementById("name").innerHTML = (val2.name);
        document.getElementById("fname").innerHTML = (val2.biography["full-name"]);
        document.getElementById("alias").innerHTML = (val2.biography["aliases"][0]);
        document.getElementById("align").innerHTML = (val2.biography["alignment"]);
        document.getElementById("occ").innerHTML = (val2.work.occupation);
        document.getElementById("base").innerHTML = (val2.work.base);
        document.getElementById("comic").innerHTML = (val2.biography["publisher"]);
        document.getElementById("intel").innerHTML = (val2.powerstats.intelligence);
        document.getElementById("str").innerHTML = (val2.powerstats.strength);
        document.getElementById("dur").innerHTML = (val2.powerstats.durability);
        document.getElementById("spd").innerHTML = (val2.powerstats.speed);
        document.getElementById("pow").innerHTML = (val2.powerstats.power);
        document.getElementById("cbt").innerHTML = (val2.powerstats.combat);
    })
}

let buttons = document.querySelectorAll(".iconbtn");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let supeicon = (this.value);
        let data = fetch(`https://www.superheroapi.com/api.php/1637127203359769/${supeicon}`);
        data.then((val1) => {
            return val1.json();
        }).then((val2) => {
            let str = "group-affiliation";
            document.getElementById("imgsrc").src = val2.image.url;
            document.getElementById("name").innerHTML = (val2.name);
            document.getElementById("fname").innerHTML = (val2.biography["full-name"]);
            document.getElementById("alias").innerHTML = (val2.biography["aliases"][0]);
            document.getElementById("align").innerHTML = (val2.biography["alignment"]);
            document.getElementById("occ").innerHTML = (val2.work.occupation);
            document.getElementById("base").innerHTML = (val2.work.base);
            document.getElementById("comic").innerHTML = (val2.biography["publisher"]);
            document.getElementById("intel").innerHTML = (val2.powerstats.intelligence);
            document.getElementById("str").innerHTML = (val2.powerstats.strength);
            document.getElementById("dur").innerHTML = (val2.powerstats.durability);
            document.getElementById("spd").innerHTML = (val2.powerstats.speed);
            document.getElementById("pow").innerHTML = (val2.powerstats.power);
            document.getElementById("cbt").innerHTML = (val2.powerstats.combat);
        })
    })
}

function namesearch() {
    let name = document.getElementById("sname").value;
    console.log(name);
    let data = fetch(`https://www.superheroapi.com/api.php/1637127203359769/search/${name}`);
    data.then((val1) => {
        return val1.json();
    }).then((val2) => {
        console.log(val2.results[0]);
        document.getElementById("imgsrc").src = val2.results[0].image.url;
        document.getElementById("name").innerHTML = (val2.results[0].name);
        document.getElementById("fname").innerHTML = (val2.results[0].biography["full-name"]);
        document.getElementById("alias").innerHTML = (val2.results[0].biography["aliases"][0]);
        document.getElementById("align").innerHTML = (val2.results[0].biography["alignment"]);
        document.getElementById("occ").innerHTML = (val2.results[0].work.occupation);
        document.getElementById("base").innerHTML = (val2.results[0].work.base);
        document.getElementById("comic").innerHTML = (val2.results[0].biography["publisher"]);
        document.getElementById("intel").innerHTML = (val2.results[0].powerstats.intelligence);
        document.getElementById("str").innerHTML = (val2.results[0].powerstats.strength);
        document.getElementById("dur").innerHTML = (val2.results[0].powerstats.durability);
        document.getElementById("spd").innerHTML = (val2.results[0].powerstats.speed);
        document.getElementById("pow").innerHTML = (val2.results[0].powerstats.power);
        document.getElementById("cbt").innerHTML = (val2.results[0].powerstats.combat);
    })
}