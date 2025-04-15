import { products, Product } from "./array";


function displayProductNames(array: Product[]){
    array.forEach(item => {
        console.log(`Product namn: ${item.name}`)
    });
}

function findProductByCategory(products: Product[], category: string): Product[] {
    const filteredProducts = products.filter(product => {
        return product.category === category;
    });
    return filteredProducts;
}

function calculateDiscountedPrice(product: Product): number {
    if(product.discount !== undefined && product.discount > 0) {
        const discountedPrice = product.price * (1 - product.discount/100);
        return discountedPrice;
    }else {
        return product.price;
    }
}

function findProductsInPriceRange(products: Product[], minPrice: number, maxPrice: number): Product[] {
    const filteredPrice: Product [] = products.filter(product => {
        return product.price >= minPrice && product.price <= maxPrice;
    })
    return filteredPrice;
}


displayProductNames(findProductsInPriceRange(products, 10, 50));
console.log("_________________")
displayProductNames(findProductByCategory(products, "Food"));
console.log("_________________")
console.log(calculateDiscountedPrice(products[7]));

