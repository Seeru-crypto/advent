const data = await Deno.readTextFile("./data.txt")
//const data = await Deno.readTextFile("./data.test.txt")

const groupedStrings: string[]= (data.split("\n\n"));

const numberArray : number[][] = groupedStrings.map(grp => grp.split("\n").map(number => Number(number)))
console.log(numberArray)


let elveIndex : number = 0;
let elveCalorieSum : number = 0;

numberArray.forEach((elve, index) => {
    const elveCalories = elve.reduce((a, b) => a + b);
    if (elveCalories >= elveCalorieSum) {
        elveCalorieSum = elveCalories;
        elveIndex = index
    }
})

console.log("elveCalorieSum ", elveCalorieSum)
console.log("elveIndex ", elveIndex + 1)

// Another solution https://github.com/t3dotgg/aoc-2022/blob/main/1/a.ts