const data = await Deno.readTextFile("./data.txt")
// const data = await Deno.readTextFile("./data.test.txt")

const groupedStrings: string[]= (data.split("\n\n"));

const numberArray : number[][] = groupedStrings.map(grp => grp.split("\n").map(number => Number(number)))

const allCaloriesCarried : number[] = numberArray.map((elve, index) => elve.reduce((a, b) => a + b))

allCaloriesCarried.sort((a, b) => b - a);
//get top 3 and return their sum...
const sum = allCaloriesCarried[0] + allCaloriesCarried[1] + allCaloriesCarried[2]

console.log(sum)

// Another solution https://github.com/t3dotgg/aoc-2022/blob/main/1/a.ts