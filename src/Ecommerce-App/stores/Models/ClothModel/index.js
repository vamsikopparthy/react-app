class ProductModel {
    productId;
    availableSizes;
    currencyFormat;
    currencyId;
    description;
    isFreeShipping;
    price;
    printStyle;
    title;
    imageURL;
    installments;
    
    constructor(productObject) {
        this.productId = Math.random();
        this.availableSizes = productObject.availableSizes;
        this.currencyFormat = productObject.currencyFormat;
        this.currencyId = productObject.currencyId;
        this.description = productObject.description;
        this.isFreeShipping = productObject.isFreeShipping;
        this.price = productObject.price;
        this.printStyle = productObject.style;
        this.title = productObject.title;
        this.imageURL = productObject.image;
        this.installments = productObject.installments;
    }
}

export default ProductModel;