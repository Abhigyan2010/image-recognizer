Webcam.attach('#camera');
camera=document.getElementById("live_webcam_view");
Webcam.set({
    width:350,
    height:350,
    img_format:'png',
    png_quality:100
});
camera=document.getElementById("live_webcam_view");
Webcam.attach(camera);
function Click(){
    Webcam.snap(function(data_uri){
        document.getElementById("captured_image").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VcgROaTPK/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}
function Identify(){
    img=document.getElementById("captured_image");
    classifier.classify(img, getResult);
}
function getResult(error,results){
    if (error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("Object_value").innerHTML=results[0].label;
        document.getElementById("Accuracy_value").innerHTML=results[0].confidence.toFixed(3);
    }
}