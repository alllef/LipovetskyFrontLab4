export default function view(data) {
    return `<div class ="game-description">
<img src = "${data.pathToImage}">
<div class="game-text">
<span id ="game-description-name">${data.name}</span><br>
Platform: ${data.platform}<br>
Release date: ${data.releaseDate}<br>
Developer: ${data.developer}<br>
Description: <br>
Price: ${data.price}
<div class ="Add_Cart_Button">Add to cart</div>
</div>
</div>`
}