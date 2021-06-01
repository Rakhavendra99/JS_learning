let bigArray = ['wow','javascript',5,6,'7',true,{title:"program"},21];

const [,language,,,,,var7] = bigArray;
console.log(language,var7)

let deepArr = ["welcome","to",["class","school","office"],"data"];
const [,,total]=deepArr;
const [a,,c] = total;
console.log(a,c);