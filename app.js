const hourEl = document.querySelector("#hour");
const minEl = document.querySelector("#min");
const secEl = document.querySelector("#sec");
const ampmEl = document.querySelector("#ampm");

function updateTime(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = "AM";

    if(hour>12){
        hour = hour-12;
        ampm = "PM";
    }
    hour = hour < 10 ? "0"+ hour: hour;
    min = min < 10 ? "0"+ min: min;
    sec = sec < 10 ? "0"+ sec: sec;
    
    hourEl.innerHTML = hour;
    minEl.innerHTML = min;
    secEl.innerHTML = sec;
    ampmEl.innerHTML = ampm;
    setTimeout(()=>{
        updateTime();
    },1000);
}  
updateTime();
