// Sets is kinda same as Array but its functions are pretty much easy to use.
let set = new Set();

let john = { name: "John" };
let peter = { name: "Peter" };
let manish = { name: "Manish" };

// visits, some users come multiple times
set.add(john);
set.add(peter);
set.add(manish);
set.add(john);
set.add(manish);

// set keeps only unique values
console.log(`The Size of Set is : ${set.size}`);
console.log("\t Displaying Data:");
for (let user of set) {
    console.log("\t-> "+user.name);
}