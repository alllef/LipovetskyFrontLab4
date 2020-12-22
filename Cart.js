import {default as gameView} from "./views/Game.js";
import {Client} from "./Client.js";

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

    static async getInformation() {
        localStorage.removeItem("language");

        let productIds = JSON.parse(localStorage.getItem("cart"));
        let totalPrice = 0;
        let contentTemplate = '';
        let client = new Client();

        for (let i = 0; i < data.games.length; i++) {
            let gameData = await client.getData("games/" + productIds[i].id);
            totalPrice += gameData.price;
            contentTemplate += gameView(gameData);
        }

        return contentTemplate;
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

