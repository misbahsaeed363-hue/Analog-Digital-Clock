// -----ANALOG CLOCK----
let hr = document.querySelector(".hour.hand");
let min = document.querySelector(".minute.hand");
let sec = document.querySelector(".second.hand");

// -----DIGITAL CLOCK----
let hrBox = document.querySelector(".hr.box");
let minBox = document.querySelector(".min.box");
let secBox = document.querySelector(".sec.box");

let pad = (num) => {
    return num.toString().padStart(2, "0");
}

// -----ANALOG CLOCK----
let setClock = () => {
    let now = new Date();
    let hour = now.getHours() % 12;
    let minutes = now.getMinutes();
    let second = now.getSeconds();

    let hrDeg = hour * 30 + 0.5 * minutes;
    let minDeg = 6 * minutes;
    let secDeg = 6 * second;

    hr.style.transform = `rotate(${hrDeg}deg)`;
    min.style.transform = `rotate(${minDeg}deg)`;
    sec.style.transform = `rotate(${secDeg}deg)`;

    // -----DIGITAL CLOCK----
    hrBox.textContent = `${pad(hour)}`;
    minBox.textContent = `${pad(minutes)}`;
    secBox.textContent = `${pad(second)}`;

}
setClock();
setInterval(setClock, 1000);


