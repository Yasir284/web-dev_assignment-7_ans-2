let hour = document.querySelector(".hour").querySelector("span");
let minute = document.querySelector(".minute").querySelector("span");
let second = document.querySelector(".second").querySelector("span");

window.addEventListener("load", function () {
  let date;
  this.setInterval(() => {
    date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour.innerText = hr < 10 ? "0" + hr : hr;
    minute.innerText = min < 10 ? "0" + min : min;
    second.innerText = sec < 10 ? "0" + sec : sec;
  }, 1000);
});
