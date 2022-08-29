console.log('====================================');
console.log('Start: Lesson #3. Home work. Task #1');
console.log('====================================');


//let i = 0; Просто́е число́ — натуральное число, имеющее ровно два различных натуральных делителя.
// => initial number must be 2.

//two options below. I like the second one, it's smarter =) .

//first
// let numbers = [2, 3, 5, 7];
// let i = 8;
// let max = 100;
//
// while (i<=max){
//     if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
//         i++;
//         continue;
//     }
//     numbers.push(i++);
// }
// console.log('Final array', numbers);

//second. Универсальный.
let numbers = [];
let i = 2;
let max = 100;
//В этом варианте вводим счетчик количества делителей. Оставляем только те, где делителей 2.
let count = 0;
while (i<=max){
    for (let j=1; j<=max; j++) {
        if (i % j === 0) {
            count++;
        }
    }
    if (count>2){
        i++;
        count = 0;
    } else {
        console.log(i, count); //for debugging. Value, dividers number (must be 2).
        numbers.push(+ i++);
        count = 0;
    }
}
console.log('Final array', numbers);

console.log('==================================');
console.log('End: Lesson #3. Home work. Task #1');
console.log('==================================');