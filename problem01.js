// inch to feet converter function
function personHeight(inch) {
    const feet = inch / 12 ;
    const feetInt = parseInt(feet)
    const inchRemending = inch % 12 ;
    const height = "Height " + feetInt + " ft " + inchRemending + " Inch"
    return height ;

}

let arafatHeight = personHeight(68);
console.log(arafatHeight);


function kiloTomiles(kilo) {
    const mile = kilo * 0.621371 ;
    return mile.toFixed(4) ;
}

let kTmConverter = kiloTomiles(47)
console.log(kTmConverter) ;