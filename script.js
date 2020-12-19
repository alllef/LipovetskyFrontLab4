import {user} from './TemplateProcessor.js';
import {Client} from "./Client.js";
import {TemplateProcessor} from "./TemplateProcessor.js";

let client = new Client();
let processor = new TemplateProcessor();

client.getData('games/WatchDogs').then(r => processor.render(processor.createGameTemplate(r)));


document.body.innerHTML = user;
/*<html lang="en">
    <head>
        <meta charset="UTF-8">
            <title>Title</title>
    </head>
    <body>

    </body>

</html>*/