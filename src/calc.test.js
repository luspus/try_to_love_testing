const main1 = require('./calc');
const main2 = require('./calc');

// Requirement 1
test('If the input string is empty, the result should be 0', (): void => {
  expect(main1('', 0)).toBe(0);
});

// Requirement 2
test('If string has a single number, the result should be the value of that number.', (): void => {
  expect(main2('')).toBe(0);
  expect(main2(321)).toBe(-1);
  expect(main2(1)).toBe(-1);
});
