console.log('====================================');
console.log('Start: Lesson #3. Home work. Task #2');
console.log('====================================');

function countBasketPrice() {
    let goodsCart = [
        ['laptop', 1, 1500],
        ['laptop cooler', 1, 15],
        ['plug filter', 1, 35],
        ['mouse', 1, 60]
    ];

    let sum = 0;
    let priceIndex = 2;
    for (let goodIndex in goodsCart) {
        sum += (goodsCart[goodIndex][priceIndex]);
    }
    alert(`Total goods price is ${sum} euro in a cart.`);
    //and for console
    console.log(`Total goods price ${sum} euro.`);
}
countBasketPrice();

console.log('==================================');
console.log('End: Lesson #3. Home work. Task #2');
console.log('==================================');