export const incrementDecrement = (event,id,stock,price) => {
  const currentElement = document.querySelector(`#card${id}`);
  const productquantity = currentElement.querySelector('.showProductQuantity');

  let quantity = parseInt(productquantity.getAttribute('data-quantity')) || 1;
  
  if(event.target.className==="productIncrement"){
    if(quantity < stock){
      quantity+=1;
    }else if(quantity === stock){
      quantity=stock;
    }
  }else if(event.target.className==="productDecrement"){
    if(quantity>1){
      quantity-=1;
    } 
  }
  console.log(quantity);
  return quantity;

}