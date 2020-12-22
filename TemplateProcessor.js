import {Cart} from "./Cart.js"


export class TemplateProcessor {

    render(view) {

        document.querySelector("#main").innerHTML = view;

        if (document.querySelector(".Add_Cart_Button") !== null) {
            let elements = document.querySelectorAll('.Add_Cart_Button');

            for (let elem of elements) {
                elem.addEventListener("click", event => {
                    Cart.incrementCart();
                    Cart.saveInformation(elem.id);
                });
            }

        }

        if (document.forms[0] !== undefined) document.forms[0].submitButton.onclick = async function () {
            console.log(document.forms[0]);


            let response = await fetch('https://my-json-server.typicode.com/alllef/LipovetskyFrontLab4/posts', {
                method: 'POST'
            });
            let template = ``;

            for (let formPart of document.forms[0].elements) {
                template += formPart.value;
            }


            document.querySelector("#main").innerHTML = `<div>${template}</div>`;
            console.log(template);
            Cart.clear();
            window.location.hash += "/" + response.status;
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

