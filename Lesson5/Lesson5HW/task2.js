const allGoods = {
    goods: [
        {
            name: 'Laptop',
            price: 1500
        },
        {
            name: 'Mouse',
            price: 150
        },
        {
            name: 'cooler',
            price: 15
        },
        {
            name: 'carpet',
            price: 10
        },
    ]
}

const addGoodButtons = {
    buttonAddLaptop: document.createElement('button'),
    buttonAddMouse: document.createElement('button'),
    buttonAddCarpet: document.createElement('button'),
    buttonAddCooler: document.createElement('button'),
    render(){
        this.buttonAddLaptop.appendChild(document.createTextNode("Add Laptop"));
        document.querySelector('div').appendChild(this.buttonAddLaptop);

        this.buttonAddMouse.appendChild(document.createTextNode("Add Mouse"));
        document.querySelector('div').appendChild(this.buttonAddMouse);

        this.buttonAddCarpet.appendChild(document.createTextNode("Add Carpet"));
        document.querySelector('div').appendChild(this.buttonAddCarpet);

        this.buttonAddCooler.appendChild(document.createTextNode("Add Cooler"));
        document.querySelector('div').appendChild(this.buttonAddCooler);
    }
}

const cart = {
    goods: [
        {
            name: 'Laptop',
            qty: 1
        },
        {
            name: 'Mouse',
            qty: 2
        }
    ],
    addGood(){

    },
    totalPrice() {
        let sum = this.goods.qty*allGoods.goods.price;
        alert(`Cart price: ${sum}`);
        console.log(`Cart price: ${sum}`); //for console view
    },
    checkEmptyCart(){
        if(Object.keys(this.goods).length === 0){
            alert('cart is empty');
            return true;
        } else {
            alert('something in the cart');
            return false;
        }
    }
}

//cart.checkEmptyCart();
addGoodButtons.render();