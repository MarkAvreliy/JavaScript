//let i = 0;

/*while (i<3){
    console.log(i)
    i++;
}*/

/*do {
    console.log(i)
    i++;
} while (i<3);*/

/*for (let i = 0; i<3; i++){
    console.log(i);
}*/

/*endless: for (;;){

}*/

/*
let arr = [];
let mass = new Array(7);
console.log(arr);
console.log(mass);
mass[4] = 5;
mass[10] = 11;
console.log(arr);
console.log(mass);*/

/*
let arr = [
    [1,2,3,4],
    ['a','b','c','d'],
    ['q','w','e','r'],
]
console.log(arr);
console.log(arr[1][3]);
console.log(JSON.stringify(arr,null, 4));*/

// let arr = ['q',2,'e',4,'t',6];
/*for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}*/
/*for (const index in arr){
    console.log(arr[index]);
}*/
/*for (const value of arr){
    console.log(value);
}*/
/*
arr.forEach(function (value, index, array) {
    console.log('value:', value);
    console.log('index:', index);
    console.log('array:',array);
});*/
//indexOf(), find(), some(), map(), filter(), includes(), reduce()
let arr = ['q',2,'e',4,'t',6];
// console.log(arr.push('end'), arr);
// console.log(arr.unshift('begin'), arr);
// console.log(arr.pop(), arr); //delete last element
// console.log(arr.shift(), arr); //delete first element
// console.log(arr.splice(1,1), arr); //delete inside
// console.log(arr.splice(1,1, 'asdf'), arr); //replace inside
// console.log(arr.splice(1,0, 'asdf'), arr); //insert inside
let copy = Array.from(arr); //deepless array copy
let truecopy = JSON.parse(JSON.stringify(arr)); //deep array copy
copy.pop();
console.log(arr,copy,truecopy);

const goods = [
    ['name', 0, 0.0],
    ['name', 0, 0.0],
    ['name', 0, 0.0],
    ['name', 0, 0.0],
    ['name', 0, 0.0]
]