const allGoods = {
    goods: [
        {
            name: 'Laptop',
            qty: 1,
            price: 1500
        },
        {
            name: 'Mouse',
            qty: 1,
            price: 150
        },
        {
            name: 'Carpet',
            qty: 1,
            price: 15
        },
        {
            name: 'Cooler',
            qty: 1,
            price: 10
        },
        {
            name: 'RJ45',
            qty: 5,
            price: 10
        }
    ]
}

const isCartEmptyButton = {
    buttonCheckCart: document.createElement('button'),
    render(){
        this.buttonCheckCart.id = "buttonCheckCart";
        this.buttonCheckCart.setAttribute('class', 'buttonCheckCart');
        this.buttonCheckCart.appendChild(document.createTextNode("Check Cart"));
        document.querySelector('div').appendChild(this.buttonCheckCart);
    },
    buttonClickCheckCart() {
        document.querySelector("button").addEventListener('click', (button) => {
            console.log(cart.goods);
            cart.checkEmptyCart();
        })
    }
}

const addGoodLaptop = {
    buttonAddLaptop: document.createElement('button'),
    render(){
        this.buttonAddLaptop.id = "buttonAddLaptop";
        this.buttonAddLaptop.setAttribute('class', 'addProductButton');
        this.buttonAddLaptop.appendChild(document.createTextNode("Add Laptop"));
        document.querySelector('div').after(this.buttonAddLaptop);
    },
    buttonClickAddGood() {
        document.getElementById("buttonAddLaptop").addEventListener('click', (button) => {
            this.addGoodData();
            services.productAddedMessage('Laptop');
            services.addedProductList();
            console.log(cart.goods)
        })
    },
    addGoodData(){
        let goodData = {
            id: Math.floor(Math.random()*10000),
            name: allGoods.goods[0].name,
            qty: allGoods.goods[0].qty,
            price: allGoods.goods[0].price,
        };
        console.log(allGoods.goods[0].id);
        return cart.goods[cart.goods.length++] = goodData;
    },
    run(){
        this.render();
        this.buttonClickAddGood();
    }
}

const addGoodMouse = {
    buttonAddMouse: document.createElement('button'),
    render(){
        this.buttonAddMouse.id = "buttonAddMouse";
        this.buttonAddMouse.setAttribute('class', 'addProductButton');
        this.buttonAddMouse.appendChild(document.createTextNode("Add Mouse"));
        document.querySelector('div').after(this.buttonAddMouse);
    },
    buttonClickAddGood() {
        document.getElementById("buttonAddMouse").addEventListener('click', (button) => {
            this.addGoodData();
            services.productAddedMessage('Mouse');
            services.addedProductList();
            console.log(cart.goods)
        })
    },
    addGoodData(){
        let goodData = {
            id: Math.floor(Math.random()*10000),
            name: allGoods.goods[1].name,
            qty: allGoods.goods[1].qty,
            price: allGoods.goods[1].price,
        };
        cart.goods[cart.goods.length++] = goodData;
    },
    run(){
        this.render();
        this.buttonClickAddGood();
    }
}

const addGoodCarpet = {
    buttonAddCarpet: document.createElement('button'),
    render(){
        this.buttonAddCarpet.id = "buttonAddCarpet";
        this.buttonAddCarpet.setAttribute('class', 'addProductButton');
        this.buttonAddCarpet.appendChild(document.createTextNode("Add Carpet"));
        document.querySelector('div').after(this.buttonAddCarpet);
    },
    buttonClickAddGood() {
        document.getElementById("buttonAddCarpet").addEventListener('click', (button) => {
            this.addGoodData();
            services.productAddedMessage('Carpet');
            services.addedProductList();
            console.log(cart.goods)
        })
    },
    addGoodData(){
        let goodData = {
            id: Math.floor(Math.random()*10000),
            name: allGoods.goods[2].name,
            qty: allGoods.goods[2].qty,
            price: allGoods.goods[2].price,
        };
        cart.goods[cart.goods.length++] = goodData;
    },
    run(){
        this.render();
        this.buttonClickAddGood();
    }
}

