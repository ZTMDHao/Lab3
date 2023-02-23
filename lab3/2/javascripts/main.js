
const products = [
	"apple",
	"banana",
	"orange",
	"grape",
	"pineapple",
	"watermelon",
	"mango",
	"kiwi",
	"peach",
	"pear"
];


const productsList = document.getElementById("products-list");
for (let i = 0; i < products.length; i++) {
	const productItem = document.createElement("li");
	productItem.textContent = products[i];
	productsList.appendChild(productItem);
}


function searchProducts(query) {
	return products.filter(product => product.toLowerCase().includes(query.toLowerCase()));
}

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", function() {
	const query = this.value;
	const filteredProducts = searchProducts(query);
	displayProducts(filteredProducts);
});


function displayProducts(products) {
	productsList.innerHTML = "";
	for (let i = 0; i < products.length; i++) {
		const productItem = document.createElement("li");
		productItem.textContent = products[i];
		productsList.appendChild(productItem);
	}
}
