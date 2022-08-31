import bookDate from "./bookDate.js";

const block = document.querySelector(".categories__body");
const div = document.querySelector(".lds-ring");
const colapse = document.querySelectorAll(".collapse");
const btn = document.querySelector(".navbar-toggler");
console.log(colapse)
btn.addEventListener('click', ()=>{
    colapse.forEach(e =>{
        e.classList.toggle("collapse")
        e.classList.toggle("collapse.show")
    })
})


setTimeout(() =>{
    for(let i = 0; i < bookDate.length; i++){
        block.insertAdjacentHTML('beforeend', `
            <div class="categories__block product">
                <a href="#" class="block">
                    <div class="product__image">
                        ${bookDate[i].stock > 0 ? `<div class="stock">-${bookDate[i].stock}%</div> `: ""}
                        
                        <img src="${bookDate[i].image}" alt="book" class="product__img">
                    </div>
                    <h3 class="product__name">
                    ${bookDate[i].name}
                    </h3>
                    <p class="product__price">
                    ${bookDate[i].price}
                    </p>
                </a>
            </div>
        `);
    }
    div.classList.toggle("display-none");
    document.querySelector(".pages").classList.toggle("display-none")
}, 2000);

const pages = document.querySelectorAll(".pages__link")
for(let page of pages){
    page.addEventListener('click', activePage)
}

function activePage(event){
    for(let i = 0; i < pages.length; i++){
        if(i == event.target.dataset.id){
            pages[i].classList.add("active-page");
        }
        else
            pages[i].classList.remove("active-page");
    }
    bootDate()
    setTimeout(bootDate, 2000)
}

function bootDate(){
    document.querySelectorAll(".product").forEach( e => {
        e.classList.toggle("display-none")
    })
    document.querySelector(".pages").classList.toggle("display-none")
    div.classList.toggle("display-none");
}

const sideLinks = document.querySelectorAll(".side__item")
const subLinks = document.querySelectorAll(".submenu__link")

for(let link of sideLinks){
    console.log(link)
    link.addEventListener("click", selectCategories)
}

function selectCategories(event){
    document.querySelector(".categories__title").innerHTML = event.target.outerText;
    subLinks.forEach(e => {
        e.classList.remove("active-link")
    })
    event.target.classList.add("active-link")
    bootDate()
    setTimeout(bootDate, 2000)
}