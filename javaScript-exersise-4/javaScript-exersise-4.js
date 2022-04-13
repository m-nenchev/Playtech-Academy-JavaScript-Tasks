let products = [
	{ product: "Shirt", price: 10 },
	{ product: "Laptop", price: 2400 },
	{ product: "Bike", price: 450 },
	{ product: "Chair", price: 150 },
	{ product: "Phone", price: 1500 },
	{ product: "Shoes", price: 60 },
	{ product: "Car", price: 25000 },
	{ product: "Coffe Machine", price: 500 }
];

/*Евтини 0 - 100
	Нормална цена 100 - 500
	Скъпи 500 - 3000
	Много скъпи 3000+
    */
    let productsTo100 =[]
    let productsTo500 = [];
	let productsTo3000 = [];
	let productsToVeryExpensive = [];
	let productsTotalAmount = 0;
	let productsToSum =[];

for (let i = 0; i < products.length-1; i++) {
     
    if (products[i].price <= 100) {
		productsToSum.push(products[i].price)
                console.log(`${products[i].product} " - Cheap"`);
                productsTotalAmount += products[i].price
     }else if (products[i].price >= 100 && products[i].price <= 500) {
		productsToSum.push(products[i].price)
		console.log(`${products[i].product} " - Normal price"`);
		productsTotalAmount += products[i].price
	 }else if (products[i].price >= 500 && products[i].price <= 3000) {
		productsToSum.push(products[i].price)
		console.log(`${products[i].product} " - Expensives"`);
		productsTotalAmount += products[i].price
	 }else{
		productsToSum.push(products[i].price)
		console.log(`${products[i].product} " - Range: Very-Expensive-product"`);
		productsTotalAmount += products[i].price
	 }
     
}
console.log(`"Total amount -" ${productsTotalAmount}`);





