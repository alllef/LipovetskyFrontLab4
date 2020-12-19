import {Client} from "./Client.js";
import {TemplateProcessor} from "./TemplateProcessor.js";

export class Category {
    contentTemplate = '';
    categoryTemplateStart;

    createCategoryTemplate(categoryName) {
        let client = new Client();
        let templateProcessor = new TemplateProcessor();
        client.getData("games").then(r => {
          console.log(r.length);
            for (let i=0; i<r.length; i++) {
             console.log(r[i]);
                if (r[i].platform === categoryName)this.contentTemplate += templateProcessor.createGameTemplate();
            }

            this.categoryTemplateStart = `<div class="categories-name">${categoryName}</div>
        <div class="categories-content" >${this.contentTemplate}</div>`;

        })
        return this.categoryTemplateStart;
    }
}