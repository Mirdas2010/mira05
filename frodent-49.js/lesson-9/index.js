let apiUrl = "https://dummyjson.com/products";

fetch(apiUrl)
 .then((res) =>res.json())
 .then((products) => getProducts(products.products))

 function getProducts(products) {
    let productsBox = document.querySelector(".products-box");

    products.map((product) => {
        console.log(product)
        let productElement = document.createElement("li");
        productElement.classList.add("card-list");
        productElement.innerHTML = `
           <img src="${product.thumbnail}" alt="${product.title}"/>
           <di< class="card-content">
              <h2 class="card-title">${product.title}</h2>
              <p class="card-description">${product.description}
              </div>
               <button class="button">View </button>
        `;

        productsBox.appendChild(productElement);

 });
}