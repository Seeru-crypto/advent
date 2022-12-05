const data = await Deno.readTextFile("./data.txt")

const groupedStrings = data.split("\n\n")

const arr = groupedStrings.map(index => index.split(" ").map(num => Number(num)));

let elveIndex : number = 0;
let elveCalorieSum : number = 0;

arr.forEach((elve, index) => {
    const elveCalories = elve.reduce((a, b) => a + b);
    if (elveCalories > elveCalorieSum) {
        elveCalorieSum = elveCalories;
        elveIndex = index
    }
})

console.log("elveCalorieSum ", elveCalorieSum)
console.log("elveIndex ", elveIndex + 1)