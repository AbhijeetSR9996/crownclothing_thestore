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
      {/* for BUY NOW/LATER Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
          marginLeft: "-1050px",
          //marginRight: "110px",
          rotate: "270deg",
          //top: "220px",
          marginTop: "80px",
          marginBottom: "-100px",
          //padding: "-100px",
        }}
      >
        <Button
          style={{
            fontSize: "95px",
            cursor: "default",
            pointerEvents: "none",
          }}
          buttonType={""}
          disabled
        >
          BUY LATER
        </Button>
      </div>
      {/* ---------X-----------*/}
      {cartTotal ? (
        <>
          <div className="checkout-header">
            <div className="header-block">
              <span>PRODUCT</span>
            </div>
            <div className="header-block">
              <span>DESCRIPTION</span>
            </div>
            <div className="header-block">
              <span>QUANTITY</span>
            </div>
            <div className="header-block">
              <span>ITEM PRICE</span>
            </div>
            <div className="header-block">
              <span>REMOVE</span>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <div className="total">
            TOTAL AMOUNT: &#x20B9;{cartTotal}
            <div>&nbsp;</div>
            {/* BUY NOW & BUY LATER */}
            <div className="total" style={{ marginLeft: "200px" }}>
              <Button type="submit" onClick={() => setIsOpenNow(true)}>
                BUY NOW
              </Button>
            </div>
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
                  <Button onClick={handleCloseAndClearCart}>
                    GO TO HOMEPAGE
                  </Button>
                </center>
              </div>
            )}
            <div className="total" style={{ marginTop: "-50px" }}>
              <Button
                buttonType="inverted"
                type="button"
                onClick={() => setIsOpenLater(true)}
              >
                BUY LATER
              </Button>
            </div>
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
                  <Button onClick={handleCloseAndClearCart}>
                    GO TO HOMEPAGE
                  </Button>
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
      {/* for BUY NOW/LATER Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
          marginRight: "-1100px",
          //marginRight: "110px",
          rotate: "90deg",
          //top: "220px",
          marginTop: "-100px",
          marginBottom: "-30px",
          //padding: "-100px",
        }}
      >
        <Button
          style={{
            fontSize: "95px",
            cursor: "default",
            pointerEvents: "none",
          }}
          buttonType={""}
          disabled
        >
          BUY NOW
        </Button>
      </div>
      {/* ---------X-----------*/}
    </div>
  );
};

export default Checkout;
