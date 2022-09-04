

export function getTotal(localcart,grandtotall) {
   let rent = [];
   localcart.forEach((element) => {
     return rent.push(element.quantity * element.price);
   });
   grandtotall = rent.reduce((a, b) => {
     return a + b;
   });
   return grandtotall
}

export function getTotall(localcart, grandtotall) {
  let rent = [];
  localcart.forEach((element) => {
    return rent.push(element.quantity * element.price);
  });
  grandtotall = rent.reduce((a, b) => {
    return a + b;
  });
  return grandtotall;
}
