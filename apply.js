var person = {
    details: function(city,age){
        return `${this.firstName} ${this.lastName} ${city} ${age}`
    }
}
var person1 = {
    firstName: "Rakhav",
    lastName: "Pravin"
}
var x = person.details.apply(person1,["NLK",22]);
console.log(x) 
