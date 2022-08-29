console.log('=============================');
console.log('Lesson #3. Home work. Task #1');
console.log('=============================');

let numbers = [];
//let i = 0; Просто́е число́ — натуральное число, имеющее ровно два различных натуральных делителя.
// => initial number must be 2. =>
let i = 2;
let max = 100;

//two options below. I like the second one, it's smarter =) .

// while (i<=max){
//     if (i===2 || i===3 || i===5 || i===7) {
//         numbers.push(" " + i);
//         i++;
//         continue;
//     } else if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
//         i++;
//         continue;
//     }
//     numbers.push(" " + i++);
// }

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
        console.log(i, count);
        numbers.push(" " + i++);
        count = 0;
    }
}
console.log('array', numbers);

