const display = document.querySelector(".display")
const startBtn = document.querySelector(".startBtn")
const continueBtn = document.querySelector(".continueBtn")
const pauseBtn = document.querySelector(".pauseBtn")
const restartBtn = document.querySelector(".restartBtn")
const stopBtn = document.querySelector(".stopBtn")


let millisecond=0, second = 0, minute = 0, hour =0;

const startTime = () => {
    millisecond +=1;
    if (millisecond === 100){
        millisecond =0;
        second +=1;
        if (second === 60) {
            second =0;
            minute += 1;
            if(minute === 60) {
                minute =0;
                hour +=1;
            }
        }
    }
    const hourText = hour<10 ? "0" + hour.toString() : hour;
    const minuteText = minute<10 ? "0" + minute.toString() : minute;
    const secondText = second<10 ? "0" + second.toString() : second;
    const millisecondText = millisecond <10 ? "0" + millisecond.toString(): millisecond;
    display.textContent = hourText + ":" + minuteText + ":" + secondText + ":" + millisecondText;
}
    let intervalId;

startBtn.addEventListener("click", () => {
    intervalId = setInterval(startTime, 10)
})

pauseBtn.addEventListener("click", () => {
    clearInterval(intervalId);
})

continueBtn.addEventListener("click", () => {
    clearInterval(intervalId)
    intervalId = setInterval(startTime, 10)
})

restartBtn.addEventListener("click", () => {
    clearInterval(intervalId)
    hour =0; minute=0; second=0, millisecond=0;
    intervalId = setInterval(startTime, 10)
})

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId)
    hour =0; minute=0; second=0, millisecond=0;
    display.textContent = "00:00:00:00";
})
