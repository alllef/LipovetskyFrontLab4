export default function view(){
    let value = "";

    for(let element of document.forms[0].elements){
        value+=element.value;
    }

    return`<div>${value}</div>`;
}