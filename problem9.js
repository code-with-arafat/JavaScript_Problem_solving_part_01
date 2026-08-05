//find the cheapest phone from the phones object
const phones = [
    {name:"Iphone 14pro Max",category:"smartphone",price:128000},
    {name:"Redme Note 10",category:"smartphone",price:26000},
    {name:"Vivo y30",category:"smartphone",price:16000},
    {name:"itel",category:"smartphone",price:12000},
    {name:"Nokia",category:"smartphone",price:8000}
]

function cheapestPhone(phones){
    let minPrice = phones[0]
    for(const phone of phones){
        if(phone.price < minPrice.price){
            minPrice = phone
        }
    }
    return minPrice
}

const lowestPricePhone = cheapestPhone(phones)
console.log(`Lowest Price Phone Nane Is: ${lowestPricePhone.name} Price: ${lowestPricePhone.price} `)