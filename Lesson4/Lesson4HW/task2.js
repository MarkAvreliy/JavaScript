console.log('===========================================');
console.log('Start: Lesson #4. Home work. Task #2 and #3');
console.log('===========================================');

let goods ={
    laptop: {
        price: 1500,
        quantity: 1
    },
    bag: {
        price: 115,
        quantity: 1
    },
    mouse: {
        price: 35,
        quantity: 1
    },
    sumPrice(){
        let sum = this.laptop.price*this.laptop.quantity + this.bag.price*this.bag.quantity;
        alert(`Cart price: ${sum}`);
        console.log(`Cart price: ${sum}`); //for console view
    }
}


goods.sumPrice();

console.log('=========================================');
console.log('End: Lesson #4. Home work. Task #2 and #3');
console.log('=========================================');