import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/product-card/product-card.component";
import Button from "../../components/button/button.component";
import {
  setActiveButton,
  setSearchTerm,
  applyFilters,
  resetFilters,
} from "../../features/products/productsSlice";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();
  const { filteredProducts, searchTerm, activeButton } = useSelector(
    (state) => state.products
  );

  const handleFilterClick = (button) => {
    dispatch(setActiveButton(button));
    dispatch(applyFilters());
  };

  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
    dispatch(applyFilters());
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <div style={{ flex: 1 }}>
      {/* Filter Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          paddingBottom: "10px",
        }}
      >
        {/* for STUFF Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "transparent",
            marginBottom: "12px",
          }}
        >
          <Button
            style={{
              fontSize: "100px",
              cursor: "default",
              pointerEvents: "none",
            }}
            buttonType={""}
            disabled
          >
            STUFF
          </Button>
        </div>
        {/* ---------X-----------*/}
        <Button
          onClick={() => handleFilterClick("cap")}
          //className={activeButton === "cap" ? "active" : ""}
          //buttonType="inverted"
          buttonType={activeButton === "cap" ? "default" : "inverted"}
          style={{ fontSize: "20px" }}
        >
          🧢
        </Button>
        <Button
          onClick={() => handleFilterClick("jacket")}
          //className={activeButton === "jacket" ? "active" : ""}
          //buttonType="inverted"
          buttonType={activeButton === "jacket" ? "default" : "inverted"}
          style={{ fontSize: "20px" }}
        >
          🧥
        </Button>
        <Button
          onClick={() => handleFilterClick("sneaker")}
          //className={activeButton === "sneaker" ? "active" : ""}
          //buttonType="inverted"
          buttonType={activeButton === "sneaker" ? "default" : "inverted"}
          style={{ fontSize: "20px" }}
        >
          👟
        </Button>
        <Button
          onClick={() => handleFilterClick("men")}
          //className={activeButton === "men" ? "active" : ""}
          //buttonType="inverted"
          buttonType={activeButton === "men" ? "default" : "inverted"}
          style={{ fontSize: "20px" }}
        >
          🚹
        </Button>
        <Button
          onClick={() => handleFilterClick("women")}
          //className={activeButton === "women" ? "active" : ""}
          //buttonType="inverted"
          buttonType={activeButton === "women" ? "default" : "inverted"}
          style={{ fontSize: "20px" }}
        >
          🚺
        </Button>
        <Button
          onClick={() => handleFilterClick("all")}
          //className={activeButton === "all" ? "active" : ""}
          style={{ fontFamily: "Open Sans Condensed" }}
          buttonType={activeButton === "all" ? "default" : "inverted"}
        >
          ALL
        </Button>
      </div>

      {/* Product List */}
      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <h3>No products found..!!</h3>
            <p>Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;


