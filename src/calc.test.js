const main = require('./calc');
test('If the input string is empty, the result should be 0', () => {
  expect(main('', 0)).toBe(0);
});


