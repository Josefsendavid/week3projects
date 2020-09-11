//A
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
console.log(boys[0]);

//B
//concat joiner 2 arrays
var all = boys.concat(girls);
console.log(all);

//C
console.log(all.join(","));
console.log(all.join("-"));

//D
console.log(all.push("Lone", "Gitte"), all);

//E
console.log(all.unshift("Hans", "Kurt"), all);

//F
all.shift();
console.log(all);

//G
all.pop();
console.log(all);

//H
all.splice(4, 1);
all.splice(3, 1);
console.log(all);

//I
console.log(all.reverse());

//J
console.log(all.sort());

//K
var mapped = all.map(function(el, i) {
    return {index: i, value: el.toLowerCase()};
})
mapped.sort(function(a, b) {
    if(a.value > b.value) {
        return 1;
    }
    if(a.value < b.value) {
        return -1;
    }
    return 0;
});
var result = mapped.map(function(el) {
    return console.log(all[el.index]);
});

//L
let allUpper = all.map(function(item) {
    return console.log(item.toUpperCase());
});

//M
function filterNames(arr) {
  return arr.filter(function(element) {
      return element.charAt(0) === 'L' || element.charAt(0) === 'l'
  })
}
console.log(filterNames(all))