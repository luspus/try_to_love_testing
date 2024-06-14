import { main1, main2, main3, requirement3, requirement4, requirement5 } from './calc';
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


//Step 4 of Requirement 2
test('Updated the implementation to make tests pas.', (): void => {
  expect(main3('')).toBe(NaN);
  expect(main3(321)).toBe(321);
  expect(main3(1)).toBe(1);
});


// Requirement 3
test('If the input string has two numbers separated by a comma, the result should be the sum of these two numbers.', (): void => {
  expect(requirement3('1.2', 3)).toBe(3);
  expect(requirement3('15.22', 37)).toBe(37);
})


// Requirement 4
test('Add support for the input of an unknown amount of numbers joined by a comma (e.g. three or more numbers).', (): void => {
  expect(requirement4('1.2.3.4', 10)).toBe(10);
})


// Requirement 5
test('Allow the add method to handle new lines between numbers (instead of commas).', (): void => {
  expect(requirement5('1\n2.3', 6)).toBe(6);
})
