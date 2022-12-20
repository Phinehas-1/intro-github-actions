"use strict";
const showTime = () => {
    let clock_container = document.getElementById('clock-container');
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = document.createTextNode(`${hours} : ${minutes} : ${seconds}`);
    clock_container === null || clock_container === void 0 ? void 0 : clock_container.appendChild(time);
};
showTime();
