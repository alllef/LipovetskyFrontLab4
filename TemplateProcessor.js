import {Client} from "./Client.js";

export let user = '<div>fuck</div>';

export class TemplateProcessor {

    render(view) {
        document.querySelector("#main").innerHTML = view;
    }

    createGameTemplate(gameJSON) {

        let gameTemplate = `<div class = "game">
<img src="${gameJSON.pathToImage}">
<h1 class = "game-name">${gameJSON.name}</h1>
<h2>Platform: ${gameJSON.platform}</h2>
<p class="game-price">Price: ${gameJSON.price}</p>
<div class ="Add_Cart_Button">Add to cart</div>

</div>`;
        return gameTemplate;
    }

    createCategoryTemplate(categoryName) {
        let contentTemplate = '';
        let categoryTemplate;
        let client = new Client();

        client.getData("games").then(r => {
            console.log(r.length);
            for (let i = 0; i < r.length; i++) {
                console.log(r[i]);
                if (r[i].platform === categoryName) this.contentTemplate += this.createGameTemplate(r[i]);
            }

            this.categoryTemplateStart = `<div class="categories-name">${categoryName}</div>
        <div class="categories-content" >${this.contentTemplate}</div>`;
            console.log(this.categoryTemplateStart);
            this.render(this.categoryTemplateStart);
        })

    }
}

