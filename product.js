alert("JS is working");

window.onload = function(){

const products = {
  saree1: {
    name: "Elegant Silk Saree",
    price: "₹799",
    desc: "Premium silk saree perfect for weddings and parties.",
    images: [
      "images/saree-1.png",
      "images/saree-2.png",
      "images/saree-3.png"
    ]
  }
};

let id = new URLSearchParams(window.location.search).get("id");
let product = products[id];

/* ERROR CHECK */
if(!product){
    document.body.innerHTML = "<h2>Product Not Found</h2>";
    return;
}

/* LOAD DATA */
document.getElementById("name").innerText = product.name;
document.getElementById("price").innerText = product.price;
document.getElementById("desc").innerText = product.desc;

/* MAIN IMAGE */
let mainImg = document.getElementById("mainImg");
mainImg.src = product.images[0];

/* THUMBNAILS */
let thumbs = document.getElementById("thumbs");

product.images.forEach(img => {
    let t = document.createElement("img");
    t.src = img;

    t.onclick = function(){
        mainImg.src = img;
    };

    thumbs.appendChild(t);
});

/* WHATSAPP */
document.getElementById("waBtn").href =
`https://wa.me/919686032980?text=I want to order ${product.name}`;

};

function zoomImage(){
    mainImg.classList.toggle("zoomed");
}
