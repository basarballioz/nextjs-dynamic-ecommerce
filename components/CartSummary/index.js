import React from "react";

const CartSummary = ({ cartItems }) => {
  const groupedItems = cartItems.reduce((acc, item) => {
    if (acc[item.name]) {
      acc[item.name].quantity += 1;
    } else {
      acc[item.name] = { ...item, quantity: 1 };
    }
    return acc;
  }, {});

  const totalCartAmount = cartItems.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  const handleClearCart = () => {
    localStorage.removeItem("cartItems");
    window.location.reload();
  };

  return (
    <>
      <div className="cart-area">
        <div className="cart-sum mr-4">
          <h3 className="cart-sum-title">Cart Summary</h3>
          <ul>
            {Object.values(groupedItems).map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity}
              </li>
            ))}
          </ul>
          {totalCartAmount > 0 && (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 w-full"
              onClick={handleClearCart}
              style={{ backgroundColor: "red" }}
            >
              Clear Cart
            </button>
          )}
        </div>

        <div className="checkout-area mt-4">
          <h3 className="checkout-title">
            Total Price:
            <span className="cart-total ml-1">
              {totalCartAmount.toFixed(2)}$
            </span>
            <button className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2">
              Checkout
            </button>
          </h3>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
