
// const age = document.getElementById("age");
// const m = document.getElementById("m");
// const f = document.getElementById("f");
// const height = document.getElementById("height");
// const weight = document.getElementById("weight");



// function calculateBMI() {
//     if (!gender)
// }

document.getElementById('submit').addEventListener('click', calculateBMI);

function calculateBMI() {
    // Retrieve input values
    const age = document.getElementById('age').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    
    // Validate input values
    if (age <= 0 || height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
        alert("Please filled in the gap above");
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    
    // Categorize BMI
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal Weight";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = bmi.toFixed(2); // Display the BMI value formatted to two decimal places

    const commitDiv = document.querySelector('.commit');
    commitDiv.textContent = `Category: ${category}`;
}
