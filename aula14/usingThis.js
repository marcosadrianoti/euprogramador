function Produt(name, price) {
    this.name=name;
    this.price=price;
    
    return this;
}

function food(name, price) {
    console.log(this);
    Produt.call(this, name, price);
    console.log(this);
    this.category = "Food";
}

milk = new food('leite', 4);

console.log(milk);