
import {Client} from "./Client.js";
import {TemplateProcessor} from "./TemplateProcessor.js";
import {Category} from "./Category.js";
import {Router} from "./Router.js";
import {catalogueView} from "./views/Catalogue.js";
import {gameView} from "./views/Game.js";

let client = new Client();
let processor = new TemplateProcessor();
let category = new Category();
let router = new Router();

let name = "Game";

 //category.createCategoryTemplate("PS4");
document.querySelector(".catalogue").addEventListener("click",event =>router.setState("catalogue",""));
window.addEventListener("hashchange",event=>{
category.createCategoryTemplate("Xbox One");
})



client.getData("categories").then(response=>{
    catalogueView(response).then(template=> {
        processor.render(template);
    })
});



/*<html lang="en">
    <head>
        <meta charset="UTF-8">
            <title>Title</title>
    </head>
    <body>

    </body>

</html>*/

