var names = ["Lars", "Jan", "Bo", "Frederik", "David"];

var under3 = names.filter(word => word.length <= 3);

console.log(under3);

names.forEach(function (name) {
    console.log(name)
})
under3.forEach(function (name) {
    console.log(name)
})

names = names.map(function (item) {
    return console.log(item.toUpperCase());
});

var array1 = ["Lars", "Jan", "Bo", "Frederik", "David"];
var li = array1.map(x => "<li>" + x + "</li>");
console.log(li);
console.log(li.join(""));

var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];
//A
console.log("Year over or equal to 1999:\n")
console.log(cars.filter(el => el.year >= 1999))

console.log("Maker Volvo:\n")
console.log(cars.filter(el => el.make === "Volvo"))

console.log("Under 5000:\n")
console.log(cars.filter(el => el.price < 5000))

