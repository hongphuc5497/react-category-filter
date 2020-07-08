import React, { useState } from 'react';
import { ProductList, BtnCategories } from './components';
import { PRODUCTS, PRODUCT_CATEGORIES } from './data';

function App() {
  const [objProducts, setObjProducts] = useState({
    displayCategory: 'all',
    products: PRODUCTS,
    productCategories: PRODUCT_CATEGORIES
  })

  return (
    <div className="App">
      <div className="box flex-row">
        <div className="box flex-col">
          <h3>Filter by Category</h3>
          {BtnCategories(objProducts.productCategories, (category) => setObjProducts({ ...objProducts, displayCategory: category}))}
        </div>

        <div className="box flex-col">
          <h3>Result</h3>
          <ProductList products={objProducts.products} displayCategory={objProducts.displayCategory}/>
        </div>
      </div>   
    </div>
  );
}

export default App;