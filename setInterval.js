var Interval;
function action(){
    Interval = setInterval(print,5000);
}
function print(){
    console.log("Welcome")
    stopTime();
}
action();

var time = setInterval(myTime,1000);
function myTime(){
    var d = new Date();
    var t = d.toLocaleTimeString();
    console.log(t);
}
function stopTime(){
    clearInterval(time);
}