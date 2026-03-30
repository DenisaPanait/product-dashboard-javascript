function fetchProductsThen() {
  fetch("https://www.course-api.com/javascript-store-products")
    .then(res => res.json())
    .then(data => data.forEach(p => console.log(p.fields.name)))
    .catch(err => console.log("An error occurred:", err.message));
}

async function fetchProductsAsync() {
  try {
    const res = await fetch("https://www.course-api.com/javascript-store-products");
    displayProducts(await res.json());
  } catch (err) {
    handleError(err);
  }
}

function displayProducts(products) {
  const container = document.getElementById("product-container");

  products.slice(0, 5).forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.fields.image[0].url}">
      <h2>${p.fields.name}</h2>
      <p>$${p.fields.price / 100}</p>
    `;
    container.appendChild(card);
  });
}

function handleError(error) {
  console.log(`An error occurred: ${error.message}`);
}

fetchProductsThen();
fetchProductsAsync(); 