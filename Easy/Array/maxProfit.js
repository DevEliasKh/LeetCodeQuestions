var maxProfit = function (prices) {
   let stock = false;
   let bPrice = 0;
   let sPrice = 0;
   let profit = 0;

   for (let i = 0; i < prices.length; i++) {
      if (!stock) {
         buy(i);
      } else {
         sell(i);
      }
   }

   return profit;

   function sell(i) {
      if (prices[i] < prices[i + 1]) {
         return;
      } else {
         sPrice = prices[i];
         stock = false;
         console.log("sPrice " + sPrice);
         profit = profit + (sPrice - bPrice);
         console.log("profit " + profit);
      }
   }

   function buy(i) {
      if (prices[i] > prices[i + 1]) {
         return;
      } else {
         bPrice = prices[i];
         stock = true;
         console.log("bPrice " + bPrice);
      }
   }
};
