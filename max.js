function calculateMax() {
  document.getElementById('results').innerHTML = '';
  const limits = [0.060,0.060,0.050,0.051];
  let Passed = 0;
  let Pass_Value = [];
  let Failed = 0;
  let Fail_Value = [];
  let Zero_Counter = 0;
  let Zero = [];

  let msn = document.getElementById('msn').value;
  let D1 = parseFloat(document.getElementById('D1').value);
  let D2 = parseFloat(document.getElementById('D2').value);
  let D3 = parseFloat(document.getElementById('D3').value);
  let weight = parseFloat(document.getElementById('Weight').value);
  let name ="";

  let X = D1-(weight*0.0000155);
  let Y = D2-(weight*0.0000155);
  let Z = (D3*1.25)-(weight*0.0000318);

  X = X < 0 ? 0 : X;
  Y = Y < 0 ? 0 : Y;
  Z = Z < 0 ? 0 : Z;

  let H = Z+((X+Y)/2);

  if (X > limits[0]) {
    let x = X.toFixed(4);
    if (x.endsWith('00')) {
      Failed += 1;
      Fail_Value.push("X = "+X.toFixed(2));
    } else if (x.endsWith('0')) {
      Failed += 1;
      Fail_Value.push("X = "+X.toFixed(3));
    } else {
      Failed += 1;
      Fail_Value.push("X = "+X.toFixed(4));
    }
  }

  if (X < limits[0]) {
    let x = X.toFixed(4);
    if (x.endsWith('00')) {
      Passed += 1;
      Pass_Value.push("X = "+X.toFixed(2));
    } else if (x.endsWith('0')) {
      Passed += 1;
      Pass_Value.push("X = "+X.toFixed(3));
    } else {
      Passed += 1;
      Pass_Value.push("X = "+X.toFixed(4));
    }
  }

  if (X === 0) {
    Zero_Counter += 1;
    Zero.push("X");
  }


  if (Y > limits[1]) {
    let y = Y.toFixed(4);
    if (y.endsWith('00')) {
      Failed += 1;
      Fail_Value.push("Y = "+Y.toFixed(2));
    } else if (y.endsWith('0')) {
      Failed += 1;
      Fail_Value.push("Y = "+Y.toFixed(3));
    } else {
      Failed += 1;
      Fail_Value.push("Y = "+Y.toFixed(4));
    }
  }
  if (Y < limits[1]) {
  let y = Y.toFixed(4);
      if (y.endsWith('00')) {
        Passed += 1;
        Pass_Value.push("Y = "+Y.toFixed(2));
      } else if (y.endsWith('0')) {
        Passed += 1;
        Pass_Value.push("Y = "+Y.toFixed(3));
      } else {
        Passed += 1;
        Pass_Value.push("Y = "+Y.toFixed(4));
      }
  }
  if (Y === 0) {
    Zero_Counter += 1;
    Zero.push("Y");
  }

  if (Z > limits[2]) {
    let z = Z.toFixed(4);
    if (z.endsWith('00')) {
      Failed += 1;
      Fail_Value.push("Z = "+Z.toFixed(2));
    } else if (z.endsWith('0')) {
      Failed += 1;
      Fail_Value.push("Z = "+Z.toFixed(3));
    } else {
      Failed += 1;
      Fail_Value.push("Z = "+Z.toFixed(4));
    }
  }
 if (Z < limits[2]) {
  let z = Z.toFixed(4);
    if (z.endsWith('00')) {
      Passed += 1;
      Pass_Value.push("Z = "+Z.toFixed(2));
    } else if (z.endsWith('0')) {
      Passed += 1;
      Pass_Value.push("Z = "+Z.toFixed(3));
    } else {
      Passed += 1;
      Pass_Value.push("Z = "+Z.toFixed(4));
    }
  }

  if (Z === 0) {
    Zero_Counter += 1;
    Zero.push("Z");
  }

  if (H > limits[3]) {
    let h = H.toFixed(4);
        if (h.endsWith('00')) {
          Failed += 1;
          Fail_Value.push("H = "+H.toFixed(2));
        } else if (h.endsWith('0')) {
          Failed += 1;
          Fail_Value.push("H = "+H.toFixed(3));
        } else {
          Failed += 1;
          Fail_Value.push("H = "+H.toFixed(4));
        }
  }

  if (H < limits[3]) {
    let h = H.toFixed(4);
        if (h.endsWith('00')) {
          Passed += 1;
          Pass_Value.push("H = "+H.toFixed(2));
        } else if (h.endsWith('0')) {
          Passed += 1;
          Pass_Value.push("H = "+H.toFixed(3));
        } else {
          Passed += 1;
          Pass_Value.push("H = "+H.toFixed(4));
        }
  }

  if (msn !== "") {
    let name = msn;
    let resultsHTML = "<h3 class='results underline'>Freeplay Results for " + name + "</h3><br>";
    resultsHTML += "<p class = 'pass'>Total Passed: " + Pass_Value.length + "</p><br>";
    for (let i = 0; i < Pass_Value.length; i++) {
      resultsHTML += "<p class = 'pass'>" + Pass_Value[i] + "</p><br>";
    }
    resultsHTML += "<p class = 'recheck'>Total Rechecks: " + Zero_Counter + "</p><br>";
    for (let i = 0; i < Zero.length; i++) {
      resultsHTML += "<p class = 'recheck'>" + Zero[i] + "</p><br>";
    }
    resultsHTML += "<p class = 'fail'>Total Failed: " + Fail_Value.length + "</p><br>";
    for (let i = 0; i < Fail_Value.length; i++) {
      resultsHTML += "<p class = 'fail'>" + Fail_Value[i] + "</p><br>";
    }
    document.getElementById('results').innerHTML = resultsHTML;
  } else {
    let resultsHTML2 = "<h3 class='results underline'>Freeplay Results</h3><br>";
    resultsHTML2 += "<p class = 'pass'>Total Passed: " + Pass_Value.length + "</p><br>";
    for (let i = 0; i < Pass_Value.length; i++) {
      resultsHTML2 += "<p class = 'pass'>" + Pass_Value[i] + "</p><br>";
    }
    resultsHTML2 += "<p class = 'recheck'>Total Rechecks: " + Zero_Counter + "</p><br>";
    for (let i = 0; i < Zero.length; i++) {
      resultsHTML2 += "<p class = 'recheck'>" + Zero[i] + "</p><br>";
    }
    resultsHTML2 += "<p class = 'fail'>Total Failed: " + Fail_Value.length + "</p><br>";
    for (let i = 0; i < Fail_Value.length; i++) {
      resultsHTML2 += "<p class = 'fail'>" + Fail_Value[i] + "</p><br>";
    }
    document.getElementById('results').innerHTML = resultsHTML2;
  }
}