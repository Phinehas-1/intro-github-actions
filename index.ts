
const showTime = () => {
    let clock_container = document.getElementById('clock-container');
    let date: Date = new Date();
    let hours: number = date.getHours();
    let minutes: number = date.getMinutes();
    let seconds: number = date.getSeconds();
    let time = document.createTextNode(`${hours} : ${minutes} : ${seconds}`);
    clock_container?.appendChild(time);
}

showTime();