let goodsNumber = Math.round(Math.random(10) * 10);
//let goods = 'apple';
let price = Math.round(Math.random(10) * 10);

/*if (goods > 0) {
    console.log('goods: ', goods);
} else {
    console.log('no more goods');
}*/

//if (goods > 0) console.log('goods: ', goods);
//else console.log('no more goods');

//goods > 0 ? console.log('goods: ', goods) : console.log('no more goods');

function sayprice(goods){
    const goodText = goodsNumber > 0
    ? `Goods quantity: ${goodsNumber}`
    : 'Cart is empty.';

    console.log(goodText);

    switch(goods){
    case'apple': console.log(goodsNumber + ` apple price is ${price}`); break;
    case'mango': console.log(goodsNumber + ` mango price is ${price}$`); break;
    case'banana': console.log(goodsNumber + ` banana price is ${price}$`); break;
    case'reus':
    case'taragona': 
    case'granada': console.log(goodsNumber + ` reus-granada price is ${price}$`); break;
    default : console.log(goodsNumber + ` goods undefined`);
    }
}

sayprice('banana');