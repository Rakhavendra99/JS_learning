//for
var cars = ["BMW","Volvo","Ford","saab"];
var i =0, len, text,value;
for(len = cars.length,text = "";i<len;i++){
    text += cars[i] + "\n"
}
console.log(text,"--for Loop")

//while
while (cars[i]) {
    text += cars[i] + "\n";
    i++;
  }
console.log(text,"--while loop")

//If
var greeting;
var time = new Date().getHours();
if(time <10){
    greeting = "Good Morning"
}else if(time <20){
    greeting = "Good Day"
}else{
    greeting = "Good Evening"
}
console.log(greeting,"--if condition")

//Switch
var day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day,"--Switch condition")