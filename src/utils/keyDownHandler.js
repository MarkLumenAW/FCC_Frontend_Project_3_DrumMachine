export default function keyDownHandler(event) {
  let button;
  switch (event.key.toUpperCase()) {
    case 'Q':
      button = document.getElementById('keyQ');
      if (button) {
        button.click();
      }
      break;
    case 'W':
      button = document.getElementById('keyW');
      if (button) {
        button.click();
      }
      break;
    case 'E':
      button = document.getElementById('keyE');
      if (button) {
        button.click();
      }
      break;
    case 'A':
      button = document.getElementById('keyA');
      if (button) {
        button.click();
      }
      break;
    case 'S':
      button = document.getElementById('keyS');
      if (button) {
        button.click();
      }
      break;
    case 'D':
      button = document.getElementById('keyD');
      if (button) {
        button.click();
      }
      break;
    case 'Z':
      button = document.getElementById('keyZ');
      if (button) {
        button.click();
      }
      break;
    case 'X':
      button = document.getElementById('keyX');
      if (button) {
        button.click();
      }
      break;
    case 'C':
      button = document.getElementById('keyC');
      if (button) {
        button.click();
      }
      break;
  }
}