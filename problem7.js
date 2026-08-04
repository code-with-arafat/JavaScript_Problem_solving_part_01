//Get Minimum Number in an array
const numbers = [60,62,65,70,58,78,55]
function getMin(number){
    let minNumber = number[0]
    for(num of number){
        if(num < min){
            minNumber = num
        }
    }
    return minNumber;
} 

const getMinimum = getMin(numbers);
console.log(getMinimum)