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

  let first_total_raw = oneL+oneR;
  let second_total_raw = twoL+twoR;
  let diff_raw = Math.abs(first_total_raw - second_total_raw);

  function trimDecimals(num) {
    let str = num.toFixed(3);
    if (str.endsWith(`000`)) return num.toFixed(0);
    if (str.endsWith(`00`)) return num.toFixed(1);
    if (str.endsWith(`0`)) return num.toFixed(2);
    return str;
  }

  let first_total = trimDecimals(first_total_raw);
  let second_total = trimDecimals(second_total_raw);
  let diff = trimDecimals(diff_raw);
  
  if (first_total_raw < limits[1]) {
    pass.push("1st total = "+first_total+" <br>(Limit is 0.4)");
  } else {
    fail.push("1st total = "+first_total+" <br>(Limit is 0.4)");
  }

  if (second_total_raw < limits[1]) {
    pass.push("2nd total = "+second_total+" <br>(Limit is 0.4)");
  } else {
    fail.push("2nd total = "+second_total+" <br>(Limit is 0.4)");
  }

  if (diff_raw < limits[0]) {
    pass.push("Freeplay difference is "+diff+" <br>(Limit is 0.04)");
  } else {
    fail.push("Freeplay difference is "+diff+" <br>(Limit is 0.04)");
  }

  
  if (tail !== "") {
    let name = tail;
    let resultsHTML = "<h3 class='results underline'>Freeplay Results for " + name + "</h3>";
    resultsHTML += "<div class='results-container'>";
    resultsHTML += "<div class='results-column'>";
    resultsHTML += "<p class='pass'>Total Passed: " + pass.length + "</p>";
    for (let i = 0; i < pass.length; i++) {
      resultsHTML += "<p class='pass'>" + pass[i] +"</p>";
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