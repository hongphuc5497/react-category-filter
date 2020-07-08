import React from "react";

const ProductItem = ({ category, name }) => {
	return (
		<div className="category__list-item box flex-spread">
			{name}
			<div className={`category--${category} circle`} />
		</div>
	);
};

const ProductList = ({ products, displayCategory }) => {
	return (
		<div>
			{products
				.filter(
					({ category }) =>
						displayCategory === category || displayCategory === "all"
				)
				.map(({ category, name }) => (
					<ProductItem
						key={`ProductList-${name}`}
						category={category}
						name={name}
					/>
				))}
		</div>
	);
};

export default ProductList;