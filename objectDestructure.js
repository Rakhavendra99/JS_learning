const hero = {
    name: 'Rakhav',
    age: 22,
    city: "Nilakottai",
    address:{
        street:"krishna Ayyar st",
        DoorNo: "13-5"
    }
};
const {name,city}=hero
const {company = ['proglint']}= hero
const {city:NLK} = hero
const {address:{DoorNo}}= hero
console.log(city);
console.log(company)
console.log(NLK);
console.log(DoorNo)