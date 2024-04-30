function calculate1RM() {
    // Get input values
    var bodyweight = parseFloat(document.getElementById('bodyweight').value);
    var addedWeight = parseFloat(document.getElementById('addedWeight').value);
    var repetitions = parseInt(document.getElementById('repetitions').value);

    // Calculate 1RM using the formula
    var oneRepMax = [((bodyweight/2) + addedWeight)/(1.0278-(0.0278*repetitions))] - (bodyweight/2);
   

    // Display result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = '<h3>1RM Estimate:</h3>';
    resultElement.innerHTML += '<p>Tu 1RM estimado es de : <strong>' + oneRepMax.toFixed(2) + ' kg</strong></p>';
  }