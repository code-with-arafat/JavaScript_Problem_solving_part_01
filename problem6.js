//Find Top Scorer in the class room
const shihab = 25;
const rimon = 85;
const emon = 89;

if(shihab > rimon && shihab > emon){
    console.log("Shihab is a Top Scorer. Score: ",shihab)
}else if(rimon > shihab && rimon > emon){
    console.log("Remon is a Top Scorer. Score: ",rimon)

}else console.log("Emon is a Top Scorer. Score: ",emon)

//Same Program inside a Function
function topScorer(rohim,korim,solim){
    if(rohim > korim && rohim > solim){
        return ("Rohim is a Top Scorer. Score: "+rohim)
    }else if(korim > rohim && korim > solim){
        return ("Korim is a Top Scorer. Score: "+korim)

    }else return ("Solim is a Top Scorer. Score: "+solim)
}

const topScore = topScorer(98,98.2,97.9)
const topScore2 = topScorer(98,98.2,99.9)
const topScore3 = topScorer(98.8,98.2,97.9)

console.log(topScore);
console.log(topScore2);
console.log(topScore3);

//Using built-in Math Object
const maxNum = Math.max(98,93,98.3,98.5,90,89,92)
console.log("Math.max: ",maxNum);