import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS from "../../shop-data.json"; // Static product data

const initialState = {
  allProducts: PRODUCTS, // Original product list
  filteredProducts: PRODUCTS, // Filtered product list
  activeButton: "all", // Current active filter
  searchTerm: "", // Search input
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    applyFilters: (state) => {
      let filtered = [...state.allProducts];

      // Apply search term filter
      if (state.searchTerm.trim()) {
        filtered = filtered.filter(
          (product) =>
            product.name
              .toLowerCase()
              .includes(state.searchTerm.toLowerCase()) ||
            product.category
              .toLowerCase()
              .includes(state.searchTerm.toLowerCase()) ||
            product.gender
              .toLowerCase()
              .includes(state.searchTerm.toLowerCase())
        );
      }

      // Apply active button filter
      if (state.activeButton !== "all") {
        if (["cap", "jacket", "sneaker"].includes(state.activeButton)) {
          filtered = filtered.filter(
            (product) => product.category.toLowerCase() === state.activeButton
          );
        } else if (["men", "women"].includes(state.activeButton)) {
          filtered = filtered.filter(
            (product) => product.gender.toLowerCase() === state.activeButton
          );
        }
      }

      state.filteredProducts = filtered;
    },
    resetFilters: (state) => {
      state.searchTerm = "";
      state.activeButton = "all";
      state.filteredProducts = state.allProducts;
    },
  },
});

export const { setActiveButton, setSearchTerm, applyFilters, resetFilters } =
  productsSlice.actions;

export default productsSlice.reducer;
