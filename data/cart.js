export let Cart = JSON.parse(localStorage.getItem('cart'));

if (!Cart) {
  Cart= [
    {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity:1
    },
    {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity:2
    }
  ];
}


export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(Cart));
}

export function accesCart() {
  Cart = JSON.parse(localStorage.getItem('cart'));
  return Cart
}

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

  saveToStorage();
};

export function deleteCartItem(productId) {
  let newCart = [];

  Cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    };
  });

  Cart = newCart;
  saveToStorage();
};