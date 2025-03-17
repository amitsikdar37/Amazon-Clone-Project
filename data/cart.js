export const Cart = [];

export function addToCart(productid) {
  let matchingItem;

  Cart.forEach((item) => {
    if(productid === item.productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    Cart.push({
      productId: productid,
      quantity: 1
    }); 
  }
};