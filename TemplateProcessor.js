import {Cart} from "./Cart.js"


export class TemplateProcessor {

    render(view) {

        document.querySelector("#main").innerHTML = view;

        if (document.querySelector(".Add_Cart_Button") !== null) {
            let elements = document.querySelectorAll('.Add_Cart_Button');

            for (let elem of elements) {
                elem.addEventListener("click", event => Cart.saveInformation(elem.id));
            }

        }

        if (document.forms[0] !== undefined) document.forms[0].submitButton.onsubmit = async function () {

            let response = await fetch('https://my-json-server.typicode.com/alllef/LipovetskyFrontLab4/posts', {
                method: 'POST'
            });
           if (!response.ok) alert("An error occurred when submitting");
            Cart.clear();

        };
    }

}


function sleep(milliseconds)
{
    let start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

