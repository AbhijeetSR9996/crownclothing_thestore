import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';
// import PRODUCTSS from '../shop-data2.json';
// import PRODUCTSSS from '../shop-data3.json';
// import PRODUCTSSSS from '../shop-data4.json';

// export const ProductsContext = createContext({
//   products: [],
// });

export const ProductsContext = createContext({
  products: [],
  // productss:[],
  // productsss:[],
  // productssss:[],
});

// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState(PRODUCTS);
//   const value = { products };
//   return (
//     <ProductsContext.Provider value={value}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  // const [productss, setProductss] = useState(PRODUCTSS);
  // const [productsss, setProductsss] = useState(PRODUCTSSS);
  // const [productssss, setProductssss] = useState(PRODUCTSSSS);
  const value = { products };
  // const valuee = {productss};
  // const valueee = {productsss};
  // const valueeee = {productssss};
  return (
    <ProductsContext.Provider value={value} 
    // valuee={valuee} valueee={valueee} valueeee={valueeee}
    >
      {children}
    </ProductsContext.Provider>
  );
};
