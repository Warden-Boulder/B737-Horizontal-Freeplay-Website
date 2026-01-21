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

  let left_diff = (oneL-twoL).toFixed(3);
  let right_diff = (oneR-twoR).toFixed(3);
  let first_total = oneL+oneR;
  let second_total = twoL+twoR;

  if (left_diff < 0) {
    left_diff = left_diff*(-1);
  } else {
    left_diff = left_diff;
  }

  if (right_diff < 0) {
    right_diff = right_diff*(-1);
  } else {
    right_diff = right_diff;
  }

  if (left_diff < limits[0]) {
    pass.push("Left differential is "+left_diff);
  } else {
    fail.push("Left differential is "+left_diff);
  }
  if (right_diff < limits[0]) {
    pass.push("Right differential is "+right_diff);
  } else {
    fail.push("Right differential is "+right_diff);
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
  
  if (tail !== "") {
    let name = tail;
    let resultsHTML = "<h3 class='results underline'>Freeplay Results for " + name + "</h3>";
    resultsHTML += "<div class='results-container'>";
    resultsHTML += "<div class='results-column'>";
    resultsHTML += "<p class='pass'>Total Passed: " + pass.length + "</p>";
    for (let i = 0; i < pass.length; i++) {
      resultsHTML += "<p class='pass'>" + pass[i] + "</p>";
    }
    resultsHTML += "</div>";
    resultsHTML += "<div class='results-column'>";
    resultsHTML += "<p class='fail'>Total Failed: " + fail.length + "</p>";
    for (let i = 0; i < fail.length; i++) {
      resultsHTML += "<p class='fail'>" + fail[i] + "</p>";
    }
    resultsHTML += "</div></div>";
    document.getElementById('results757').innerHTML = resultsHTML;
  } else {
    let resultsHTML2 = "<h3 class='results underline'>Freeplay Results</h3>";
    resultsHTML2 += "<div class='results-container'>";
    resultsHTML2 += "<div class='results-column'>";
    resultsHTML2 += "<p class='pass'>Total Passed: " + pass.length + "</p>";
    for (let i = 0; i < pass.length; i++) {
      resultsHTML2 += "<p class='pass'>" + pass[i] + "</p>";
    }
    resultsHTML2 += "</div>";
    resultsHTML2 += "<div class='results-column'>";
    resultsHTML2 += "<p class='fail'>Total Failed: " + fail.length + "</p>";
    for (let i = 0; i < fail.length; i++) {
      resultsHTML2 += "<p class='fail'>" + fail[i] + "</p>";
    }
    resultsHTML2 += "</div></div>";
    document.getElementById('results757').innerHTML = resultsHTML2;
  }
}