// Coding Challenge 1
/*

    BMI calculator
*/

function computeBMI() {


    //user input
    var height = Number(document.getElementById("height").value);
    var weight = Number(document.getElementById("weight").value);
    var heightunits = document.getElementById("heightunits").value;
    var weightunits = document.getElementById("weightunits").value;

    // convert units to metrics
    if (heightunits == "inches") {
        height /= 39.3701;
        console.log(height);
    }
    if (weightunits == "lb") {
        weight /= 2.20462;

    }

    // calculation
    var BMI = weight / Math.pow(height, 2);
    console.log(BMI);

    // display result
    var output = Math.round(BMI * 100) / 100
    document.getElementById("output").innerText = output;

    if (BMI < 18.5) document.getElementById("comment").innerHTML = "Underweight";
    if (BMI >= 18.5 && BMI <= 25) document.getElementById("comment").innerHTML = "Normal";
    if (BMI >= 25 && BMI <= 30) document.getElementById("comment").innerHTML = "Obese";
    if (BMI > 30) document.getElementById("comment").innerHTML = "Overweight";

}


