function getDayAndTime() {
    let today = new Date();

    // Getting day
    let day = today.getDay();
    let dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

    // Getting time
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let pm_or_am = (hour >= 12 && hour < 24) ? 'PM' : 'AM';

    hour = (hour > 12) ? hour - 12 : hour;

    return (
`Today is: ${dayList[day]}.
Current time is: ${hour} ${pm_or_am} : ${minute} : ${second}`
    )
}

console.log(getDayAndTime());