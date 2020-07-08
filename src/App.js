import React, { useState } from 'react';
import ProductList from './components/ProductList';
import BtnCategories from './components/BtnCategories';

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

const PRODUCTS = [
  { category: "entertainment", name: "Football" },
  { category: "entertainment", name: "Baseball" },
  { category: "entertainment", name: "Basketball" },
  { category: "fashion", name: "iPod Touch" },
  { category: "design", name: "iPhone 5" },
  { category: "design", name: "Nexus 7" },
  { category: "leisure", name: "Holiday" }
];

const selectedItems = (selected, index, array) => array.indexOf(selected) === index;
const PRODUCT_CATEGORIES = PRODUCTS.map(product => product.category).filter(selectedItems);

PRODUCT_CATEGORIES.push('all').sort();