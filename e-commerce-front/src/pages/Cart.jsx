import React, { useState } from "react";
import "./Cart.scss";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "https://s.cdpn.io/3/dingo-dog-bones.jpg",
      title: "Dingo Dog Bones",
      description:
        "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",
      price: 12.99,
      quantity: 2,
      linePrice: 25.98,
    },
    {
      id: 2,
      image:
        "https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png",
      title: "Nutro™ Adult Lamb and Rice Dog Food",
      description:
        "Who doesn't like lamb and rice? We've all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it's your dog's turn!",
      price: 45.99,
      quantity: 1,
      linePrice: 45.99,
    },
    {
      id: 2,
      image:
        "https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png",
      title: "Nutro™ Adult Lamb and Rice Dog Food",
      description:
        "Who doesn't like lamb and rice? We've all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it's your dog's turn!",
      price: 45.99,
      quantity: 1,
      linePrice: 45.99,
    },
  ]);

  const taxRate = 0.05;
  const shippingRate = 15.0;
  const fadeTime = 300;

  const updateQuantity = (id, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        const linePrice = item.price * quantity;
        return { ...item, quantity, linePrice };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    recalculateCart();
  };

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    recalculateCart();
  };

  const recalculateCart = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.linePrice;
    });

    const tax = subtotal * taxRate;
    const shipping = subtotal > 0 ? shippingRate : 0;
    const total = subtotal + tax + shipping;

    // Update totals display
    const totalsValueElements = document.getElementsByClassName("totals-value");
    Array.from(totalsValueElements).forEach((element) => {
      element.style.display = "none";
    });

    document.getElementById("cart-subtotal").innerHTML = subtotal.toFixed(2);
    document.getElementById("cart-tax").innerHTML = tax.toFixed(2);
    document.getElementById("cart-shipping").innerHTML = shipping.toFixed(2);
    document.getElementById("cart-total").innerHTML = total.toFixed(2);

    if (total === 0) {
      document.getElementsByClassName("checkout")[0].style.display = "none";
    } else {
      document.getElementsByClassName("checkout")[0].style.display = "block";
    }

    Array.from(totalsValueElements).forEach((element) => {
      element.style.display = "inline-block";
      element.style.animation = "fadeIn " + fadeTime + "ms";
    });
  };

  // //////////////////////JSX/////////////////////

  return (
    <div className="cart-parent">
      <h1 className="h1-cart">Shopping Cart</h1>

      <div className="shopping-cart">
        <div className="column-labels">
          <label className="product-image">Image</label>
          <label className="product-details product-details-1">Product</label>
          <label className="product-price">Price</label>
          <label className="product-quantity">Quantity</label>
          <label className="product-removal">Remove</label>
          <label className="product-line-price">Total</label>
        </div>
        {cartItems.map((item) => (
          <div className="product" key={item.id}>
            <div className="product-image">
              <img src={item.image} alt="Product" />
            </div>
            <div className="product-details">
              <div className="product-title">{item.title}</div>
            </div>
            <div className="product-price product-price-1">{item.price.toFixed(2)}</div>
            <div className="product-quantity">
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
              />
            </div>
            <div className="product-removal">
              <button
                className="remove-product"
                onClick={() => removeItem(item.id)}
              >
                <MdDeleteForever />
              </button>
            </div>
            <div className="product-line-price product-line-price-1 ">
              {item.linePrice.toFixed(2)}
            </div>
          </div>
        ))}
        <div className="totals">
          <div className="totals-item">
            <label>Subtotal</label>
            <div className="totals-value" id="cart-subtotal">
              {cartItems
                .reduce((total, item) => total + item.linePrice, 0)
                .toFixed(2)}
            </div>
          </div>
          <div className="totals-item">
            <label>Tax</label>
            <div className="totals-value" id="cart-tax">
              0.00
            </div>
          </div>
          <div className="totals-item">
            <label>Shipping</label>
            <div className="totals-value" id="cart-shipping">
              0.00
            </div>
          </div>
          <div className="totals-item totals-item-total">
            <label> Total</label>
            <div className="totals-value" id="cart-total">
              0.00
            </div>
          </div>
        </div>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
