let number = 0;
let numObj = {

};

function parse(number) {
    number = prompt('Enter value from 0 to 999 please');
    while (isNaN(number) || number === '') {
        number = prompt('Enter value from 0 to 999 please');
    }
    if (number > 999 && number < 0) {
        alert('The value cannot be less than 0 or exceed 999');
        console.log(numObj);        
    } else if (number>=100 && number<1000) { // 3 digits
        numObj = number.split();
        numObj.hundreds = number[0];
        numObj.tens = number[1];
        numObj.units = number[2];
        alert(numObj + ' = единицы: ' + numObj.units + ', десятки: ' + numObj.tens  + ', сотни: ' + numObj.hundreds);
    } else if (number>=10 && number<100) {  //2 digits
        numObj = number.split();
        numObj.tens = number[0];
        numObj.units = number[1];
        alert(numObj + ' = единицы: ' + numObj.units + ', десятки: ' + numObj.tens);
    } else if (number>=0 && number<10) { // 1 digit
        numObj = number.split();
        numObj.units = number[0];
        alert(numObj + ' = единицы: ' + numObj.units);
    }

    console.log(numObj); // to check object
}
parse(number);