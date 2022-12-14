const dataAsString = await Deno.readTextFile("./data.txt")
// With test data 2 matches
// With actual data 462 matches

// Formatting input data into more usable format
const dataAsStrArray = dataAsString.split("\n").map(str => str.split(","));
const dataAsNumberArray = dataAsStrArray.map(str => str.map(numberCombination => numberCombination.split("-").map(str => Number(str))))
let counter = 0;

// Task logic
console.log(dataAsNumberArray)
dataAsNumberArray.forEach(grp => {
    // oneway check
    if (grp[0][0] <= grp[1][0] && grp[0][1] >= grp[1][1]){
        console.log("first if: ", grp)
        counter += 1
        return;
    }
    // second way check
    else if (grp[0][0] >= grp[1][0] && grp[0][1] <= grp[1][1]){
        console.log("second if: ", grp)
        counter += 1
        return;
    }
})

console.log({counter})