function calculateRudder() {
  document.getElementById("results757").innerHTML= ``;
  let tail = document.getElementById("tail757").value;
  let oneL= parseFloat(document.getElementById('1l').value);
  let oneR = parseFloat(document.getElementById('1r').value);
  let twoL= parseFloat(document.getElementById('2l').value);
  let twoR = parseFloat(document.getElementById('2r').value);
  let name = "";
  let pass = [];
  let fail = [];
  let limits = [0.040, 0.40];

  let first_total = oneL+oneR;
  let second_total = twoL+twoR;
  let diff = first_total-second_total;

   if (diff < 0) {
    diff = diff*(-1);
  } else {
     diff = diff;
  }

  if (first_total < limits[1]) {
    pass.push("1st total = "+first_total);
  } else {
    fail.push("1st total = "+first_total);
  }

   if (second_total < limits[1]) {
    pass.push("2nd total = "+second_total);
  } else {
    fail.push("2nd total = "+second_total);
  }

   if (diff < limits[0]) {
    pass.push("Difference = "+diff.toFixed(3));
  } else {
    fail.push("Difference = "+diff.toFixed(3));
  }

  if (tail !== "") {
    let name = tail;
    let resultsHTML = "<h3 class='results underline'>Freeplay Results for " + name + "</h3><br>";
    resultsHTML += "<p class = 'pass'>Total Passed: " + pass.length + "</p><br>";
    for (let i = 0; i < pass.length; i++) {
      resultsHTML += "<p class = 'pass'>" + pass[i] + "</p><br>";
    }
    resultsHTML += "<p class = 'fail'>Total Failed: " + fail.length + "</p><br>";
    for (let i = 0; i < fail.length; i++) {
      resultsHTML += "<p class = 'fail'>" + fail[i] + "</p><br>";
    }
    document.getElementById('results757').innerHTML = resultsHTML;
  } else {
    let resultsHTML2 = "<h3 class='results underline'>Freeplay Results</h3><br>";
    resultsHTML2 += "<p class = 'pass'>Total Passed: " + pass.length + "</p><br>";
    for (let i = 0; i < pass.length; i++) {
      resultsHTML2 += "<p class = 'pass'>" + pass[i] + "</p><br>";
    }
    resultsHTML2 += "<p class = 'fail'>Total Failed: " + fail.length + "</p><br>";
    for (let i = 0; i < fail.length; i++) {
      resultsHTML2 += "<p class = 'fail'>" + fail[i] + "</p><br>";
    }
    document.getElementById('results757').innerHTML = resultsHTML2;
  }
}
