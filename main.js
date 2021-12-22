function yeet() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/r7LTMW8oc/model.json", modelReady);
}

function modelReady() {
    classifier.classifiy(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        r= Math.floor(Math.random()* 255) + 1;
        g= Math.floor(Math.random()* 255) + 1;
        b= Math.floor(Math.random()* 255) + 1;
        document.getElementById("ich").innerHTML = "I Can Hear ~ " + results[0].label;
        document.getElementById("accuracy").innerHTML = "I Can Hear ~ " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("ich").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("accuracy").style.color = "rgb(" + r + "," + g + "," + b + ")";
        imgs= document.getElementById("imageer");

        if(results[0].label == "Chicken") {
            imgs.src= "chicken.gif";
        }
        else if(results[0].label == "Horse") {
            imgs.src= "horse.gif";
        }
        else if(results[0].label == "Mouse") {
            imgs.src= "mouse.gif";
        }
        else if(results[0].label == "Snake") {
            imgs.src= "snake.gif";
        }
        else {
            imgs.src= "ear.png";
        }
    }
}