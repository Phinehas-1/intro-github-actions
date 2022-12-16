class Clock {
    clock_container = document.getElementById('clock-container');
    date: Date = new Date();
    showTime() {
        let hours: number = this.date.getHours();
        let minutes: number = this.date.getMinutes();
        let seconds: number = this.date.getSeconds();
        let time = document.createTextNode(`${hours} : ${minutes} : ${seconds}`);
        this.clock_container?.appendChild(time);
    }
}