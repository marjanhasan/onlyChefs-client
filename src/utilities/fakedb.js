const addToDb = (chefId, recpId) => {
  let recpArr = [];
  recpArr = getFromDb();
  let recpObj = {};
  recpObj.chef = chefId;
  recpObj.recp = recpId;
  recpArr.push(recpObj);
  localStorage.setItem("recpArr", JSON.stringify(recpArr));
};

const getFromDb = () => {
  let recpArrStr = localStorage.getItem("recpArr");
  let recpArr = [];
  if (recpArrStr) {
    recpArr = JSON.parse(recpArrStr);
  }
  return recpArr;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, getFromDb, deleteShoppingCart };
