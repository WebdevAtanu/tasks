 document.getElementById("btn").disabled=true;
function getting() {
    async function data() {
        let data = await fetch("https://api.imgflip.com/get_memes");
        let jsonData = await data.json();
        // console.log(jsonData);
        return jsonData.data.memes;
    }
    data().then(datas => {
        let rand = Math.round(Math.random() * 100);
        console.log(rand);
        console.log(datas[rand].name);
        console.log(datas[rand].url);
        document.getElementById("image").setAttribute("src", datas[rand].url);
        document.getElementById("name").innerText = datas[rand].name;
        document.getElementById("down").setAttribute("href", datas[rand].url);
        document.getElementById("down").setAttribute("downlaod", datas[rand].url);
        document.getElementById("btn").disabled=false;
    })
}