// Get necessary data & type definition setup
const syntaxMap = new Map<string, PlayerChoice>();
type PlayerChoice = "scissor" | "rock" | "paper"
type RoundOutcome = "win" | "draw" | "loss"
syntaxMap.set("A", "rock").set("B", "paper").set("C", "scissor").set("X", "rock").set("Y", "paper").set("Z", "scissor");
const outcomePoints = new Map<RoundOutcome, number>().set("win", 6).set("draw", 3).set("loss", 0)
const choicePoints = new Map<PlayerChoice, number>().set("rock", 1).set("paper", 2).set("scissor", 3)
const winConditions = new Map<PlayerChoice, PlayerChoice>().set("paper", "rock").set("scissor", "paper").set("rock", "scissor");

const data = await Deno.readTextFile("./data.txt")

const groupedStrings: string[][] = data.split("\n").map(rounds => rounds.split(" ") )


let tournamentResult: number = 0
groupedStrings.forEach((round, index) => {
    if(round.length === 2){
        const aiChoice = syntaxMap.get(round[0]);
        const playerChoice = syntaxMap.get(round[1]);
        if (aiChoice === undefined || playerChoice === undefined) return;
        const result =  getRoundResult(aiChoice, playerChoice);
        const roundPoints = getRoundPoints(playerChoice, result);
        console.log(`Round ${index} ${aiChoice} and ${playerChoice} : ${result} : ${roundPoints} `)
        tournamentResult += roundPoints;
    }
})

console.log(`TournamentResult: ${tournamentResult}`)


function getRoundResult(first : PlayerChoice, second: PlayerChoice) : RoundOutcome{
    if (first === second) return "draw"
    const result = winConditions.get(first);
    if (result === undefined || result == second) return "loss"
    return "win"
}
function getRoundPoints(playerChoice: PlayerChoice, result: RoundOutcome){
    const choicePoint =  choicePoints.get(playerChoice)
    const outcomePoint =  outcomePoints.get(result)
    if (choicePoint === undefined || outcomePoint === undefined) return 0;
    return choicePoint + outcomePoint;
}


