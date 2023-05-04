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
