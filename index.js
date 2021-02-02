let counter = document.getElementById('counter');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
resetBtn.disabled = true;
let timer;
let count = 0 ;

startBtn.addEventListener('click', () => {
    resetBtn.disabled = false
    if(timer){
        clearInterval(timer);
        startBtn.innerHTML = 'Start';
        timer = undefined;
        return;
    }
    if(!timer){
        startBtn.innerHTML = 'Pause';
        timer = setInterval(() => {
        count += 1;
        counter.innerText = count;
    }, 1000);
    }
});

stopBtn.addEventListener('click', () => {
    resetBtn.disabled = true;
    startBtn.innerHTML = 'Start';
    count = 0;
    counter.innerText = 0;
    clearInterval(timer);
    timer = undefined;
});

resetBtn.addEventListener('click', () => {
        startBtn.innerHTML = 'Pause';
        clearInterval(timer);
        count = 0;
        counter.innerText = count;
        timer = setInterval(() => {
            count += 1;
            counter.innerText = count;
        }, 1000);
});