function convertTorque() {
  const inputValue = parseFloat(document.getElementById('torqueInput').value);
  const unit = document.getElementById('torqueUnit').value;

  let resultsHTML = "";
  let footPounds = 0;
  let inchPounds = 0;
  let newtonMeters = 0;

  if (unit === "foot") {
    inchPounds = inputValue * 12;
    newtonMeters = inputValue * 1.356;
    resultsHTML = "<h4 class='results underline'>Results</h4><br>";
    resultsHTML += "<p>"+inchPounds.toFixed(2)+" inch pounds</p>";
    resultsHTML += "<p>"+newtonMeters.toFixed(2)+" newton meters</p>";
    document.getElementById('torqueResults').innerHTML = resultsHTML;
  } else if (unit === "inch") {
    footPounds = inputValue / 12;
    newtonMeters = inputValue * 0.113;
    resultsHTML = "<h4 class='results underline'>Results</h4><br>";
    resultsHTML += "<p>"+footPounds.toFixed(2)+" foot pounds</p>";
    resultsHTML += "<p>"+newtonMeters.toFixed(2)+" newton meters</p>";
    document.getElementById('torqueResults').innerHTML = resultsHTML;
  } else if (unit === "newton") {
    footPounds = inputValue / 1.356;
    inchPounds = inputValue / 0.113;
    resultsHTML = "<h4 class='results underline'>Results</h4><br>";
    resultsHTML += "<p>"+footPounds.toFixed(2)+" foot pounds</p>";
    resultsHTML += "<p>"+newtonMeters.toFixed(2)+" inch pounds</p>";
    document.getElementById('torqueResults').innerHTML = resultsHTML;
  }
}