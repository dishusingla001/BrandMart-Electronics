import { showProudctContainer } from './homeproductscard';
import './style.css'
import { updateCart } from './update_cart';

import products from "/api/products.json";

showProudctContainer(products);
updateCart();