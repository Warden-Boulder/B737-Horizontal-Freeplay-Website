function checkValue(name, value, threshold) {
  const resultContainer = document.getElementById('result-container');
  if (value === 0) {
    resultContainer.innerHTML += `<p>Recheck: ${name} = 0</p>`;
  } 
  else if (value > threshold) {
    resultContainer.innerHTML += `<p>Failed: ${name} = ${value.toFixed(4)}</p>`;
  }
  else {
    resultContainer.innerHTML += `<p>Passed: ${name} = ${value.toFixed(4)}</p>`;
  }
}

function checkValue2(name, value, threshold) {
  const resultContainer = document.getElementById('result-container');
  if (value === 0) {
    resultContainer.innerHTML += `<p>Recheck: ${name} = 0</p>`;
  } else if (value > threshold) {
    resultContainer.innerHTML += `<p>Failed: ${name} = ${value.toFixed(4)}</p>`;
  } else {
    resultContainer.innerHTML += `<p>Passed: ${name} = ${value.toFixed(4)}</p>`;
  }
}

function negativeCheck(value) {
  return Math.max(0, value);
}

// Function to toggle buttons based on selection
function toggleButtons() {
  const aircraftType = document.getElementById("aircraftType").value;
  const ngButton = document.querySelector('button[onclick="calculateNG()"]');
  const maxButton = document.querySelector('button[onclick="calculateMax()"]');
  const weightInput = document.getElementById("Weight");
  
  if (aircraftType === "NG") {
    ngButton.disabled = false;
    maxButton.disabled = true;
    weightInput.disabled = true;
    weightInput.value = "";
  } else if (aircraftType === "Max") {
    ngButton.disabled = true;
    maxButton.disabled = false;
    weightInput.disabled = false;
  } else {
    ngButton.disabled = true;
    maxButton.disabled = true;
    weightInput.disabled = true;
    weightInput.value = "";
  }
}

function calculateNG() {
  const D1 = parseFloat(document.getElementById("D1").value);
  const D2 = parseFloat(document.getElementById("D2").value);
  const D3 = parseFloat(document.getElementById("D3").value);
  
  document.getElementById('result-container').innerHTML = '';
  const H = (1.25 * D3) + ((D1 + D2) / 2);
  
  checkValue("D1", D1, 0.066);
  checkValue("D2", D2, 0.066);
  checkValue("D3", D3, 0.056);
  checkValue("H", H, 0.078);
}

function calculateMax() {
  const D1 = parseFloat(document.getElementById("D1").value);
  const D2 = parseFloat(document.getElementById("D2").value);
  const D3 = parseFloat(document.getElementById("D3").value);
  const Weight = parseFloat(document.getElementById("Weight").value);
  
  if (!Weight) {
    alert("Please enter weight for Max calculation");
    return;
  }
  
  document.getElementById('result-container').innerHTML = '';
  
  const X = negativeCheck(D1 - (Weight * 0.0000155));
  const Y = negativeCheck(D2 - (Weight * 0.0000155));
  const Z = negativeCheck((D3 * 1.25) - (Weight * 0.0000318));
  const H = Z + ((X + Y) / 2);

  checkValue("X", X, 0.060);
  checkValue("Y", Y, 0.060);
  checkValue("Z", Z, 0.050);
  checkValue2("H", H, 0.051);
}
