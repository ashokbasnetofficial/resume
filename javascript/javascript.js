function showMessage() {
    var deviceWidth = window.innerWidth || document.documentElement.clientWidth;
    var container = document.querySelector('.container');
    var message = document.getElementById('message');
console.log(deviceWidth)
    if (deviceWidth < 950) {
      container.style.display = 'none';
      message.style.display = 'block';
    } else {
      container.style.display = 'flex';
      message.style.display = 'none';
    }
  }

  window.addEventListener('DOMContentLoaded', showMessage);
  window.addEventListener('resize', showMessage);
  window.addEventListener('keydown', function(event) {
    // Check if the arrow keys were pressed
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      showMessage();
    }
  });