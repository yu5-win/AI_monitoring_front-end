
function getTime(){
  var clock = document.getElementById('clock');
  
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() +1;
  const date = time.getDate();
  const hours = time.getHours();
  
  const ampm = hours >= 12 ? 'pm' : 'am';
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  
  clock.innerHTML = year+". "+ month+". " + date+" "+ ampm + " " + `${hours<10 ? `0${hours}` : hours}` + ":" + `${minutes<10 ? `0${minutes}` : minutes}` + ":" + `${seconds<10 ? `0${seconds}` : seconds}`;
}
function init(){
  setInterval(getTime, 1000);
}

init();