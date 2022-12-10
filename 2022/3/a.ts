const data = await Deno.readTextFile("./data.txt")
// deno run --allow-read a.ts

// Point system setup
const alphabet: string[] = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ")
const pointArray : string[] = [...alphabet.map(letter => (letter.toLowerCase())), ...alphabet]

// input data formatting
const inputAsSingleString: string = (data.split("\n\n"))[0];
const inputAsArray: string[] = inputAsSingleString.split("\n")
let sum : number = 0;

// Task logic
inputAsArray.forEach((str) => {
    const firstHalf = [...str.slice(0, str.length / 2)]
    const secondHalf = [...str.slice(str.length / 2, str.length)]
    const uniqueValues = firstHalf.find(value => secondHalf.includes(value));
    sum += getCharPoint(uniqueValues);
})

// Helper function
function getCharPoint(char: string | undefined):number{
    if (char === undefined ) return 0;
    return pointArray.indexOf(char) +1
}

console.log({sum})