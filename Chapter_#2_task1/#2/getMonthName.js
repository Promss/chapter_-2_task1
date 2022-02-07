function getMonthName(date) {
    let monthList = [ "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December" ];
    date = new Date(date);
    return monthList[date.getMonth()];
}

console.log(getMonthName("10/11/2009"));
console.log(getMonthName("12/13/2014"));