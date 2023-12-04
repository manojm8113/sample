const btnCart=document.querySelector('#cart-icon');
const Cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');
btnCart.addEventListener('click',()=>{
Cart.classList.add('cart-active');
});
btnClose.addEventListener('click',()=>{
    Cart.classList.remove('cart-active');
    });
    document.addEventListener('DOMContentLoaded',loadFood);
    function loadFood(){
        loadContant();
    }
    function loadContant(){
        //remove food items from cart
        let btnRemove=document.querySelectorAll('.fa-trash');
        btnRemove.forEach((btn)=>{
            btn.addEventListener('click',removeItem);
        });
  
    //product item change event

let qtyElements=document.querySelectorAll('.cart-quantity');
        qtyElements.forEach((input)=>{
            input.addEventListener('change',changeQty);
        });
    }
      //Remove item
      function removeItem(){
        if(confirm('Are you sure to remove!')){
        this.parentElement.remove();
        }
    }
    //change Quantity
    function changeQty(){
       if(isNaN(this.value)||this.value<1){
        this.value=1;
       }
    }
