/**
 * How to run test:
 * 1) Install NodeJS
 * 2) Instal node_modules on repo: `npm i`
 * 3) Start test: `npm run test`
 */

module.exports = function reverse(n) {
  return Number(`${Math.abs(n)}`.split('').reverse().join(''));
};
