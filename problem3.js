//Remove duplicate element in an Array
const studentList = ["Arafat","Abir","Arian","Chadni","Khadija","Roja","Abir","Chadni","Arafat","Roja"]

function removeDuplicateArray(arr){
    const uniqueArray = []
    for(const uniqueElement of arr){
        //in JS includes method Checks if a specific element exists within an array
        if(uniqueArray.includes(uniqueElement) === false){
            uniqueArray.push(uniqueElement)
        }
    }

    return uniqueArray;
}

const result = removeDuplicateArray(studentList)
console.log(result);