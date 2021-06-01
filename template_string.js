//Multi-line string
console.log('string text line 1\n'+
'string text line 2');
console.log(`string text line 1 
string text line 2`);

//Expression interpolation
let a = 5;
let b = 10;
console.log('fifteen is '+(a+b)+' and \nnot ' +(2*a+b)+',');
console.log(`fifteen is ${a+b} and 
not ${2*a+b}.`);

//tagged template
let person = "Mike";
let age = 28;

function myTag(strings,personExp,ageExp){
    let str0 = strings[0];
    let str1 = strings[1];
    let str2 = strings[2];

    let ageStr;
    if(ageExp > 30){
        ageStr = 'centenarian';
    }else{
        ageStr = 'youngster';
    }
    return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${person} is a ${age}.`;
console.log(output)