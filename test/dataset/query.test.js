const assert = require('assert');
const query = require('./query');

describe('query a dataset', () => {

  it('returns all products in the "Electronics" category', () => {
    assert.deepEqual(query.findByCategory('Electronics'), [
      { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 4 },
      { id: 2, name: 'Phone', category: 'Electronics', price: 599.99, stock: 10 },
      { id: 6, name: 'TV', category: 'Electronics', price: 499.99, stock: 5 },
      { id: 7, name: 'Headphones', category: 'Electronics', price: 199.99, stock: 0 },
    ])
  });

  it('returns all products sorted by price in ascending order', () => {
    assert.deepEqual(query.sortByPrice(query.ASCENDING), [
      { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 4 },
      { id: 2, name: 'Phone', category: 'Electronics', price: 599.99, stock: 10 },
      { id: 6, name: 'TV', category: 'Electronics', price: 499.99, stock: 5 },
      { id: 7, name: 'Headphones', category: 'Electronics', price: 199.99, stock: 0 },
      { id: 8, name: 'Jacket', category: 'Apparel', price: 89.99, stock: 10 },
      { id: 5, name: 'Shoes', category: 'Apparel', price: 79.99, stock: 15 },
      { id: 4, name: 'Pants', category: 'Apparel', price: 49.99, stock: 20 },
      { id: 3, name: 'Shirt', category: 'Apparel', price: 29.99, stock: 50 }
    ])
  })

  it('sort products by "price" desc', () => {
    assert.deepEqual(query.sortByPrice(query.DESCENDING), [
      { id: 3, name: 'Shirt', category: 'Apparel', price: 29.99, stock: 50 },
      { id: 4, name: 'Pants', category: 'Apparel', price: 49.99, stock: 20 },
      { id: 5, name: 'Shoes', category: 'Apparel', price: 79.99, stock: 15 },
      { id: 8, name: 'Jacket', category: 'Apparel', price: 89.99, stock: 10 },
      { id: 7, name: 'Headphones', category: 'Electronics', price: 199.99, stock: 0 },
      { id: 6, name: 'TV', category: 'Electronics', price: 499.99, stock: 5 },
      { id: 2, name: 'Phone', category: 'Electronics', price: 599.99, stock: 10 },
      { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 4 }
    ])
  })

  it('returns the names of all products that are out of stock(i.e., have a stock of 0)', () => {
    assert.deepEqual(query.findOutOfStock(), [
      { id: 7, name: 'Headphones', category: 'Electronics', price: 199.99, stock: 0 }
    ])
  })

  it('calculates the total value of all products in the "Apparel" category (price * stock)', () => {
    assert.equal(query.getCategoryStockValue("Electronics"), 12_499.81)
    assert.equal(query.getCategoryStockValue("Apparel"), 4_599.05)
  })

  it('returns an array of product names that are priced above $50, sorted alphabetically', () => {
    assert.deepEqual(query.findProductsGreaterThanPrice(50), ['Headphones', 'Jacket', 'Laptop', 'Phone', 'Shoes', 'TV'])
  })

  it('returns the number of products in each category. The result should be an object with categories as keys and the number of products as values', () => {
    assert.equal(query.countByCategory("Electronics"), 4)
    assert.equal(query.countByCategory("Apparel"), 4)
  })

  it('returns all categories with counts {category:total}', () => {
    assert.deepEqual(query.totalCountsByCategory("Electronics"), {
      Apparel: 95,
      Electronics: 19
    })
  })

})
