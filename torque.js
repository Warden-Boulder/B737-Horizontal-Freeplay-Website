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
    resultsHTML += "<p>"+inchPounds.toFixed(2)+" inch pounds</p>";
    document.getElementById('torqueResults').innerHTML = resultsHTML;
  }
}
function calculateExtension() {
  const torque = parseFloat(document.getElementById('desire').value);
  const length = parseFloat(document.getElementById('length').value);
  const extension = parseFloat(document.getElementById('extension').value);
  const unit = document.getElementById('Unit').value

  let resultsHTML2 = "";
  let effective = extension+length;
  let setting = Math.ceil(torque*((length/effective)*2)/2);

  resultsHTML2 = "<p>Set your Torque Wrench to "+setting+" "+unit+"<p>";
  document.getElementById('extResults').innerHTML = resultsHTML2;
}
