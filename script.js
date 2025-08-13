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
