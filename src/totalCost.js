import { getCartProductfromLS } from "./getCartProductfromLS";

export const totalCost = () => {
  let localStorageProduct = getCartProductfromLS();
  let initialValue = 0;
  let totalprice = localStorageProduct.reduce((accum,currElement)=>{
    let productPrice=parseInt(currElement.price) || 0;
    return accum+productPrice;
  },initialValue);

  document.querySelector('.total-mrp').innerText = `₹${totalprice}`;
  document.querySelector('.discount-on-item').innerText = "- ₹500";
  document.querySelector('.promise-price').innerText = "- ₹100";

  document.querySelector('.amount-price').innerText = `₹${totalprice-400}`;

  
}