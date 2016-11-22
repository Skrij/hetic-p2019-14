var currentdate = new Date();
var hour = currentdate.getHours();
var min = currentdate.getMinutes();
var sec = currentdate.getSeconds();
var date_even = new Date(2017, 5, 26, hour, min, sec); //janv =0 > decemb =11
var date1=currentdate.getTime();
var date2=date_even.getTime();
var nbdays= date2-date1;
nbdays= Math.round((Math.round(nbdays)/1000)/60/60/24-1);
var txtj = nbdays.toString();
document.querySelector(".intro__datelimit").textContent = "J -  "+txtj;
