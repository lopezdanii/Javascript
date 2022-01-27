//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

let now=new Date()

let year=now.getFullYear()
let month=parseInt(now.getMonth())+1
month <10
?  month='0'+month
: month=month

let hour=parseInt(now.getHours())

hour<10
? hour= '0'+hour
:hour=hour

let day=parseInt(now.getDate())

day <10
? day='0'+day
: day=day
let minutes=parseInt(now.getMinutes())
minutes <10
? minutes='0' + minutes
: minutes=minutes
console.log(`${year}-${month}-${day} ${hour}:${minutes}`)
