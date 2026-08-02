//Calculate the average of even numbers in an array
const numbers = [35, 26, 23, 45, 42, 53, 66, 67, 105, 107, 208]

function EvenAvg(numbers) {
    const evenNumbers = []
    for (const number of numbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number)

        }
    }
    
    //Sum of evenNumbers total index
    let sum = 0;
    for (const even of evenNumbers) {
        sum = sum + even
    }

    //logic for empty array
    if(evenNumbers.length === 0){
        return 0;
    }

    //calculate avg
    const indexCount = evenNumbers.length ;
    const avg = sum / indexCount;
    return avg;
}


const result = EvenAvg(numbers)
console.log(result);