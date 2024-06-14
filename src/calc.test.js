import { main1, main2, main3 } from './calc';
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

// Requirement 3
test('Updated the implementation to make tests pas.', (): void => {
  expect(main3('')).toBe(NaN);
  expect(main3(321)).toBe(321);
  expect(main3(1)).toBe(1);
});
