function calculateMax() {
  const limits = [0.060,0.060,0.050,0.051];
  let Passed = 0;
  let Pass_Value = [];
  let Failed = 0;
  let Fail_Value = [];
  let Zero_Counter = 0;
  let Zero = [];
  
  let D1 = parseFloat(document.getElementById('D1').value);
  let D2 = parseFloat(document.getElementById('D2').value);
  let D3 = parseFloat(document.getElementById('D3').value);
  let weight = parseFloat(document.getElementById('Weight').value);
  
  let X = D1-(weight*0.0000155);
  let Y = D2-(weight*0.0000155);
  let Z = (D3*1.25)-(weight*0.0000318);
  
  X = X < 0 ? 0 : X;
  Y = Y < 0 ? 0 : Y;
  Z = Z < 0 ? 0 : Z;
  
  let H = Z+((X+Y)/2);

  if (X > limits[0]) {
    Failed = Failed + 1
    Fail_Value.push("X = "+X.toFixed(4))
  } else if (X === 0) {
    Zero_Counter = Zero_Counter + 1
    Zero.push("X")
  } else {
    Passed = Passed + 1
    Pass_Value.push("X = "+X.toFixed(4))
  }
  if (Y > limits[1]) {
    Failed = Failed + 1
    Fail_Value.push("Y = "+Y)
  } else if (Y === 0) {
    Zero_Counter = Zero_Counter + 1
    Zero.push("Y")
  } else {
    Passed = Passed + 1
    Pass_Value.push("Y = "+Y.toFixed(4))
  }
  if (Z > limits[2]) {
    Failed = Failed + 1
    Fail_Value.push("Z = "+Z.toFixed(4))
  } else if (Z === 0) {
    Zero_Counter = Zero_Counter + 1
    Zero.push("Z")
  } else {
    Passed = Passed + 1
    Pass_Value.push("Z = "+Z.toFixed(4))
  }
  if (H > limits[3]) {
    Fail = Fail + 1
    Fail_Value.push("H = "+H.toFixed(4))
  } else {
    Passed = Passed + 1
    Pass_Value.push("H = "+H.toFixed(4))
  }
  
    let resultsHTML = "<h3>Results:</h3><br>";
    resultsHTML += "<p class = 'recheck'>Total Rechecks: " + Zero_Counter + "</p><br>";
    Zero.forEach(element => resultsHTML += "<p class = 'recheck'>" + element + "</p><br>");
    
    resultsHTML += "<p class = 'pass'>Total Passes: " + Passed + "</p><br>";
    Pass_Value.forEach(element => resultsHTML += "<p class = 'pass'>" + element + "</p><br>");
    
    resultsHTML += "<p class = 'fail'>Total Fails: " + Failed + "</p><br>";
    Fail_Value.forEach(element => resultsHTML += "<p class = 'fail'>" + element + "</p><br>");
    
    document.getElementById('results').innerHTML = resultsHTML;
}