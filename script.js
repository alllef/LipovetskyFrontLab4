import {Client} from "./Client.js";
import {TemplateProcessor} from "./TemplateProcessor.js";
import {Router} from "./Router.js";


let client = new Client();
let processor = new TemplateProcessor();
let router = new Router();

window.addEventListener("hashchange", event => {

    processor.render(`<img src = "images/giphy.gif">`);
    let state = router.getCurrentState(event.newURL);
    if (state.viewName !== "fuck")
        downloadModule(state);
    else console.log("fuck");


});

document.addEventListener("DOMContentLoaded", event => {
    processor.render(`<img src = "images/giphy.gif">`);

        let state = router.getCurrentState(window.location.hash);
        if (state.viewName !== "fuck")
            downloadModule(state);
        else console.log("fuck");

});

async function downloadModule(state) {
    let data = await client.getData(state.endPointName);

    let view = await import(`./views/${state.viewName}.js`);
    view = view.default;
    let template = await view(data);
    processor.render(template);
}

