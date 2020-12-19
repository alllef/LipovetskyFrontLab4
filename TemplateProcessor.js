export let user = '<div>fuck</div>';

 export class TemplateProcessor {

    render(view) {
        document.querySelector("#main").innerHTML = view;
    }

    createGameTemplate(gameJSON) {
        let gameTemplate = `<div class = "game">
<img src="${gameJSON.pathToImage}">
<h1 class = "game-name">${gameJSON.id}</h1>
<h2>Platform: ${gameJSON.platform}</h2>
<p class="game-price">Price: ${gameJSON.price}</p>
<div class ="Add_Cart_Button">Add to cart</div>

</div>`;
        return gameTemplate;
    }

}

