const obj = {};
const myCar = {
    manufacture: 'vaz',
    color: 'red',
    ['my prop']: 123,
    [somePropFunc('newStringProp')]: '098',
    engine: {
        power: 190,
        ID: 'XXXX'
    },
    possibleColors: ['black', 'red', 'blue', 'white'],
    // beep: function () {
    //     console.log('Beeeep!')
    // }
    beep(repeat) {
        console.log(`Beeeep! ` + repeat);
    },
    [Symbol.iterator]: function* () {
        for (const prop in this) {
            yield this[prop];
        }
    }
};

function somePropFunc(someProp) {
    return 'new func prop' + someProp;
}
myCar.test='test value';
console.log(myCar);
console.log(myCar.color);
console.log(myCar['my prop']);
console.log(myCar[somePropFunc('newStringProp')]);

console.log('======');
delete myCar.color;
console.log(myCar);
console.log(myCar.color);

myCar.beep(3);

myCar.possibleColors.forEach((color) => {
    console.log(color);
})

console.log('------forEach-------');
const keys = Object.keys(myCar);
console.log(keys);
keys.forEach((key) => {
    console.log(myCar[key]);
})

console.log('------in-------');
for (const prop in myCar) {
    console.log(myCar[prop]);
}

console.log('-----of--------');
for (const value of myCar) {
    console.log(value);
}

console.log('-----this--------');
function getObject(num) {
    return {
        number: num,
        getNumber() {
            return this.number;
        }
    }
}

const someObj1 = getObject(110);
const someObj2 = getObject(11);

console.log(someObj1, someObj2);
console.log(someObj1.getNumber());