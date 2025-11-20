const productContainer = document.querySelector('.productContainer');
const productTemplate = document.querySelector('#product-template');

export const showProudctContainer = (products) => {
  if(!products){
    return false;
  }

  products.forEach((curritem)=>{
    const {id,name,category,brand,price,originalPrice,stock,image,description} = curritem;

    console.log(id);
    const productClone = document.importNode(productTemplate.content,true);

    productClone.querySelector('.category').textContent = category;
    productClone.querySelector('.productImage').src = image;
    productClone.querySelector('.productImage').alt = name;
    productClone.querySelector('.productName').textContent = name;
    productClone.querySelector('.product-Description').textContent = description;
    productClone.querySelector('.currentPrice').textContent = price;
    productClone.querySelector('.originalPrice').textContent = originalPrice;
    productClone.querySelector('.currentStock').textContent = stock;

    productContainer.append(productClone);
  });

}