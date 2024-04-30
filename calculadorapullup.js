
        function calculate1RM() {
          // Get input values
          var bodyweight = parseFloat(document.getElementById('bodyweight').value);
          var addedWeight = parseFloat(document.getElementById('addedWeight').value);
          var repetitions = parseInt(document.getElementById('repetitions').value);
      
          // Calculate 1RM using the Epley formula
          var oneRepMax = [(bodyweight + addedWeight) * (1+(0.0333 * (repetitions -1)))] - bodyweight;
      
          // Display result
          var resultElement = document.getElementById('result');
          resultElement.innerHTML = '<h3>1RM Estimate:</h3>';
          resultElement.innerHTML += '<p>Tu 1RM estimado es de: <strong>' + oneRepMax.toFixed(2) + ' kg</strong></p>';
        }
