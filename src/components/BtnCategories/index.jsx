import React from 'react';

const BtnCategory = ({ setCategory, category }) => (
  <button className={`btn-${category}`} onClick={() => setCategory(category)}>
    {category}
  </button>
)

const BtnCategories = (productCategories, setCategory) => {
  productCategories.map(category => (
    <BtnCategory key={category} category={category} setCategory={setCategory}/>
  ))
}

export default BtnCategories;

