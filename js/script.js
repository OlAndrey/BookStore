import bookDate from "./bookDate.js";

const block = document.querySelector(".categories__body");
const div = document.querySelector(".lds-ring");

setTimeout(() =>{
    for(let i = 0; i < bookDate.length; i++){
        block.insertAdjacentHTML('beforeend', `
            <div class="categories__block product">
                <img src="${bookDate[i].image}" alt="book" class="product__img">
                <h3 class="product__name">
                ${bookDate[i].name}
                </h3>
                <p class="product__price">
                ${bookDate[i].price}
                </p>
            </div>
        `);
    }
    div.remove();
    document.querySelector(".pages").classList.toggle("display-none")
}, 2000);