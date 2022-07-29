function clock(){
    
    var date = new Date()
    // console.log(date)
    var day = date.getDay()
    // console.log(day)
    var month = date.getMonth();
    // console.log(month)
    var year = date.getFullYear();
    // console.log(year)
    document.querySelector("#year").innerText = year;

    
    var weekDays = ["sun","mon","tue","wed","thurs","fri","sat"]
    for(var i=0;i<=weekDays.length-1;i++){
        // console.log(weekDays[i])
        if(day === i){
            // console.log(weekDays[i])
            document.getElementById("tareekh").innerText = weekDays[i] + "/"
        }
    }
    
    var monthsArr = ["jan","feb","march","april","may","jun","july","aug","sep","oct","nov","dec"]
    for(var j=0;j<=monthsArr.length-1;j++){
        // console.log(monthsArr[i])
        if(month===j){
            // console.log(monthsArr[i])
            document.getElementById("month").innerText = monthsArr[j]  + "/"
        }
    }

    

    
    var hours = date.getHours()
    
    if(hours>12){
        hours = hours - 12;
        ampm = "pm"
        console.log(hours + ampm)
    }
    else{
        hours = hours;
        ampm = "am"
    }
    
    document.getElementById("hours").innerText = hours  + ":";
    var minutes = date.getMinutes()
    document.getElementById("minutes").innerText = minutes + ":";
    var seconds = date.getSeconds()
    document.getElementById("sec").innerText = seconds;


    

    var ampm;
    document.getElementById("ampm").innerText = ampm
}

setInterval(clock,1000)    
// clock()