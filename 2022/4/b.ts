const dataAsString = await Deno.readTextFile("./data.txt")
// With test data 4 matches
// With actual data 835 matches

// Formatting input data into more usable format
const dataAsStrArray = dataAsString.split("\n").map(str => str.split(","));
const dataAsNumberArray = dataAsStrArray.map(str => str.map(numberCombination => numberCombination.split("-").map(str => Number(str))))
let counter = 0;

// Task logic
console.log(dataAsNumberArray)
dataAsNumberArray.forEach(grp => {
    // grp comes in format [ [1, 2], [4, 5] ]
    const sectionStartA = grp[0][0];
    const sectionEndA = grp[0][1];
    const sectionStartB = grp[1][0];
    const sectionEndB = grp[1][1];

    // oneway check
    if (isGivenNrInNumberArea(sectionStartA, sectionStartB, sectionEndB )){
        counter += 1
        return;
    }
    // second way check
    else if (isGivenNrInNumberArea(sectionStartB, sectionStartA, sectionEndA )){
        counter += 1
        return;
    }
})

function isGivenNrInNumberArea(num : number, areaStart : number, areaEnd : number): boolean{
    return areaStart <= num && areaEnd >= num;
}

console.log({counter})