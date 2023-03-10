const faker = require('faker');

class ProductsService {

    constructor() {
        this.products = [];
        this.generate();
    }

    generate() {
        for (let i = 0; i < 100; i++) {
            this.products.push({
                id: i,
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl()
            })
        }
    }
    
    create() {

    }

    find() {
        return this.products;
    }

    findOne(id) {
        const name = this.getTotal();
        return this.products.find(item => item.id == id);
    }

    update() {

    }

    delete() {

    }
}

module.exports = ProductsService;