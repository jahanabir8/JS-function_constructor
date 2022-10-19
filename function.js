// javascript function constructor
var Person = function(Pname, Page, Pjob){
    this.name = Pname,
    this.age = Page,
    this.job = Pjob
}

var Abir = new Person('Abir Islam Anupom', 22, 'Student')
console.log(Abir)
var Sabbir = new Person('Sabbir Mayem', 24, 'BusinessMan')


// another
function DAD(name, age){
    this.name = name,
    this.age = age,
    this.dob = function(){
        console.log(this.name + ' born in ' + (2022 - this.age))
    }
}

var Jahan = new DAD('Jahan', 23)
console.log(Jahan)
Jahan.dob()

// another one
function boy(name, dob){
    this.name = name,
    this.dob = dob,
    this.age= function(currentYear){
        console.log(this.name + ' is ' +  (currentYear - dob) + ' years old!')
    }
}

var SmartBoy = new boy('Abir Islam Anupom', 1999)
console.log(SmartBoy)
SmartBoy.age(2022)