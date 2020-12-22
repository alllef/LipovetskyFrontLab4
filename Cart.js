


export class Cart {

    static clear() {

        localStorage.clear();
        document.getElementById("Cart_quantity").innerText = 0;

    }



    static saveInformation(id) {

        let productId = {
            id: id,
            count: 1
        }

        let cartInformation = JSON.parse(localStorage.getItem("cart"));

        if (cartInformation === null) {
            cartInformation = {
                productIds: [],
                quantity: 0
            }
        }

        let tmpProductId = cartInformation.productIds.find(item => item.id === id);
        if (tmpProductId === undefined) cartInformation.productIds.push(productId);
        else tmpProductId.count += 1;

        cartInformation.quantity++;

        localStorage.setItem("cart", JSON.stringify(cartInformation));
        document.getElementById("Cart_quantity").innerText = cartInformation.quantity;
    }
}

