class MyCart {
    cartArray = [];
    getCartArray() {
        return this.cartArray;
    }
    constructor() {}

    setItemInCart(item) {
        this.cartArray.push(item);
        let total = this.getTotalCost();
        total += parseInt(item.price) * item.orderQnty;

        this.setCartTotalPrice(total);
    }
    getTotalCost() {
        return parseInt(localStorage.getItem("totalCartItemCost"));
    }
    setCartTotalPrice(totalPrice) {
        localStorage.setItem("totalCartItemCost", totalPrice);
    }

    saveCart() {
        localStorage.setItem("myCartItems", this.cartArray);
    }
}