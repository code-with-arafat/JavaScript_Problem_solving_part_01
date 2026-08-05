const shirtPrice = 300
const pantprice = 700
const shoePrice = 1200

function totalShoppingCost(shirtQuantity,pantQuantity,shoeQuantity){
    const shirt = shirtPrice * shirtQuantity
    const pant = pantprice * pantQuantity
    const shoe = shoePrice * shoeQuantity

    const totalCost = shirt + pant + shoe
    //discount Logic
    if(totalCost > 3000){
        const discount10 = totalCost * (10 / 100)
        const finalPrice = totalCost - discount10
        console.log(`Discount Applied:${discount10} Taka`)
        return finalPrice
    }else{
        console.log("If you need to get 10% discount then buy upto 3000 taka's product")
    }
    return totalCost;

}

const totalShoppingexpence = totalShoppingCost(0,1,1)
console.log(`Your Total Shopping Cost: ${totalShoppingexpence} Taka`); 

