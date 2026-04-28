
function filterProducts(category) {
    const products = document.querySelectorAll('.products .product-card');
    products.forEach(card => {
        card.style.display = (category === 'all' || card.classList.contains(category)) ? 'block' : 'none';
    });
}

function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "";   // keeps original layout
        } else {
            card.style.display = "none";
        }
    });
}

// HEADER SHADOW
window.addEventListener("scroll", function () {
    const topbar = document.querySelector(".topbar");
    if (window.scrollY > 20) {
        topbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    } else {
        topbar.style.boxShadow = "none";
    }
});

// SPARKLE EFFECT
setInterval(() => {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * 300 + "px";

    document.querySelector(".banner").appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}, 300);

/* =========================
   COLLECTION PAGE NAVIGATION
   (Go from product list → product detail page)
========================= */

function openProduct(id){
    window.location.href = "product.html?id=" + id;
}

// Load reviews when page opens
window.onload = function () {
    loadReviews();
};

function addReview() {

    let name = document.getElementById("name").value;
    let product = document.getElementById("product").value;
    let rating = document.getElementById("rating").value;
    let comment = document.getElementById("comment").value;

    if (name === "" || product === "" || comment === "") {
        alert("Please fill all fields");
        return;
    }

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    let newReview = {
        name: name,
        product: product,
        rating: rating,
        comment: comment
    };

    reviews.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    displayReview(newReview);

    // clear form
    document.getElementById("name").value = "";
    document.getElementById("product").value = "";
    document.getElementById("comment").value = "";
}

function loadReviews() {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.forEach(review => displayReview(review));
}

function displayReview(review) {

    let reviewBox = document.createElement("div");
    reviewBox.classList.add("review-card");

    reviewBox.innerHTML = `
        <h3>${review.name}</h3>
        <p><b>Product:</b> ${review.product}</p>
        <p><b>Rating:</b> ${"⭐".repeat(review.rating)}</p>
        <p>${review.comment}</p>
    `;

    document.getElementById("review-list").appendChild(reviewBox);
}


