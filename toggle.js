function toggle737() {
  const aircraftType = document.getElementById("aircraftType").value;
  const weightInput = document.getElementById("Weight");
  
  if (aircraftType === "NG") {
    weightInput.disabled = true;
    weightInput.value = "";
  } else if (aircraftType === "Max") {
    weightInput.disabled = false;
  }
}