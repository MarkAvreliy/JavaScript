let goodsNumber = Math.round(Math.random(10) * 10);
//let goods = 'apple';
let price = Math.round(Math.random(10) * 10);

/*1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
Почему код даёт именно такие результаты?
Потому что "++a" прибавление к А в начале: с = +1 к а = 2;
b++ = к d мы в начале присваиваем b =  1, а уже потом инкрементим.
(2+ ++a) к 2 прибавляем инкремент к последнему значению а => 2+ +1+2;
(2+ b++) к 2 прибавляем последнее значение b после инкремента b++ = 2 => 2+ 2;
alert(a) = после двух инкрементов а к 1 = 3;
alert(b) = после двух инкрементов b к 1 = 3;*/

/*2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
2*2+1=4+1=5;*/

/*3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.*/
console.log('Task #3');
var min = -10;
var max = 10;
const a = Math.floor(Math.random() * (max - min + 1)) + min;
const b = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(a, b);

if (a>0 && b>0) {
    console.log('a-b = ', a-b);
} else if (a<0 && b<0) {
    console.log('a*b = ', a*b);
} else {
    console.log('a+b = ', a+b);
} 

/*4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.*/
console.log('=============================');
console.log('Task #4');
const a4 = Math.round(Math.random() * 15);
console.log('a4 =', a4);
switch(a4){
    case 1: console.log('1');
    case 2: console.log('2');
    case 3: console.log('3');
    case 4: console.log('4');
    case 5: console.log('5');
    case 6: console.log('6');
    case 7: console.log('7');
    case 8: console.log('8');
    case 9: console.log('9');
    case 10: console.log('10');
    case 11: console.log('11');
    case 12: console.log('12');
    case 13: console.log('13');
    case 14: console.log('14');
    case 15: console.log('15'); break;
    default : console.log('out of range 0 to 15');
    }

/*5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.*/
console.log('=============================');
console.log('Task #5');

function sum(x, y)
{
return (x + y);
}
sum = sum(a, b);
console.log('addition ', a, '+', b, '=', sum);

function subtraction(x, y)
{
return (x - y);
}
minus = subtraction(a, b);
console.log('subtraction ', a, '-', b, '=', minus);

function multiplication(x, y)
{
return (x * y);
}
mult = multiplication(a, b);
console.log('multiplication ', a, '*', b, '=', mult);

function division(x, y)
{
return (x / y);
}
div = division(a, b);
console.log('division ', a, '/', b, '=', div);

/*6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).*/
console.log('=============================');
console.log('Task #6');
function calc(a, b, operation){
    switch(operation){
        case 'addition': return sum(a,b);
        case 'subtraction': return subtraction(a,b);
        case 'multiplication': return multiplication(a,b);
        case 'division': return division(a,b);
        default : console.log('no such operation');
        }
}
let oper ='division';
let rez = calc(a,b,oper);
console.log(a, b, oper, rez);


/*7. *Сравнить null и 0. Попробуйте объяснить результат.
В соответствии со спецификацией, операторы сравнения > и <, для того, чтобы выяснить, истинно или ложно выражение, пропускают его через так называемый абстрактный алгоритм сравнения для отношений.
Оператор == использует так называемый абстрактный алгоритм сравнения для равенств, возвращая в результате true или false.
Оператор больше или равно (>=)
Если null < 0 принимает значение false, то null >= 0 принимает значение true
null > 0; // false
null == 0; // false
null >= 0; // true*/

