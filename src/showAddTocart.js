import { fetchQuantityFromLS } from "./fetchQuantityFromLS";
import { getCartProductfromLS } from "./getCartProductfromLS";
import { incrementDecrement } from "./incrementDecrement";
import { removeItemfromLS } from "./removeItemfromLS";
import { updateCart } from "./update_cart";
import products from "/api/products.json";

let cartproducts = getCartProductfromLS();

let filterProducts = products.filter((currprod) => {
  return cartproducts.some((currele) => currele.id === currprod.id);
});

const productCart = document.querySelector('.Cartproduct');
const producttemplate = document.querySelector('#cartproduct-template');

const showcartProduct = () => {
  updateCart()
  filterProducts.forEach((currElement)=>{
    const {category,image,name,price,id,stock}=currElement;

    const productClone = document.importNode(producttemplate.content,true);

    productClone.querySelector('#cardvalue').setAttribute('id',`card${id}`);
    productClone.querySelector('.category').textContent = category;
    productClone.querySelector('.productImage').src = image;
    productClone.querySelector('.productName').textContent = name;

    // now we have to update the price and the quantity of the cart acc to local storage 

    let updatedDatainCart = fetchQuantityFromLS(id,price);
    
    productClone.querySelector('.productPrice').textContent =`₹${updatedDatainCart.price}`;
    productClone.querySelector('.showProductQuantity').textContent = updatedDatainCart.quantity;
    
    // now we have to add the functionality to the remove buttton 
    productClone.querySelector('.remove-to-cart').addEventListener('click',()=>removeItemfromLS(id));

    // now handle the increment and decrement 
    productClone.querySelector('.quantityValue').addEventListener('click',(event)=>{
      incrementDecrement(event,id,stock,price);
    });
    productCart.append(productClone);
  })
}

showcartProduct();
