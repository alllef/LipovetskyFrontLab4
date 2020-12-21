export default function view(data) {
    return `<div class =game-description>
<img src = "${data.pathToImage}">
<div class="game-text">
Name:${data.name}<br>
Platform:${data.platform}<br>
Release date:${data.releaseDate}<br>
Developer: ${data.developer}<br>
Description: <br>
Price:${data.price}
</div>
</div>`
}