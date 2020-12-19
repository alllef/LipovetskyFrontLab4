import {user} from './TemplateProcessor.js';
import {Client} from "./Client.js";
import {TemplateProcessor} from "./TemplateProcessor.js";
import {Category} from "./Category.js";

let client = new Client();
let processor = new TemplateProcessor();
let category = new Category();

//client.getData('games/WatchDogs').then(r => processor.render(processor.createGameTemplate(r)));
processor.render(category.createCategoryTemplate("PS4"));

/*<html lang="en">
    <head>
        <meta charset="UTF-8">
            <title>Title</title>
    </head>
    <body>

    </body>

</html>*/

