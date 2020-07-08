export const PRODUCTS = [
  { category: "entertainment", name: "Football" },
  { category: "entertainment", name: "Baseball" },
  { category: "entertainment", name: "Basketball" },
  { category: "fashion", name: "iPod Touch" },
  { category: "design", name: "iPhone 5" },
  { category: "design", name: "Nexus 7" },
  { category: "leisure", name: "Holiday" }
];

export const PRODUCT_CATEGORIES = PRODUCTS
                                        .map(product => product.category)
                                        .filter((selected, index, array) => array.indexOf(selected) === index);

PRODUCT_CATEGORIES.push('all');
PRODUCT_CATEGORIES.sort();