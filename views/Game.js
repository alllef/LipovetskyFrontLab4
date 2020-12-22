export default function view(data) {
    return `
<div class = "game" ><a href = "#games/${data.id}">
<img src="${data.pathToImage}">
<h1 class = "game-name">${data.name}</h1>
<h2>Platform: ${data.platform}</h2>
<p class="game-price">Price: ${data.price}$</p>
</a>
<input type = "button" id = "${data.id}" class ="Add_Cart_Button"  value="Add to cart">

</div>
`;
}
