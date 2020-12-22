import {default as categoryView} from "./Category.js";

export default async function view(data) {
    let catalogueTemplate = '';

   for (let i=0; i<data.length; i++) {

      catalogueTemplate += await categoryView(data[i]);
    }

    return catalogueTemplate;
}