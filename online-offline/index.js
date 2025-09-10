let statusDot =
  document.getElementById("connection-dot"); /* 'online' or 'offline' */
let statusText =
  document.getElementById("status-text"); /* 'Online' / 'Offline' */
let statusDetail =
  document.getElementById(
    "status-detail"
  ); /* 'Active now' / 'Last seen 5m ago' */
const lastSeen = document.getElementById("last-seen");

function setOnline() {
  statusDot.classList.remove("offline");
  statusDot.classList.add("online");
  statusText.textContent = "online";
  statusDetail.textContent = "Active Now";
  lastSeen.textContent = "";
}
function setOffline() {
  statusDot.classList.remove("online");
  statusDot.classList.add("offline");
  statusText.textContent = "offline";
  statusDetail.textContent = "You appeared to be offline.";
  lastSeen.textContent = `Last seen ${new Date().toLocaleTimeString()}`;
}

if (navigator.onLine) {
  setOnline();
} else {
  setOffline();
}

window.addEventListener("online", setOnline);
Window.addEventListener("offline", setOffline)
