
const hourE1 = document.getElementById("hour");
const minE1 = document.getElementById("minutes");
const secE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function clock(){

    let hr = new Date().getHours()
    let min = new Date().getMinutes()
    let sec = new Date().getSeconds()
    let ampm = "AM"

    if( hr > 12){
        hr = hr-12
        ampm = "PM"
    }

    hr = hr<10 ? "0" + hr : hr
    min = min<10 ? "0" + min : min
    sec = sec<10 ? "0" + sec : sec
    
    hourE1.innerHTML = hr;
    minE1.innerHTML = min;
    secE1.innerHTML = sec;
    setTimeout(clock, 1000);
}

clock();