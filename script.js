
function getbmivalue(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    height = height * 12;
    height = height * 0.025; // convert height from feet to meters

    let newbmivalue = weight / (height * height);

    // Round the BMI value to a whole number
    newbmivalue = Math.round(newbmivalue);

    let category;

  if (newbmivalue < 18.5) {
    category = "Underweight";
  } else if (newbmivalue >= 18.5 && newbmivalue <= 24.9) {
    category = "Normal Weight";
  } else if (newbmivalue >= 25 && newbmivalue <= 29.9) {
    category = "Overweight";
  } else if (newbmivalue >= 30 && newbmivalue <= 34.9) {
    category = "Obesity (Class 1)";
  } else if (newbmivalue >= 35 && newbmivalue <= 39.9) {
    category = "Obesity (Class 2)";
  } else {
    category = "Extreme Obesity (Class 3)";
  }

    document.getElementById('bmivalue').value = newbmivalue;
    document.getElementById('bmicategory').innerText =category;

    // Prevent form submission
    return false;
}