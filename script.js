import {user} from './TemplateProcessor.js';
import {Client} from "./Client.js";
let client = new Client();
client.getData('WatchDogs').then(r => console.log(r));

document.body.innerHTML = user;
/*<html lang="en">
    <head>
        <meta charset="UTF-8">
            <title>Title</title>
    </head>
    <body>

    </body>

</html>*/