class Product {
    name = "smartphone";
    price = 1000;

    showDetails() {
        console.log(`Product: ${this.name}, Price: ${this.price}`);
    }
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const p1 = new Product("smartphone", 1000);
p1.showDetails(); // Product: smartphone, Price: 1000