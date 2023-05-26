import React from "react";
import "./Checkout.scss";
const Checkout = () => {
  return (
    <>
      <div className="container-checkout">
        <div className="title-checkout">
          <h2 className="checkout-h1">Product Order Form</h2>
        </div>
        <div className="d-flex">
          <form className="form-checkout" action="" method="">
            <label>
              <span>
                First Name <span className="required">*</span>
              </span>
              <input type="text" name="fname" />
            </label>
            <label>
              <span>
                Last Name <span className="required">*</span>
              </span>
              <input type="text" name="lname" />
            </label>
         
            <label>
              <span>
                Country <span className="required">*</span>
              </span>
              <select name="selection">
                <option value="select">Select a country...</option>
                {/* Country options */}
              </select>
            </label>
            <label>
              <span>
                Street Address <span className="required">*</span>
              </span>
              <input
                type="text"
                name="houseadd"
                placeholder="House number and street name"
                required
              />
            </label>
            <label>
              <span>&nbsp;</span>
              <input
                type="text"
                name="apartment"
                placeholder="Apartment, suite, unit etc. (optional)"
              />
            </label>
            <label>
              <span>
                Town / City <span className="required">*</span>
              </span>
              <input type="text" name="city" />
            </label>
            <label>
              <span>
                State / County <span className="required">*</span>
              </span>
              <input type="text" name="state" />
            </label>

            <label>
              <span>
                Phone <span className="required">*</span>
              </span>
              <input type="tel" name="phone" />
            </label>
            <label>
              <span>
                Email Address <span className="required">*</span>
              </span>
              <input type="email" name="email" />
            </label>
          </form>
          <div className="Yorder">
            <table className="checkout-table">
              <tr>
                <th colSpan="2">Your order</th>
              </tr>
              <tr>
                <td>Product Name x 2(Qty)</td>
                <td>$88.00</td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td>$88.00</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free shipping</td>
              </tr>
            </table>
            <br />

            <div>
              <input type="radio" name="dbt" value="cd" /> Cash on Delivery
            </div>
            <button className="btn-checkout" type="button">Place Order</button>
          </div>
          {/* Yorder */}
        </div>
      </div>
    </>
  );
};

export default Checkout;
