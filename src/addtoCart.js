import { getCartProductfromLS } from "./getCartProductfromLS";
import { updateCart } from "./update_cart";

export const addtoCart = (event,id,stock,price) =>{

  let localStorageProduct = getCartProductfromLS(); //get the data from the localstorage if exist

  const currentElement = document.querySelector(`#card${id}`);
  
  let quantity = currentElement.querySelector('.showProductQuantity').innerText;
  quantity = Number(quantity);
  price = Number(price*quantity);
  
  // check the current id is present in the localstorage or not 
  const idPresent = localStorageProduct.find((currElement)=>{
    if(currElement.id === id){
      currElement.quantity+=quantity; //this update the quantity of the clicked product and the quatity present in the cart 
      currElement.price+=price;
      return true;
    }
  });
  console.log(quantity);

  if(!idPresent){
    localStorageProduct.push({id,quantity,price});
  }
  
  // Save to localStorage whether updating existing or adding new
  localStorage.setItem('CartProductLS',JSON.stringify(localStorageProduct));

  updateCart();
}