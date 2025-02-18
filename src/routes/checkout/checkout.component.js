import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Button from "../../components/button/button.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal, clearCart, setIsCartOpen } =
    useContext(CartContext); // Get setIsCartOpen from context
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [isOpenLater, setIsOpenLater] = useState(false);

  const navigate = useNavigate();

  const goToShop = () => {
    navigate("/shop");
  };

  const handleCloseAndClearCart = () => {
    setIsOpenNow(false);
    setIsOpenLater(false);
    clearCart(); // Clear the cart
    setIsCartOpen(false); // Close the dropdown cart
    navigate("/");
  };

  return (
    <div className="checkout-container">
      {cartTotal ? (
        <>
          <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block">
              <span>Description</span>
            </div>
            <div className="header-block">
              <span>Quantity</span>
            </div>
            <div className="header-block">
              <span>Price per item</span>
            </div>
            <div className="header-block">
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <div className="total">
            TOTAL AMOUNT: &#x20B9;{cartTotal}
            <Button onClick={() => setIsOpenNow(true)}>BUY NOW</Button>
            <div>&nbsp;</div>
            {isOpenNow && (
              <div
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: "50px",
                  backgroundColor: "white",
                  border: "3px solid black",
                  zIndex: 1000,
                }}
              >
                <h4>Payment Successful..!!</h4>
                <center>
                  <button onClick={handleCloseAndClearCart}>
                    TAKE ME TO HOMEPAGE
                  </button>
                </center>
              </div>
            )}
            <Button buttonType="inverted" onClick={() => setIsOpenLater(true)}>
              BUY LATER
            </Button>
            {isOpenLater && (
              <div
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  padding: "50px",
                  backgroundColor: "white",
                  border: "3px solid black",
                  zIndex: 1000,
                }}
              >
                <h4>Items are moved to Saved Items List.</h4>
                <center>
                  <button onClick={handleCloseAndClearCart}>
                    TAKE ME TO HOMEPAGE
                  </button>
                </center>
              </div>
            )}
          </div>
        </>
      ) : (
        <div>
          &nbsp;
          <Button onClick={goToShop}>YOUR CART IS EMPTY!! SHOP NOW</Button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
