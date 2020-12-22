import {Client} from "../Client.js";

export default async function view(data) {
    let information = await getInformation();
    return `<div class="cart">${information.contentTemplate}
    <span>Total price: ${information.totalPrice.toFixed(2)}$</span>
</div>`;
}


function cartGameView(data, quantity) {
    return `
<div class = "game-cart" >
<img src="${data.pathToImage}">
<div class="game-cart-information">
<a href = "#games/${data.id}">
<p>${data.name}<br>
Platform: ${data.platform}<br>
Price: ${data.price}$<br>
Quantity: ${quantity}
</a>
</div>
</div>`
}

async function getInformation() {
    localStorage.removeItem("language");

    let cartInformation = JSON.parse(localStorage.getItem("cart"));
    let totalPrice = 0;
    let contentTemplate = ``;
    let client = new Client();

    for (let i = 0; i < cartInformation.productIds.length; i++) {

        let gameData = await client.getData("games/" + cartInformation.productIds[i].id);
        totalPrice += gameData.price * cartInformation.productIds[i].count;
        contentTemplate += cartGameView(gameData, cartInformation.productIds[i].count);

    }


    return {contentTemplate, totalPrice};
}