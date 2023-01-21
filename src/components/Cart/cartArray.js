let cartItems = [];
cartItems = localStorage.setItem("cartItems", [{
        itemID: "1",
        itemName: "Item 1",
        price: "price 1",
        orderQnty: 1,
    },
    {
        itemID: "2",
        itemName: "Item 2",
        price: "price 2",
        orderQnty: 2,
    },
    {
        itemID: "3",
        itemName: "Item 3",
        price: "Price 3",
        orderQnty: 3,
    },
]);

export default cartItems;