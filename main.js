Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
Camera = document.getElementById("camera")
Webcam.attach('#camera')

function takesnapshot() {
    Webcam.snap(function (image) {
        document.getElementById("result").innerHTML = '<img id="capturedimage" src="' + image + '">';
    });
}
console.log("ml5 library version:;", ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/TXwLWrjCZ/', modelLoaded);
function modelLoaded() {
    console.log("modelisloaded")
}
function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotresult)
}
function gotresult(error, result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result)
document.getElementById("result_Face_name")=result[0].label;
document.getElementById("result_Face_accuracy")=result[0].confidence.toFixed(2);
        }
    }