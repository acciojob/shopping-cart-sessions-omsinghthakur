document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");
  const cartItemsContainer = document.querySelector(".cart-items");

  // Load cart items from session storage
  let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

  // Function to update the cart items in the DOM
  function updateCart() {
    cartItemsContainer.innerHTML = "";
    cartItems.forEach(item => {
      const li = document.createElement("li");
      li.classList.add("cart-item");
      li.textContent = `Product ${item}`;
      cartItemsContainer.appendChild(li);
    });
  }

  // Function to add a product to the cart
  function addToCart(productId) {
    cartItems.push(productId);
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCart();
  }

  // Add click event listeners to all "Add to Cart" buttons
  products.forEach(product => {
    const addToCartButton = product.querySelector(".add-to-cart");
    const productId = product.getAttribute("data-product-id");
    addToCartButton.addEventListener("click", () => {
      addToCart(productId);
    });
  });

  // Initialize the cart on page load
  updateCart();
});
     

    


