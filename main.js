Webcam.set({
    width: 300,
    height: 250,
    image_format: "png",
    png_quality: 90000
});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function takesnapshot() {
    Webcam.snap(function(data_uri){
        console.log(data_uri)
        document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+' "/>" '
    })
 }
 
 console.log("ml5 version: ",ml5.version);

 classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3vQW4Ic0y/model.json
 ',modelloaded');

