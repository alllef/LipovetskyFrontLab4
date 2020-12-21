import {Client} from "./Client.js";
import {TemplateProcessor} from "./TemplateProcessor.js";
import {Router} from "./Router.js";


let client = new Client();
let processor = new TemplateProcessor();
let router = new Router();

window.addEventListener("hashchange", event => {
    let state = router.getCurrentState(event.newURL);
    downloadModule(state);
});

document.addEventListener("DOMContentLoaded", event=>{
    let state = router.getCurrentState(window.location.hash);
    downloadModule(state);
});

async function downloadModule(state) {
    let data = await client.getData(state.endPointName);

    let view = await import(`./views/${state.viewName}.js`);
    view = view.default;
    let template = await view(data);
    processor.render(template);
}

