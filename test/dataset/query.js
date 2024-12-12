// Query a dataset for specific results.
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99, stock: 4 },
  { id: 2, name: "Phone", category: "Electronics", price: 599.99, stock: 10 },
  { id: 3, name: "Shirt", category: "Apparel", price: 29.99, stock: 50 },
  { id: 4, name: "Pants", category: "Apparel", price: 49.99, stock: 20 },
  { id: 5, name: "Shoes", category: "Apparel", price: 79.99, stock: 15 },
  { id: 6, name: "TV", category: "Electronics", price: 499.99, stock: 5 },
  {
    id: 7,
    name: "Headphones",
    category: "Electronics",
    price: 199.99,
    stock: 0,
  },
  { id: 8, name: "Jacket", category: "Apparel", price: 89.99, stock: 10 },
];

const fieldEquals = (field, value) =>
  products.filter((product) => {
    // TODO handle missing field
    // TODO strict equality
    // TODO partial match
    // TODO handle data types
    return product[field] === value;
  });
const findByCategory = (category) => fieldEquals("category", category);

const ASCENDING = "ascending";
const DESCENDING = "descending";

const sortByPrice = (direction) =>
  direction == ASCENDING
    ? products.sort((a, b) => b.price - a.price)
    : products.sort((a, b) => a.price - b.price);

const isOutOfStock = (product) => !product.stock;
const findOutOfStock = () => products.filter(isOutOfStock); // handle undefined, null, string

function getCategoryStockValue(category) {
  const sum = findByCategory(category).reduce(
    (sum, product) => sum + product.price * product.stock,
    0
  );

  return roundMoney(sum);
}

/**
 * find more expensive product names, sorted ascending
 * @param {float} price
 * @returns
 */
const findProductsGreaterThanPrice = (price) =>
  products
    .filter((product) => product.price > price)
    .map((product) => product.name)
    .sort();

/**
 * product count by category
 * @param {string} category
 * @returns number
 */
const countByCategory = (category) => findByCategory(category).length;

const totalCountsByCategory = () => {
  let totals = {};
  products.forEach((product) => {
    if (!totals[product.category])
      // there is a data structure for this.. i forget what its called
      totals[product.category] = 0;

    totals[product.category] += product.stock;
  });
  return totals;
};

/**
 * Round a price to two places.
 * concern: use money type to handle floating point lossy-precision
 * @param {float} amount Value
 * @returns float
 */
const roundMoney = (amount) => Math.round(amount * 100 + Number.EPSILON) / 100;

module.exports = {
  findByCategory,
  ASCENDING,
  DESCENDING,
  sortByPrice,
  findOutOfStock,
  getCategoryStockValue,
  findProductsGreaterThanPrice,
  countByCategory,
  totalCountsByCategory,
};
