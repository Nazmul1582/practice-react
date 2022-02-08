// 1. create a Context 
// 2. Provide a context value
// 3. Consum the context value

import React from 'react';
const ProductContext = React.createContext();

const ProductProvider = ProductContext.Provider;
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }
export default ProductContext;