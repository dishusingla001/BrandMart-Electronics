import { getCartProductfromLS } from "./getCartProductfromLS";

export const fetchQuantityFromLS = (id,price) => {
  let cartproducts = getCartProductfromLS();

  let existingProducts = cartproducts.find((currElement)=>currElement.id === id);

  let quantity = 1;

  if(existingProducts){
    quantity = existingProducts.quantity;
    price = existingProducts.price;
  }

  return {price,quantity};
}