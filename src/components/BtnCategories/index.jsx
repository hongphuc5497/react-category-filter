import React from "react";

const BtnCategories = (productCategories, setCategory) => 
	productCategories.map(category => (
		<button
			key={category}
			className={`btn-${category}`}
			onClick={() => setCategory(category)}
		>
			{category}
		</button>
	));

export default BtnCategories;