module.exports={

    getOfferPrice(originalPrice, discountPercentage) {
        if (originalPrice < 0 || discountPercentage < 0 || discountPercentage > 100) {
            return originalPrice;
        }
    
        const discount = (originalPrice * discountPercentage) / 100;
        const offerPrice = originalPrice - discount;
        return offerPrice;
    },

   calculateTotalCost(products) {
        return products.reduce((total, product) => {
          return (total + (product.discountPrice * product.quantity))
        }, 0);
      },

  indianRs(x) {
        return x.toString().split('.')[0].length > 3 ? x.toString().substring(0,x.toString().split('.')[0].length-3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + x.toString().substring(x.toString().split('.')[0].length-3): x.toString();
    }

  

}