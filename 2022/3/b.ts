const data = await Deno.readTextFile("./data.test.txt")
// deno run --allow-read a.ts

// Point system setup
const alphabet: string[] = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ")
const pointArray : string[] = [...alphabet.map(letter => (letter.toLowerCase())), ...alphabet]

// input data formatting
const inputAsSingleString: string = (data.split("\n\n"))[0];
const inputAsArray: string[] = inputAsSingleString.split("\n")
let sum : number = 0;

// task logic
for (let index = 0; index < inputAsArray.length;){
    const firstBag = [...inputAsArray[index]];
    const secondBag = [...inputAsArray[index+1]];
    const thirdBag = [...inputAsArray[index+2]];

    const firstSecondValues : string[] = firstBag.filter(value => secondBag.includes(value));
    const uniqueValues = firstSecondValues.find(value => thirdBag.includes(value))
    sum += getCharPoint(uniqueValues);
    index += 3;
}

// Helper function
function getCharPoint(char: string | undefined):number{
    if (char === undefined) return 0;
    return pointArray.indexOf(char) +1
}

console.log({sum})