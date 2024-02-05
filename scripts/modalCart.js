const cartButton=document.getElementById("btnCart");
const modal=document.querySelector(".modalCart");
const closeButton=document.getElementById("closeModal");

const showCart = (button) =>{
    button.addEventListener("click",() =>{
        modal.classList.toggle("hidden");
        modal.classList.toggle("show");
    })
}
showCart(cartButton);
showCart(closeButton);