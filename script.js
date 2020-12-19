
import {Client} from "./Client.js";
import {TemplateProcessor} from "./TemplateProcessor.js";
import {Category} from "./Category.js";
import {Router} from "./Router.js";
import view from "./views/Game.js";


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



client.getData("games/WatchDogs")
    .then(response=>processor.render(view(response)));


/*<html lang="en">
    <head>
        <meta charset="UTF-8">
            <title>Title</title>
    </head>
    <body>

    </body>

</html>*/

