const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const startElement = document.getElementById('startBtn');
const stopElement = document.getElementById('stopBtn');
const snapElement = document.getElementById('snapBtn');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
startElement.addEventListener("click", () => {
    webcam.start()
        .then(result => {
            console.log("webcam started");
        })
        .catch(err => {
            console.log(err);
        });
})
snapElement.addEventListener("click", () => {
    let image = webcam.snap();
})
stopElement.addEventListener("click", () => {
    webcam.stop();
    document.getElementById("webcam").style.display = "none";
})