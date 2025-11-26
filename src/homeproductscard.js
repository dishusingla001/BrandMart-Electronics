import { addtoCart } from "./addtoCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector('.productContainer');
const productTemplate = document.querySelector('#product-template');


export const showProudctContainer = (products) => {
  if(!products){
    return false;
  }

  products.forEach((curritem)=>{
    const {id,name,category,brand,price,originalPrice,stock,image,description} = curritem;

    const productClone = document.importNode(productTemplate.content,true);

    productClone.querySelector('#cardvalue').setAttribute('id',`card${id}`);
    productClone.querySelector('.category').textContent = category;
    productClone.querySelector('.productImage').src = image;
    productClone.querySelector('.productImage').alt = name;
    productClone.querySelector('.productName').textContent = name;
    productClone.querySelector('.product-Description').textContent = description;
    productClone.querySelector('.currentPrice').textContent = `₹ ${price}`;
    productClone.querySelector('.originalPrice').textContent = `₹ ${originalPrice}`;
    productClone.querySelector('.currentStock').textContent = stock;

    // now handle the + and - button 
    productClone.querySelector('.quantityValue').addEventListener('click',(e)=>{
      // console.log(id);
      homeQuantityToggle(e,id,stock);
    })

    // now add functions for the add to cart
    productClone.querySelector('.add-to-card-button').addEventListener('click',(event)=>{
      addtoCart(event,id,stock,price);
    })


    productContainer.append(productClone);
  });
}
