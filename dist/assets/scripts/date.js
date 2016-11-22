currentdate = new Date();
hour = currentdate.getHours();
min = currentdate.getMinutes();
sec = currentdate.getSeconds();
date_even = new Date(2017, 5, 26, hour, min, sec); //janv =0 > decemb =11
date1=currentdate.getTime();
date2=date_even.getTime();
nbrej= date2-date1;
nbrej= Math.round((Math.round(nbrej)/1000)/60/60/24-1);
txtj = nbrej.toString();
document.querySelector(".intro__datelimit").textContent = "J -  "+txtj;
