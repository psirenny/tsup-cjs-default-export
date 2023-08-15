const foo = require("./dist/index.cjs");

console.log("foo === \"foo\":", foo === "foo");
console.log("foo.default === \"foo\":",  foo.default === "foo")
