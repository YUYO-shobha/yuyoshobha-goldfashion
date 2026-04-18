/* =========================
   PRODUCT DATABASE
========================= */

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


/* =========================
   GET PRODUCT FROM URL
========================= */

let id = new URLSearchParams(window.location.search).get("id");

console.log("ID:", id);   // 👈 DEBUG

let product = products[id];

console.log("PRODUCT:", product); // 👈 DEBUG


/* 🚨 ADD THIS BLOCK (IMPORTANT) */
if(!product){
    document.body.innerHTML = "<h2 style='color:red'>Product Not Found</h2>";
    throw new Error("Invalid Product ID");
}


/* =========================
   LOAD DATA
========================= */

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
        mainImg.classList.remove("zoomed");
    };

    thumbs.appendChild(t);
});


/* WHATSAPP */
document.getElementById("waBtn").href =
`https://wa.me/919686032980?text=I want to order ${product.name}`;


/* ZOOM */
function zoomImage(){
    mainImg.classList.toggle("zoomed");
}