const addGoodWire = {
    buttonAddWire: document.createElement('button'),
    render(){
        this.buttonAddWire.id = "buttonAddWire";
        this.buttonAddWire.setAttribute('class', 'addProductButton');
        this.buttonAddWire.appendChild(document.createTextNode("Add Wires"));
        document.querySelector('div').after(this.buttonAddWire);
    },
    buttonClickAddGood() {
        document.getElementById("buttonAddWire").addEventListener('click', (button) => {
            this.addGoodData();
            services.productAddedMessage('Wire');
            services.addedProductList();
            console.log(cart.goods)
        })
    },
    addGoodData(){
        let goodData = {
            id: Math.floor(Math.random()*10000),
            name: allGoods.goods[4].name,
            qty: allGoods.goods[4].qty,
            price: allGoods.goods[4].price,
        };
        cart.goods[cart.goods.length++] = goodData;
    },
    run(){
        this.render();
        this.buttonClickAddGood();
    }
}

const cart = {
    goods: [
    ],
    checkEmptyCart(){
        if(Object.keys(this.goods).length === 0){
            document.getElementById("cartInfo").innerHTML = '';
            document.getElementById("cartInfo").appendChild(document.createTextNode("Your cart is empty"));
            return true;
        } else {
            this.getCartItemsSumAndNumber();
            return false;
        }
    },
    getCartItemsSumAndNumber(){
        let number = 0;
        let sum = 0;
        const query = this.goods;
        for(id in query){
            sum += query[id].price;
            number += query[id].qty;
        }

        document.getElementById("cartInfo").innerHTML = '';
        document.getElementById("cartInfo").appendChild(document.createTextNode(`Number of goods in the Cart: ${number} in total price ${sum}`));

    }

}

const buyButton = {
    buttonBuyButton: document.createElement('button'),
    render(){
        this.buttonBuyButton.id = "buyButton";
        this.buttonBuyButton.setAttribute('class', 'buyButton');
        this.buttonBuyButton.appendChild(document.createTextNode("Buy"));
        document.getElementById("cartPrice").after(this.buttonBuyButton);
    },
    buttonClickBuyButton() {
        document.getElementById("buyButton").addEventListener('click', (button) => {
            if(Object.keys(cart.goods).length === 0){
                alert("Your cart is empty. Nothing to buy.");
            } else {
                alert('You have bought all products!');
                alert('Enter your delivery address in to field below please.');
                collapseCart();
                delivery();
                nextButton.run();
                comment();
                showCartButton.run();
            }
        })
    },
    run(){
        this.render();
        this.buttonClickBuyButton();
    }
}

const nextButton = {
    buttonNextButton: document.createElement('button'),
    render(){
        this.buttonNextButton.id = "nextButton";
        this.buttonNextButton.setAttribute('class', 'nextButton');
        this.buttonNextButton.appendChild(document.createTextNode("Next"));
        document.getElementById("delivery").after(this.buttonNextButton);
    },
    buttonClickNextButton() {

        document.getElementById("nextButton").addEventListener('click', (button) => {
            const isEmpty = str => !str.trim().length;
            const adrInpValue = document.getElementById("addressInput").value;
            const comInpValue = document.getElementById("commentInput").value;
            if( isEmpty(adrInpValue) ) {
                alert( "Address is empty" );
            } else {
                    alert(`Address: ${document.getElementById("addressInput").value}, has been saved.`);
                    goToComment();
            }
            if( !isEmpty(adrInpValue) && !isEmpty(comInpValue) ) {
                alert( "Your order has been saved." );
            } else if (!isEmpty(adrInpValue) && isEmpty(comInpValue)) {
                alert( "Your order has been saved without comment." );
            }
        })
    },
    run(){
        this.render();
        this.buttonClickNextButton();
    }
}

