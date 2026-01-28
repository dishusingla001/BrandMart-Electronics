import { getCartProductfromLS } from "./getCartProductfromLS";
import { showToast } from "./showToast";
import { totalCost } from "./totalCost";
import { updateCart } from "./update_cart";

export const removeItemfromLS = (id) => {
  let cartproducts = getCartProductfromLS();

  let updatecartproducts = cartproducts.filter((curele)=>{
    // console.log(id!==curele.id);
    return (id!=curele.id);
  })

  // console.log(updatecartproducts);

  localStorage.setItem('CartProductLS',JSON.stringify(updatecartproducts));
  // now we have to remove the div in the cart 
  let removediv = document.getElementById(`card${id}`);
  console.log(removediv);
  if(removediv){
    removediv.remove();
    showToast("delete");
  }

  updateCart();
  totalCost();
}