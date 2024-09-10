let cart = [];
let totalPrice = 0;

function scrollToProducts() {
    document.getElementById("productos").scrollIntoView({ behavior: 'smooth' });
}

function showProductDetails(name, price, imageSrc, description) {
    document.getElementById("product-name").innerText = name;
    document.getElementById("product-price").innerText = `Precio: $${price} MXN`;
    document.getElementById("product-image").src = imageSrc;
    document.getElementById("product-description").innerText = description;
    document.getElementById("product-details-modal").style.display = "block";
}

function closeProductDetails() {
    document.getElementById("product-details-modal").style.display = "none";
}

function addToCart() {
    const productName = document.getElementById("product-name").innerText;
    const productPrice = parseInt(document.getElementById("product-price").innerText.replace(/\D/g, ''));
    cart.push({ name: productName, price: productPrice });
    updateCart();
    closeProductDetails();
}

function buyNow() {
    addToCart();
    showCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerText = `${item.name} - $${item.price} MXN`;
        cartItems.appendChild(li);
    });

    totalPrice = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById("total-price").innerText = `Total: $${totalPrice} MXN`;
    document.getElementById("cart-count").innerText = cart.length;
}

function showCart() {
    document.getElementById("cart").style.display = "block";
}

function closeCart() {
    document.getElementById("cart").style.display = "none";
}

function checkout() {
    alert("Redirigiendo a PayPal...");
    // Aquí iría la lógica para integrar PayPal
}

function showPaymentInstructions() {
    document.getElementById("payment-instructions").style.display = "block";
}

function closePaymentInstructions() {
    document.getElementById("payment-instructions").style.display = "none";
}
// Abrir el modal de compra
function openPurchaseModal(productName, price) {
    document.getElementById("purchase-modal").style.display = "block";
    document.getElementById("product-info").textContent = `Producto: ${productName} - Precio: $${price} MXN`;
}

// Cerrar el modal de compra
function closeModal() {
    document.getElementById("purchase-modal").style.display = "none";
}

// Finalizar compra
function completePurchase() {
    const email = document.getElementById("email").value;
    
    if (email) {
        alert(`Gracias por tu compra! Se enviará la confirmación a ${email}`);
        closeModal();
    } else {
        alert('Por favor, ingresa tu correo electrónico.');
    }
}