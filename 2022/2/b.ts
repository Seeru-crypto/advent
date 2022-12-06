// Get necessary data & type definition setup
const syntaxMap = new Map<string, PlayerChoice>();
const possbileResults = new Map<string, RoundOutcome>();
type PlayerChoice = "scissor" | "rock" | "paper"
type RoundOutcome = "win" | "draw" | "loss"
syntaxMap.set("A", "rock").set("B", "paper").set("C", "scissor");
possbileResults.set("X", "loss").set("Y", "draw").set("Z", "win");

const outcomePoints = new Map<RoundOutcome, number>().set("win", 6).set("draw", 3).set("loss", 0)
const choicePoints = new Map<PlayerChoice, number>().set("rock", 1).set("paper", 2).set("scissor", 3)
const winConditions = new Map<PlayerChoice, PlayerChoice>().set("paper", "rock").set("scissor", "paper").set("rock", "scissor");

const data = await Deno.readTextFile("./data.txt")

const groupedStrings: string[][] = data.split("\n").map(rounds => rounds.split(" ") )


let tournamentResult: number = 0
groupedStrings.forEach((round, index) => {
    if(round.length === 2){
        const aiChoice = syntaxMap.get(round[0]);
        const roundResult = possbileResults.get(round[1])

        if (aiChoice === undefined || roundResult === undefined) return;
        const playerChoice = getPlayerChoice(aiChoice, roundResult);

        const roundPoints = getRoundPoints(playerChoice, roundResult);
        tournamentResult += roundPoints;
    }
})


function getPlayerChoice(aiChoice : PlayerChoice, roundResult: RoundOutcome) : PlayerChoice{
    if (roundResult === "draw") return aiChoice;
    else if (roundResult === "loss") {
        const playerChoice = winConditions.get(aiChoice);
        if (playerChoice !== undefined) return playerChoice
    }

    let result: PlayerChoice = "scissor";
    for (const [key , value] of winConditions) {
        if (aiChoice === value) {
            result = key as PlayerChoice;
        }
    }
    return result
}

function getRoundPoints(playerChoice: PlayerChoice, result: RoundOutcome){
    const choicePoint =  choicePoints.get(playerChoice)
    const outcomePoint =  outcomePoints.get(result)
    if (choicePoint === undefined || outcomePoint === undefined) return 0;
    return choicePoint + outcomePoint;
}

console.log({tournamentResult})


// Example of a another solution
// https://github.com/t3dotgg/aoc-2022/blob/main/2/a.ts



// Test data is
// ROCK - DRAW --> ROCK
// PAPER - LOSS --> ROCK
// SCI - WIN  -->