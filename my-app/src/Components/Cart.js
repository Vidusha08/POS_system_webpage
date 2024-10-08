import React from "react";

const Cart = () => {
  return (
    // Cart details
    <div className="cart">
      <h2>Cart Details</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Line Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>

          </tr>
        </tbody>
      </table>
      <div style={{ textAlign: "center", background: "white" }}><p>Please Select Product Item</p>
      </div>
    </div>
  );
};

export default Cart;
