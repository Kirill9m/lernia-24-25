"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = require("./array");
function displayProductNames(array) {
    array.forEach(item => {
        console.log(`Product namn: ${item.name}`);
    });
}
function findProductByCategory(products, category) {
    const filteredProducts = products.filter(product => {
        return product.category === category;
    });
    return filteredProducts;
}
function calculateDiscountedPrice(product) {
    if (product.discount !== undefined && product.discount > 0) {
        const discountedPrice = product.price * (1 - product.discount / 100);
        return discountedPrice;
    }
    else {
        return product.price;
    }
}
function findProductsInPriceRange(products, minPrice, maxPrice) {
    const filteredPrice = products.filter(product => {
        return product.price >= minPrice && product.price <= maxPrice;
    });
    return filteredPrice;
}
displayProductNames(findProductsInPriceRange(array_1.products, 10, 50));
console.log("_________________");
displayProductNames(findProductByCategory(array_1.products, "Food"));
console.log("_________________");
console.log(calculateDiscountedPrice(array_1.products[7]));
//# sourceMappingURL=variables.js.map