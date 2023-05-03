// use local storage to manage cart data
// const addToDb = (id) => {
//   let shoppingCart = getShoppingCart();
//   // add quantity
//   const quantity = shoppingCart[id];
//   if (!quantity) {
//     shoppingCart[id] = 1;
//   } else {
//     const newQuantity = quantity + 1;
//     shoppingCart[id] = newQuantity;
//   }
//   localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
// };

const addToDb = (chefId, recpId) => {
  let recpArr = [];
  // Retrieve the existing data
  recpArr = getFromDb();

  // set data
  let recpObj = {};
  recpObj.chef = chefId;
  recpObj.recp = recpId;
  recpArr.push(recpObj);

  // Stringify and store the updated data
  localStorage.setItem("recpArr", JSON.stringify(recpArr));
};

// const removeFromDb = (id) => {
//   const shoppingCart = getShoppingCart();
//   if (id in shoppingCart) {
//     delete shoppingCart[id];
//     localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
//   }
// };

// const getShoppingCart = () => {
//   let shoppingCart = {};

//   //get the shopping cart from local storage
//   const storedCart = localStorage.getItem("shopping-cart");
//   if (storedCart) {
//     shoppingCart = JSON.parse(storedCart);
//   }
//   return shoppingCart;
// };

const getFromDb = () => {
  // Retrieve the array of objects from localStorage using localStorage.getItem()
  let recpArrStr = localStorage.getItem("recpArr");
  let recpArr = [];
  // Parse the array of objects using JSON.parse()
  if (recpArrStr) {
    recpArr = JSON.parse(recpArrStr);
  }
  return recpArr;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, getFromDb, deleteShoppingCart };
