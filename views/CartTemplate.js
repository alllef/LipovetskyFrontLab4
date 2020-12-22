import{Cart} from "../Cart.js";

export default async function view(data) {
    return `<div class="categories-name">${data.id}</div>
        <div class="categories-content" >${await createCategoryTemplate(data)}</div>`;
}