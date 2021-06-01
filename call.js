var person  = {
    firstName:"Rakhav",
    lastName:"pravin",
    fullName: function(city,pin){
        return `${this.firstName} ${this.lastName}  ${city} ${pin}`
    }
}
var x = person.fullName("Chennai","624208");
console.log(x);