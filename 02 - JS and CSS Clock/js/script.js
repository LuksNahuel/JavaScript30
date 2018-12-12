const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate () {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minutesDegrees}deg)`;
    
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
    function checkGlitch(ele, deg) {
        if (deg === 90) {
            ele.style.transition = 'none';
        };
    }
    checkGlitch(secondHand, secondsDegrees);
    checkGlitch(minsHand, minutesDegrees);
    checkGlitch(hourHand, hoursDegrees);
}
setInterval(setDate, 1000);
setDate(); 
