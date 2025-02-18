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
      {/* Search Bar */}
      {/* <div
        style={{
          display: "flex",
          marginBottom: "20px",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: "10px",
            width: "80%",
            maxWidth: "300px",
            border: "1px solid #ccc",
          }}
        />
        <Button
          onClick={handleReset}
          style={{ fontFamily: "Open Sans Condensed" }}
        >
          RESET
        </Button>
      </div> */}

      {/* Filter Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          paddingBottom: "10px",
        }}
      >
        <Button
          onClick={() => handleFilterClick("cap")}
          className={activeButton === "cap" ? "active" : ""}
        >
          🧢
        </Button>
        <Button
          onClick={() => handleFilterClick("jacket")}
          className={activeButton === "jacket" ? "active" : ""}
        >
          🧥
        </Button>
        <Button
          onClick={() => handleFilterClick("sneaker")}
          className={activeButton === "sneaker" ? "active" : ""}
        >
          👟
        </Button>
        <Button
          onClick={() => handleFilterClick("men")}
          className={activeButton === "men" ? "active" : ""}
        >
          🚹
        </Button>
        <Button
          onClick={() => handleFilterClick("women")}
          className={activeButton === "women" ? "active" : ""}
        >
          🚺
        </Button>
        <Button
          onClick={() => handleFilterClick("all")}
          className={activeButton === "all" ? "active" : ""}
          style={{ fontFamily: "Open Sans Condensed" }}
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

// import { useState, useEffect } from "react";
// import ProductCard from "../../components/product-card/product-card.component";
// import "./shop.styles.scss";
// import Button from "../../components/button/button.component";
// import PRODUCTS from "../../shop-data.json"; // Assuming static JSON data

// const Shop = () => {
//   const [products] = useState(PRODUCTS); // All products (static)
//   const [filteredProducts, setFilteredProducts] = useState(PRODUCTS); // Products to display
//   const [searchTerm, setSearchTerm] = useState(""); // Search input
//   const [activeButton, setActiveButton] = useState("all"); // Currently active filter

//   // Function to filter products
//   const applyFilters = () => {
//     let filtered = [...products]; // Work on a copy of the product list

//     // Filter by search term
//     if (searchTerm.trim()) {
//       filtered = filtered.filter(
//         (product) =>
//           product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           product.gender.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     // Apply category or gender filters
//     if (activeButton !== "all") {
//       if (["cap", "jacket", "sneaker"].includes(activeButton)) {
//         filtered = filtered.filter(
//           (product) => product.category.toLowerCase() === activeButton
//         );
//       } else if (["men", "women"].includes(activeButton)) {
//         filtered = filtered.filter(
//           (product) => product.gender.toLowerCase() === activeButton
//         );
//       }
//     }

//     setFilteredProducts(filtered);
//   };

//   // Apply filters whenever searchTerm or activeButton changes
//   useEffect(() => {
//     applyFilters();
//   }, [searchTerm, activeButton]);

//   // Reset filters
//   const resetFilters = () => {
//     setSearchTerm("");
//     setActiveButton("all");
//     setFilteredProducts(products); // Reset to all products
//   };

//   return (
//     <div style={{ flex: 1 }}>
//       {/* Search Bar */}
//       <div
//         style={{
//           display: "flex",
//           marginBottom: "20px",
//           gap: "10px",
//           justifyContent: "center",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search for products..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "80%",
//             maxWidth: "300px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <Button
//           onClick={applyFilters}
//           style={{ fontFamily: "Open Sans Condensed" }}
//         >
//           SEARCH
//         </Button>
//         <Button
//           onClick={resetFilters}
//           style={{ fontFamily: "Open Sans Condensed" }}
//         >
//           RESET
//         </Button>
//       </div>

//       {/* Filter Buttons */}
//       <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
//         <Button
//           onClick={() => setActiveButton("cap")}
//           className={activeButton === "cap" ? "active" : ""}
//         >
//           🧢
//         </Button>
//         <Button
//           onClick={() => setActiveButton("jacket")}
//           className={activeButton === "jacket" ? "active" : ""}
//         >
//           🧥
//         </Button>
//         <Button
//           onClick={() => setActiveButton("sneaker")}
//           className={activeButton === "sneaker" ? "active" : ""}
//         >
//           👟
//         </Button>
//         <Button
//           onClick={() => setActiveButton("men")}
//           className={activeButton === "men" ? "active" : ""}
//         >
//           🚹
//         </Button>
//         <Button
//           onClick={() => setActiveButton("women")}
//           className={activeButton === "women" ? "active" : ""}
//         >
//           🚺
//         </Button>
//         <Button
//           onClick={() => setActiveButton("all")}
//           className={activeButton === "all" ? "active" : ""}
//         >
//           All
//         </Button>
//       </div>

