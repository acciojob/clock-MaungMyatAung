//your JS code here. If required.
function updateTime() {
  const timer = document.getElementById('timer');
  const now = new Date();
  timer.textContent = now.toLocaleString();
}

// Run immediately and every second
updateTime();
setInterval(updateTime, 1000);
