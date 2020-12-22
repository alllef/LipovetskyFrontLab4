export class Cart {
    static productsNumber = 0;

    static incrementCart() {
        this.productsNumber += 1;
        console.log("incremented");
        document.getElementById("Cart_quantity").innerText = this.productsNumber;
    }

    static clear() {
        console.log("What a fuck is it");
        this.productsNumber = 0;
        localStorage.clear();
        document.getElementById("Cart_quantity").innerText = this.productsNumber;
    }

    static saveInformation(id) {

        let productId = {
            id: id,
            count: 1
        }

        let productIds = JSON.parse(localStorage.getItem("cart"));
        if (productIds === null) productIds = [];

        let tmpProductId = productIds.find(item => item.id === id);

        if (tmpProductId === undefined) productIds.push(productId);
        else tmpProductId.count += 1;

        localStorage.setItem("cart", JSON.stringify(productIds));
    }
}