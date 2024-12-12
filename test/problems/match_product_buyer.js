/*
You are given two arrays:

    products: An array of product objects, where each product has:
        id (number): A unique product identifier.
        name (string): The name of the product.
        price (number): The price of the product.

    buyers: An array of buyer objects, where each buyer has:
        id (number): A unique buyer identifier.
        name (string): The name of the buyer.
        budget (number): The maximum amount the buyer is willing to spend.

Write a function matchProductsToBuyers(products, buyers) that:

    Matches each buyer to the most expensive product they can afford (if any).
    Returns an array of objects, where each object represents a match in the format:

    { buyerName: string, productName: string | null }

        If a buyer cannot afford any product, the productName should be null.

Constraints:

    Each product and buyer has a unique id.
    A buyer can afford at most one product (the most expensive one within their budget).
    The products and buyers arrays will each have at most 10^3 elements.
*/

// Input
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Book", price: 20 },
];

const buyers = [
  { id: 1, name: "Alice", budget: 600 },
  { id: 2, name: "Bob", budget: 1500 },
  { id: 3, name: "Charlie", budget: 10 },
];

// Output
// matchProductsToBuyers(products, buyers);
// Returns:
// [
//   { buyerName: "Alice", productName: "Phone" },
//   { buyerName: "Bob", productName: "Laptop" },
//   { buyerName: "Charlie", productName: null }
// ]

function matchProductsToBuyers(products, buyers) {
  const matches = [];
  for (let buyer of buyers) {
    let match = null;
    for (let product of products) {
      if (
        buyer.budget >= product.price &&
        (!match || product.price >= match.price)
      ) {
        match = product;
      }
    }
    matches.push({
      buyerName: buyer.name,
      productName: match ? match.name : null,
    });
  }
  return matches;
}

const assert = require("assert");

describe("matchProductsToBuyers", () => {
  it("example", () => {
    const expected = [
      { buyerName: "Alice", productName: "Phone" },
      { buyerName: "Bob", productName: "Laptop" },
      { buyerName: "Charlie", productName: null },
    ];
    assert.deepEqual(matchProductsToBuyers(products, buyers), expected);
  });
});