const showCartButton = {
    showCartButton: document.createElement('button'),
    render(){
        this.showCartButton.id = "showCartButton";
        this.showCartButton.setAttribute('class', 'showCartButton');
        this.showCartButton.appendChild(document.createTextNode("Show Cart"));
        document.getElementById("comment").after(this.showCartButton);
    },
    buttonClickShowCartButton() {
        document.getElementById("showCartButton").addEventListener('click', (button) => {
            let fieldCart = document.getElementById('cartPrice');
            fieldCart.style.height='430px';
            let fieldComment = document.getElementById('commentInput');
            fieldComment.style.height='30px';
        })
    },
    run(){
        this.render();
        this.buttonClickShowCartButton();
    }
}

const services ={
    productAddedMessage(product){
        document.getElementById("cartInfo").innerHTML = '';
        document.getElementById("cartInfo").appendChild(document.createTextNode(`\n One ${product} has been added to the cart.`));
    },
    addedProductList(){
        let list = [];
        let a=0, ap=0;
        let b=0, bp=0;
        let c=0, cp=0;
        let d=0, dp=0;
        let sum = 0;
        const query = cart.goods;
        for(id in query){
            sum += query[id].price;
        };
        for (let i=0; i<cart.goods.length;i++){
            list[i] = cart.goods[i];
            list[i].id = cart.goods[i].id;
            list[i].name = cart.goods[i].name;
            list[i].qty = cart.goods[i].qty;
            list[i].price = cart.goods[i].price;

            if (list[i].name==='Laptop'){
                a++;
                ap=list[i].price*a;
            };
            if (list[i].name==='Mouse'){
                b++;
                bp=list[i].price*b;
            };
            if (list[i].name==='Carpet'){
                c++;
                cp=list[i].price*c;
            };
            if (list[i].name==='RJ45'){
                d++;
                dp=list[i].price*d;
            };
        }
        document.getElementById("cartPrice").innerHTML =
                            `<p>In the list of added products are: </p>
                            <p> Laptop ${a} pcs for a total price = ${ap}.</p>
                            <p> Mouse ${b} pcs for a total price = ${bp}. </p>
                            <p> Carpet ${c} pcs for a total price = ${cp}. </p>
                            <p> RJ45 ${d} pcs for a total price = ${dp}. </p>
                            <p> TOTAL: ${sum}. </p>`;
    },

}

function cartShow() {
    let div = document.createElement("div");
    div.setAttribute('class', 'cartInfo');
    div.id='cartInfo';
    document.body.appendChild(div);
}

function cartPrice() {
    let div = document.createElement("div");
    div.setAttribute('class', 'cartPrice');
    div.id='cartPrice';
    document.body.appendChild(div);
}

function delivery() {
    let div = document.createElement("div");
    div.setAttribute('class', 'delivery');
    div.id='delivery';
    document.body.appendChild(div);
    div.innerHTML = "<input type='text' id='addressInput' name='addressInput' value='' class='addressInput' placeholder='Input address here' style='padding:5px;' />";

}

function collapseCart() {
    let fieldCart = document.getElementById('cartPrice');
    let buttonBuy = document.getElementById('buyButton');
    fieldCart.style.height='30px';
    buttonBuy.style.display = 'none';
}

function goToComment() {
    let fieldAddress = document.getElementById('addressInput');
    let fieldComment = document.getElementById('commentInput');
    fieldAddress.style.height='30px';
    fieldComment.style.height='290px';
}

function comment() {
    let div = document.createElement("div");
    div.setAttribute('class', 'comment');
    div.id='comment';
    document.getElementById('delivery').after(div);
    div.innerHTML = "<input type='text' id='commentInput' name='commentInput' value='' class='commentInput' placeholder='Input comment here if needed' style='padding:5px;' />";
}

function run(){
    isCartEmptyButton.render();
    isCartEmptyButton.buttonClickCheckCart();
    addGoodLaptop.run();
    addGoodMouse.run();
    addGoodCarpet.run();
    addGoodWire.run();
    cartShow();
    cartPrice();
    buyButton.run();
}
run();