export const getCartProductfromLS = () => {
  let productData = localStorage.getItem('CartProductLS');
  if(!productData){
    return [];
  }
  productData = JSON.parse(productData);
  return productData;
}