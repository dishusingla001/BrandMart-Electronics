import { fetchQuantityFromLS } from "./fetchQuantityFromLS";
import { getCartProductfromLS } from "./getCartProductfromLS";
import { totalCost } from "./totalCost";
import { updateCart } from "./update_cart";

export const incrementDecrement = (event,id,stock,price) => {
  const currentElement = document.querySelector(`#card${id}`);
  const productquantity = currentElement.querySelector('.showProductQuantity');
  const productPrice = currentElement.querySelector('.productPrice');

  // let quantity = parseInt(productquantity.getAttribute('data-quantity')) || 1;

  let quantity = 1;
  let localStoragePrice = price;

  let localvalues = fetchQuantityFromLS(id,price);
  quantity = localvalues.quantity;
  localStoragePrice = localvalues.price;
  
  if(event.target.className==="productIncrement"){
    if(quantity < stock){
      quantity+=1;
    }else if(quantity === stock){
      quantity=stock;
      localStoragePrice = price*stock;
    }
  }else if(event.target.className==="productDecrement"){
    if(quantity>1){
      quantity-=1;
    } 
  }
  
  localStoragePrice = price*quantity;

  let localStorageProduct = getCartProductfromLS(); //get the data from the localstorage if exist
  
  // check the current id is present in the localstorage or not 
  const idPresent = localStorageProduct.find((currentElement)=>{
    if(currentElement.id === id){
      currentElement.quantity=quantity; //this update the quantity of the clicked product and the quatity present in the cart 
      currentElement.price=localStoragePrice;
      return true;
    }
  });
  console.log(quantity);

  if(!idPresent){
    localStorageProduct.push({id,quantity,price});
  }
  
  // Save to localStorage whether updating existing or adding new
  localStorage.setItem('CartProductLS',JSON.stringify(localStorageProduct));

  productquantity.innerText=quantity;
  
  productPrice.innerText=`₹${localStoragePrice}`;
  updateCart();
  totalCost();
}