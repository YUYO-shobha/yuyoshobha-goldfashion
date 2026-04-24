window.onload = function(){

const products = {
  saree1: {
    name: "Elegant Silk Saree",
    originalPrice: 300,
    discount: 20,
    desc: "Premium silk saree perfect for weddings and parties.",
    images: [
      "images/saree-1.png",
      "images/saree-2.png",
      "images/saree-3.png"
    ]
},

    saree2: {
    name: "Mangalagiri Pattu Saree",
    originalPrice: 5000,
    discount: 15,
    desc: "Traditional handwoven Mangalagiri silk saree with rich texture and elegance.",
    images: [
      "images/saree2-1.png",
      "images/saree2-2.png",
      "images/saree2-3.png"
    ]
  },

     saree3: {
    name: "Tissue Saree",
    originalPrice: 3000,
    discount: 15,
    desc: "Traditional tissue saree with rich texture and elegance.",
    images: [
      "images/saree3-1.jpg",
      "images/saree3-2.jpg",
      "images/saree3-3.jpg"
    ]
  },

      saree4: {
    name: "Pink cotton Saree",
    originalPrice: 8000,
    discount: 50,
    desc: "Betibul light white pink cotton saree.",
    images: [
      "images/saree4-1.jpg",
      "images/saree4-2.jpg",
      "images/saree4-3.jpg"
    ]
  },

  saree5: {
  name: "Banaras Saree",
originalPrice: 4000,
  discount: 01,
  desc: "Beautiful light-weight Banarasi saree.",
  images: [
    "images/saree5-1.jpg",
    "images/saree5-2.jpg",
    "images/saree5-3.jpg"
  ]
}
};


/* your remaining code continues here... */
  
let id = new URLSearchParams(window.location.search).get("id");
let product = products[id];

/* ERROR CHECK */
if(!product){
    document.body.innerHTML = "<h2>Product Not Found</h2>";
    return;
}


  /* PRICE CALCULATION SECTION*/
let finalPrice = product.originalPrice - (product.originalPrice * product.discount / 100);
let saveAmount = product.originalPrice - finalPrice;
  
/* LOAD DATA */
document.getElementById("name").innerText = product.name;
document.getElementById("desc").innerText = product.desc;

/* PRICE SECTION (NEW) */
document.getElementById("priceBox").innerHTML = `
    <div class="price-row">
        <span class="new-price">₹${finalPrice}</span>
        <span class="old-price">₹${product.originalPrice}</span>
    </div>
    <div class="save-text">
        You Save ₹${saveAmount} (${product.discount}% off)
    </div>
`;

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

/* ZOOM FUNCTION */
function zoomImage(){
    let mainImg = document.getElementById("mainImg");
    mainImg.classList.toggle("zoomed");
}
