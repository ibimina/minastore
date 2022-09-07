

export  function utilis(cartCopy,dispatch) {

 let cartString = JSON.stringify(cartCopy);
 localStorage.setItem("addcart", cartString);

if (cartCopy.length >=1) {
  let getQuantity = [];
  cartCopy.forEach((element) => getQuantity.push(element.quantity));

  let totalQuantity = getQuantity.reduce((a, b) => a + b);
  let minatotalQuantity = JSON.stringify(totalQuantity);
  localStorage.setItem("quantity", minatotalQuantity);

  dispatch({ type: "ADD_ITEM", payload: totalQuantity });

  //update grandtotal price
  let getGrandtotalArr = [];
  cartCopy.forEach((element) =>
    getGrandtotalArr.push(element.quantity * element.price)
  );
  const getGrandTotal = getGrandtotalArr.reduce((a, b) => a + b);
   return getGrandTotal.toFixed(2);
}
let min=''
dispatch({ type: "ADD_ITEM", payload: min });
 localStorage.setItem("quantity", min);

}

