import { getCartProductfromLS } from "./getCartProductfromLS";

export const addtoCart = (event,id,stock,price) =>{

  let localStorageProduct = getCartProductfromLS(); //get the data from the localstorage if exist

  const currentElement = document.querySelector(`#card${id}`);
  
  let quantity = currentElement.querySelector('.showProductQuantity').innerText;
  quantity = Number(quantity);
  price = Number(price*quantity);

  localStorageProduct.push({id,quantity,price});
  localStorage.setItem('CartProductLS',JSON.stringify(localStorageProduct));
  console.log(quantity,price);
}