//       {/* Product List */}
//       <div className="products-container">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))
//         ) : (
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "50vh",
//             }}
//           >
//             <h3>No products found..!!</h3>
//             <p>Try adjusting your search or filter criteria.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Shop;

// // import { useState, useEffect } from "react";
// // import ProductCard from "../../components/product-card/product-card.component";
// // import "./shop.styles.scss";
// // import Button from "../../components/button/button.component";
// // import PRODUCTS from "../../shop-data.json"; // Assuming static JSON data

// // const Shop = () => {
// //   const [products] = useState(PRODUCTS); // All products
// //   const [filteredProducts, setFilteredProducts] = useState(PRODUCTS); // Displayed products
// //   const [activeButton, setActiveButton] = useState("all"); // Active filter button
// //   const [searchTerm, setSearchTerm] = useState(""); // Search term

// //   // Update filters dynamically
// //   const applyFilters = () => {
// //     let filtered = products;

// //     // Filter by search term
// //     if (searchTerm.trim()) {
// //       filtered = filtered.filter(
// //         (product) =>
// //           product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //           product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //           product.gender.toLowerCase().includes(searchTerm.toLowerCase())
// //       );
// //     }

// //     // Apply additional filters based on the active button
// //     if (activeButton !== "all") {
// //       if (["caps", "jackets", "sneakers"].includes(activeButton)) {
// //         filtered = filtered.filter(
// //           (product) => product.category.toLowerCase() === activeButton
// //         );
// //       } else if (["men", "women"].includes(activeButton)) {
// //         filtered = filtered.filter(
// //           (product) => product.gender.toLowerCase() === activeButton
// //         );
// //       }
// //     }

// //     setFilteredProducts(filtered);
// //   };

// //   // Re-apply filters when search term or active button changes
// //   useEffect(() => {
// //     applyFilters();
// //   }, [searchTerm, activeButton]);

// //   // Reset all filters
// //   const resetFilters = () => {
// //     setSearchTerm("");
// //     setActiveButton("all");
// //   };

