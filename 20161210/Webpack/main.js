/**
 * Created by plter on 2016/12/10.
 */

require("./style.css");
var imageUrl = require("./image.jpg");

function createDiv() {

    var div = document.createElement("div");
    div.className = "rect";
    document.body.appendChild(div);
}

function createImage() {
    var img = document.createElement("img");
    img.src = imageUrl;
    document.body.appendChild(img);
}

createDiv();
createImage();