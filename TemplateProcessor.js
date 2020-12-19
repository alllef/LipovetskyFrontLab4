export let user = '<div>fuck</div>';

 export class TemplateProcessor {

    render(view) {
        document.body.innerHTML = view;
    }

    createGameTemplate(gameJSON) {
        let gameTemplate = `<div>
<h1>${gameJSON.id}</h1>
<img src="${gameJSON.pathToImage}">
<p>${gameJSON.price}</p>
<h2>${gameJSON.platform}</h2>
</div>`;
        return gameTemplate;
    }

}