// //   return (
// //     <div style={{ flex: 1 }}>
// //       {/* Search Bar */}
// //       <div
// //         style={{
// //           display: "flex",
// //           marginBottom: "20px",
// //           gap: "10px",
// //           justifyContent: "center",
// //         }}
// //       >
// //         <input
// //           type="text"
// //           placeholder="Search for products..."
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           style={{
// //             padding: "10px",
// //             width: "80%",
// //             maxWidth: "300px",
// //             border: "1px solid #ccc",
// //           }}
// //         />
// //         <Button
// //           onClick={applyFilters}
// //           style={{ fontFamily: "Open Sans Condensed" }}
// //         >
// //           SEARCH
// //         </Button>
// //         <Button
// //           onClick={resetFilters}
// //           style={{ fontFamily: "Open Sans Condensed" }}
// //         >
// //           RESET
// //         </Button>
// //       </div>

// //       {/* Filter Buttons */}
// //       <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
// //         <Button
// //           onClick={() => setActiveButton("cap")}
// //           className={activeButton === "cap" ? "active" : ""}
// //         >
// //           Caps
// //         </Button>
// //         <Button
// //           onClick={() => setActiveButton("jacket")}
// //           className={activeButton === "jacket" ? "active" : ""}
// //         >
// //           Jackets
// //         </Button>
// //         <Button
// //           onClick={() => setActiveButton("sneaker")}
// //           className={activeButton === "sneaker" ? "active" : ""}
// //         >
// //           Sneakers
// //         </Button>
// //         <Button
// //           onClick={() => setActiveButton("men")}
// //           className={activeButton === "men" ? "active" : ""}
// //         >
// //           Men
// //         </Button>
// //         <Button
// //           onClick={() => setActiveButton("women")}
// //           className={activeButton === "women" ? "active" : ""}
// //         >
// //           Women
// //         </Button>
// //         <Button
// //           onClick={() => setActiveButton("all")}
// //           className={activeButton === "all" ? "active" : ""}
// //         >
// //           All
// //         </Button>
// //       </div>

// //       {/* Product List */}
// //       <div className="products-container">
// //         {filteredProducts.length > 0 ? (
// //           filteredProducts.map((product) => (
// //             <ProductCard key={product.id} product={product} />
// //           ))
// //         ) : (
// //           <div
// //             style={{
// //               display: "flex",
// //               flexDirection: "column",
// //               justifyContent: "center",
// //               alignItems: "center",
// //               height: "50vh",
// //             }}
// //           >
// //             <h3>No products found..!!</h3>
// //             <p>Try adjusting your search or filter criteria.</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Shop;

// // import { useState, useEffect } from "react";
// // import ProductCard from "../../components/product-card/product-card.component";
// // import "./shop.styles.scss";
// // import Button from "../../components/button/button.component";
// // import PRODUCTS from "../../shop-data.json"; // Assuming static JSON data

// // const Shop = () => {
// //   const [products, setProducts] = useState(PRODUCTS); // All products
// //   const [filteredProducts, setFilteredProducts] = useState(PRODUCTS); // Displayed products
// //   const [activeButton, setActiveButton] = useState("all"); // Active filter button
// //   const [searchTerm, setSearchTerm] = useState(""); // Search term

// //   // Update filters dynamically
// //   const applyFilters = () => {
// //     let filtered = products;

// //     // Filter by search term
// //     if (searchTerm.trim()) {
// //       filtered = filtered.filter(
// //         (product) =>
// //           product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //           product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //           product.gender.toLowerCase().includes(searchTerm.toLowerCase())
// //       );
// //     }

// //     // Apply additional filters based on the active button
// //     if (activeButton !== "all") {
// //       if (["caps", "jackets", "sneakers"].includes(activeButton)) {
// //         filtered = filtered.filter(
// //           (product) => product.category.toLowerCase() === activeButton
// //         );
// //       } else if (["men", "women"].includes(activeButton)) {
// //         filtered = filtered.filter(
// //           (product) => product.gender.toLowerCase() === activeButton
// //         );
// //       }
// //     }

// //     setFilteredProducts(filtered);
// //   };

// //   // Re-apply filters when search term or active button changes
// //   useEffect(() => {
// //     applyFilters();
// //   }, [searchTerm, activeButton]);

// //   // Reset all filters
// //   const resetFilters = () => {
// //     setSearchTerm("");
// //     setActiveButton("all");
// //   };

// //   return (
// //     <div style={{ flex: 1 }}>
// //       {/* Search Bar */}
// //       <div
// //         style={{
// //           display: "flex",
// //           marginBottom: "20px",
// //           gap: "10px",
// //           justifyContent: "center",
// //         }}
// //       >
// //         <input
// //           type="text"
// //           placeholder="Search for products..."
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           style={{
// //             padding: "10px",
// //             width: "80%",
// //             maxWidth: "300px",
// //             border: "1px solid #ccc",
// //           }}
// //         />
// //         <Button
// //           onClick={applyFilters}
// //           style={{ fontFamily: "Open Sans Condensed" }}
// //         >
// //           SEARCH
// //         </Button>
// //         <Button
// //           onClick={resetFilters}
// //           style={{ fontFamily: "Open Sans Condensed" }}
// //         >
// //           RESET
// //         </Button>
// //       </div>

// //       {/* Filter Buttons */}
// //       <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
// //         <Button
// //           onClick={() => setActiveButton("caps")}
// //           className={activeButton === "caps" ? "active" : ""}
// //         >
// //           Caps
// //         </Button>
// //         <Button
// //           onClick={() => setActiveButton("jackets")}
// //           className={activeButton === "jackets" ? "active" : ""}
// //         >
// //           Jackets
// //         </Button>
// //         <Button
// //           onClick={() => setActiveButton("sneakers")}
// //           className={activeButton === "sneakers" ? "active" : ""}
// //         >
// //           Sneakers
// //         </Button>
// //         <Button
// //           onClick={() => setActiveButton("men")}
// //           className={activeButton === "men" ? "active" : ""}
// //         >
// //           Men
// //         </Button>
// //         <Button
// //           onClick={() => setActiveButton("women")}
// //           className={activeButton === "women" ? "active" : ""}
// //         >
// //           Women
// //         </Button>
// //         <Button
// //           onClick={() => setActiveButton("all")}
// //           className={activeButton === "all" ? "active" : ""}
// //         >
// //           All
// //         </Button>
// //       </div>

// //       {/* Product List */}
// //       <div className="products-container">
// //         {filteredProducts.length > 0 ? (
// //           filteredProducts.map((product) => (
// //             <ProductCard key={product.id} product={product} />
// //           ))
// //         ) : (
// //           <div
// //             style={{
// //               display: "flex",
// //               flexDirection: "column",
// //               justifyContent: "center",
// //               alignItems: "center",
// //               height: "50vh",
// //             }}
// //           >
// //             <h3>No products found..!!</h3>
// //             <p>Try adjusting your search or filter criteria.</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Shop;
