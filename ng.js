function calculateNG() {
  document.getElementById('results').innerHTML = '';
  const limits = [0.066, 0.066, 0.056, 0.078];
  let Pass = [];
  let Fail = [];
  
  let msn = document.getElementById("msn").value;
  let D1 = parseFloat(document.getElementById('D1').value);
  let D2 = parseFloat(document.getElementById('D2').value);
  let D3 = parseFloat(document.getElementById('D3').value);
  let H = (1.25 * D3) + ((D1 + D2) / 2);
  let name = "";

  if (D1 > limits[0]) {
    let d1 = D1.toFixed(4); 
    if (d1.endsWith('00')) {
      Fail.push("D1 = "+ D1.toFixed(2));
    } else if (d1.endsWith('0')) {
      Fail.push("D1 = "+ D1.toFixed(3));
    } else {
      Fail.push("D1 = "+ D1.toFixed(4));
    }
  }

  if (D1 <= limits[0]) {
    let d1 = D1.toFixed(4); 
    if (d1.endsWith('00')) {
      Pass.push("D1 = "+ D1.toFixed(2));
    } else if (d1.endsWith('0')) {
      Pass.push("D1 = "+ D1.toFixed(3));
    } else {
      Pass.push("D1 = "+ D1.toFixed(4));
    }
  }

  if (D2 > limits[1]) {
    let d2 = D2.toFixed(4); 
    if (d2.endsWith('00')) {
      Fail.push("D2 = "+ D2.toFixed(2));
    } else if (d2.endsWith('0')) {
      Fail.push("D2 = "+ D2.toFixed(3));
    } else {
      Fail.push("D2 = "+ D2.toFixed(4));
    }
  }

  if (D2 <= limits[1]) {
    let d2 = D2.toFixed(4); 
    if (d2.endsWith('00')) {
      Pass.push("D2 = "+ D2.toFixed(2));
    } else if (d2.endsWith('0')) {
      Pass.push("D2 = "+ D2.toFixed(3));
    } else {
      Pass.push("D2 = "+ D2.toFixed(4));
    }
  }

  if (D3 > limits[2]) {
    let d3 = D3.toFixed(4); 
    if (d3.endsWith('00')) {
      Fail.push("D3 = "+ D3.toFixed(2));
    } else if (d3.endsWith('0')) {
      Fail.push("D3 = "+ D3.toFixed(3));
    } else {
      Fail.push("D3 = "+ D3.toFixed(4));
    }
  }

  if (D3 <= limits[2]) {
    let d3 = D3.toFixed(4); 
    if (d3.endsWith('00')) {
      Pass.push("D3 = "+ D3.toFixed(2));
    } else if (d3.endsWith('0')) {
      Pass.push("D3 = "+ D3.toFixed(3));
    } else {
      Pass.push("D3 = "+ D3.toFixed(4));
    }
  }

  if (H > limits[3]) {
    let h = H.toFixed(4); 
    if (h.endsWith('00')) {
      Fail.push("H = "+ H.toFixed(2));
    } else if (h.endsWith('0')) {
      Fail.push("H = "+ H.toFixed(3));
    } else {
      Fail.push("H = "+ H.toFixed(4));
    }
  }

  if (H <= limits[3]) {
    let h = H.toFixed(4); 
    if (h.endsWith('00')) {
      Pass.push("H = "+ H.toFixed(2));
    } else if (h.endsWith('0')) {
      Pass.push("H = "+ H.toFixed(3));
    } else {
      Pass.push("H = "+ H.toFixed(4));
    }
  }
  
  if (msn !== "") {
    let name = msn;
    let resultsHTML = "<h3 class='results underline'>Freeplay Results for " + name + "</h3><br>";
    resultsHTML += "<p class = 'pass'>Total Passed: " + Pass.length + "</p><br>";
    for (let i = 0; i < Pass.length; i++) {
      resultsHTML += "<p class = 'pass'>" + Pass[i] + "</p><br>";
    }
    resultsHTML += "<p class = 'fail'>Total Failed: " + Fail.length + "</p><br>";
    for (let i = 0; i < Fail.length; i++) {
      resultsHTML += "<p class = 'fail'>" + Fail[i] + "</p><br>";
    }
    document.getElementById('results').innerHTML = resultsHTML;
  } else {
    let resultsHTML2 = "<h3 class='results underline'>Freeplay Results</h3><br>";
    resultsHTML2 += "<p class = 'pass'>Total Passed: " + Pass.length + "</p><br>";
    for (let i = 0; i < Pass.length; i++) {
      resultsHTML2 += "<p class = 'pass'>" + Pass[i] + "</p><br>";
    }
    resultsHTML2 += "<p class = 'fail'>Total Failed: " + Fail.length + "</p><br>";
    for (let i = 0; i < Fail.length; i++) {
      resultsHTML2 += "<p class = 'fail'>" + Fail[i] + "</p><br>";
    }
    document.getElementById('results').innerHTML = resultsHTML2;
  }
}