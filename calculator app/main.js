let Display = document.getElementById('inputdisplay')
// Display.style.backgroundColor='white';

function addnum(value) {
  Display.value += value;
}

function allclear() {
  Display.value = "";
}

function totalnum() {
  try {
    Display.value = eval(Display.value)

  } catch {
    Display.value = ('Error')
  }
}
