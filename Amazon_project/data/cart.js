// data just for development
export let cart = JSON.parse(localStorage.getItem('cart'));

// if no cart
if (!cart) {
	cart = []; // default empty array, not to brake forEach loops later
}

function saveToStorage() {
	localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, productName) {
	let matchingItem;

		cart.forEach((cartItem) => {
			if (productId === cartItem.productId) {
				matchingItem = cartItem;
			}
		});

		if (matchingItem) {
			matchingItem.quantity += 1;
		} else {
			cart.push({
				productId: productId,
				productName: productName,
				quantity: 1
			});
		}

		saveToStorage();
}

export function removeFromCart(productId) {
	let newCartArray = [];

	cart.forEach((cartItem) => {
		if (cartItem.productId !== productId) {
			newCartArray.push(cartItem);
		}
	});

	cart = newCartArray;

	saveToStorage();
}