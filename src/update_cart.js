import { getCartProductfromLS } from "./getCartProductfromLS";

export const updateCart = () => {
  const iteminCartIcon = document.querySelector('.addtoCart');
  const cartItems = getCartProductfromLS();
  var len = cartItems.length; 
  iteminCartIcon.setAttribute('data-count',len);
}