// Input
const users = [
  { id: 1, name: "Alice", age: 25, active: true },
  { id: 2, name: "Bob", age: 17, active: true },
  { id: 3, name: "Charlie", age: 19, active: false },
  { id: 4, name: "Diana", age: 22, active: true },
];

function filterAndTransform(users) {
  const u = users.filter((user) => user.active && user.age >= 18);

  const out = [];
  u.forEach((user) => {
    // "<name> (id: <id>)"
    out.push(`${user.name} (id: ${user.id})`);
  });
  return out;
}

const assert = require("assert");

describe("filterAndTransform", () => {
  it("handles example", () => {
    assert.deepEqual(filterAndTransform(users), [
      "Alice (id: 1)",
      "Diana (id: 4)",
    ]);
  });
});
