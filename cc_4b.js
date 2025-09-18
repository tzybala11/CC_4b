// Coding Challenge 04b

// Step 2

let products = [
    {sku: "1001",name: "Smart Phone",category: "Telephones",price: 500.00,inventory: 8},
    {sku: "1002",name: "Laptop Computer",category: "Computers",price: 1200.00,inventory: 4},
    {sku: "1003",name: "Monitor",category: "Peripherals",price: 250.00,inventory: 3},
    {sku: "1004",name: "Headphones",category: "Peripherals",price: 180.00,inventory: 10},
    {sku: "1005",name: "Desktop Computer",category: "Computers",price: 1550.00,inventory: 6}
];

console.log(products);

// Step 3

for (let product of products) {
    let discount = 0;
    switch (product.category) {
        case "Telephones":
            discount = .1
            break;
        case "Computers":
            discount = .15
            break;
        case "Peripherals":
            discount = .25
            break;
        default:
            break;
    }
    // Discounted Unit Price
let promoPrice = product.price * (1-discount);
product.promoPrice = promoPrice;
};

console.log(products);

// Step 4