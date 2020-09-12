const Cart = require("../models/cart");

exports.addItemToCard = (req, res) => {
  Cart.findOne({ user: req.user._id }).exec((error, cart) => {
    if (error) return res.status(400).json({ error });
    if (cart) {
      //if cart already exist update cart by quantity
      const product = req.body.cartItems.product;
      const isItemAdded = cart.cartItems.find((c) => c.product == product);
      if (isItemAdded) {
        Cart.findOneAndUpdate(
          { user: req.user._id, "cartItems.product": product },
          {
            "$set": {
              "cartItems": {
                ...req.body.cartItems,
                quantity: isItemAdded.quantity + req.body.cartItems.quantity,
              },
            },
          }
        ).exec((error, _cart) => {
          if (error) return res.status(400).json({ error });
          if (_cart) {
            res.status(201).json({ cart: _cart });
          }
        });
      } else {
        Cart.findOneAndUpdate(
          { user: req.user._id },
          {
            "$push": {
              "cartItems": req.body.cartItems,
            },
          }
        ).exec((error, _cart) => {
          if (error) return res.status(400).json({ error });
          if (_cart) {
            res.status(201).json({ cart: _cart });
          }
        });
      }
    } else {
      //if cart not exist create a new cart
      const cart = new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItems],
      });
      cart.save((error, cart) => {
        if (error) {
          return res.status(400).json({ error });
        }
        if (cart) {
          res.status(200).json({ cart });
        }
      });
    }
  });
};
