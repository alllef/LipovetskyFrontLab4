import {Client} from "../Client.js";
import {default as gameView} from "./Game.js";

export default async function view(data) {
    return `<div class="categories-name">${data.id}</div>
        <div class="categories-content" >${await createCategoryTemplate(data)}</div>`;
}


async function createCategoryTemplate(data) {


    let contentTemplate = '';
    let client = new Client();
    for (let i = 0; i < data.games.length; i++) {
        let gameData = await client.getData("games/" + data.games[i])

        contentTemplate += gameView(gameData);
    }

    return contentTemplate;
}

