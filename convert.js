window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   var convertButton = document.getElementById("convertButton");
   var cInput = document.getElementById("cInput");
   var fInput = document.getElementById("fInput");
   var weatherImage = document.getElementById("weatherImage");
   hideImage();
   convertButton.addEventListener("click", convertTemperature);
   cInput.addEventListener("input", () => {
      if (fInput.value.length > 0) {
          fInput.value = "";// to make other input empty when entering value in this
      }

   });
   fInput.addEventListener("input", () => {
       if (cInput.value.length > 0) {
           cInput.value = "";// to make other input empty when entering value in this
       }
   });

   function hideImage() {
       weatherImage.style.display = "none";
   }

}

function convertTemperature() {
   var cInput = document.getElementById("cInput");
   var fInput = document.getElementById("fInput");
   var weatherImage = document.getElementById("weatherImage");
   var errorMessage = document.getElementById("errorMessage");
   if (cInput.value.length > 0) {// if input not empty
       if (checkErrorInput(cInput.value)) {// runs while input is valid
           fInput.value = convertCtoF(parseFloat(cInput.value));
           showImage(parseFloat(fInput.value));// To show respective gifs
       }
   } else if (fInput.value.length > 0) { // if input not empty
       if (checkErrorInput(fInput.value)) { // runs while input is valid
           cInput.value = convertFtoC(parseFloat(fInput.value));
           showImage(parseFloat(fInput.value));// To show respective gifs
       }
   } else {
       errorMessage.innerText = "please enter temperature";
   }

   function checkErrorInput(input) {
       if (isNaN(parseFloat(input))) {
           errorMessage.innerHTML = input + " is not a number";
           return false;  // input is not valid throws error and returns false
       } else {
           errorMessage.innerHTML = "";
           return true;  // valid input
       }
   }

   function showImage(degree) {
      if (degree < 32) {
      weatherImage.src = "cold.png";
      
      }else if (degree >= 32 && degree <= 50) {
      weatherImage.src = "cool.png";
      
      }else {
      weatherImage.src = "warm.png";
      }
           
       
       weatherImage.style.display = "block";
   }

}

document.addEventListener("DOMContentLoaded", domLoaded);

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   let degreesFahrenheit = (degreesCelsius * (9/5)) + 32;
   return degreesFahrenheit;


}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   let degreesCelsius = (degreesFahrenheit - 32) * (5/9);
   return degreesCelsius;

}
