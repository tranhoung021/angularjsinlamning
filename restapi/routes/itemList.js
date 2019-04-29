const express = require('express');
const route = express.Router();

route.get("/", (req, res, next) => {
    res.status(200).json([
        { id: 1, image: "https://via.placeholder.com/150", productname: "Product 1", quantity: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum.", price: 1500, rating: 2.3 },
        { id: 2, image: "https://via.placeholder.com/150", productname: "Product 2", quantity: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum.", price: 1000, rating: 4.4 },
        { id: 3, image: "https://via.placeholder.com/150", productname: "Product 3", quantity: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum.", price: 600, rating: 3.5 },
        { id: 4, image: "https://via.placeholder.com/150", productname: "Product 4", quantity: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum.", price: 500, rating: 4.4 },
        { id: 5, image: "https://via.placeholder.com/150", productname: "Product 5", quantity: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum.", price: 1400, rating: 1.2 },
        { id: 6, image: "https://via.placeholder.com/150", productname: "Product 6", quantity: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum.", price: 1200, rating: 3.4 },
        { id: 7, image: "https://via.placeholder.com/150", productname: "Product 7", quantity: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum.", price: 1400, rating: 3.2 },
        { id: 8, image: "https://via.placeholder.com/150", productname: "Product 8", quantity: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum.", price: 1400, rating: 2.6 },
        { id: 9, image: "https://via.placeholder.com/150", productname: "Product 9", quantity: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum.", price: 1400, rating: 4.7 },
        { id: 10, image: "https://via.placeholder.com/150", productname: "Product 10", quantity: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum.", price: 1400, rating: 1.6 }

    ]);
});

module.exports = route;
