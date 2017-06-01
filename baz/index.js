const foo = require('@foo-bar-baz/foo');
const bar = require('@foo-bar-baz/bar');

console.log(foo);
console.log(bar);

module.exports = foo + bar + 'baz!';
