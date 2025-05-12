function calculateNG() {
  document.getElementById('results').innerHTML = '';
  const limits = [0.066, 0.066, 0.056, 0.078];
  Pass = [];
  Fail = [];
  
  let D1 = parseFloat(document.getElementById('D1').value);
  let D2 = parseFloat(document.getElementById('D2').value);
  let D3 = parseFloat(document.getElementById('D3').value);
  let H = (1.25 * D3) + ((D1 + D2) / 2);

  if (D1 > limits[0]) {
    Fail.push("D1 = " + D1.toFixed(4));
  } else {
    Pass.push("D1 = " + D1.toFixed(4));
  }

  if (D2 > limits[1]) {
    Fail.push("D2 = " + D2.toFixed(4));
  } else {
    Pass.push("D2 = " + D2.toFixed(4));
  }

  if (D3 > limits[2]) {
    Fail.push("D3 = " + D3.toFixed(4));
  } else {
    Pass.push("D3 = " + D3.toFixed(4));
  }

  if (H > limits[3]) {
    Fail.push("H = " + H.toFixed(4));
  } else {
    Pass.push("H = " + H.toFixed(4));
  }

  let resultsHTML = "<h3>Results:</h3><br>";
  resultsHTML += "<p class = 'pass'>Total Passed: " + Pass.length + "</p><br>";
  for (let i = 0; i < Pass.length; i++) {
    resultsHTML += "<p class = 'pass'>" + Pass[i] + "</p><br>";
  }
  resultsHTML += "<p class = 'fail'>Total Failed: " + Fail.length + "</p><br>";
  for (let i = 0; i < Fail.length; i++) {
    resultsHTML += "<p class = 'fail'>" + Fail[i] + "</p><br>";
  }
  document.getElementById('results').innerHTML = resultsHTML;
}