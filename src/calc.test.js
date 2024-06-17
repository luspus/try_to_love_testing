import StringCalculatorTest from './calc';
// Requirement 1

test('If the input string is empty, the result should be 0', (): void  => {
  const result: StringCalculatorTest = new StringCalculatorTest('');
  expect(result.main()).toBe(0);
});

// Requirement 2
test('If string has a single number, the result should be the value of that number.', (): void => {
  const result1: StringCalculatorTest = new StringCalculatorTest('1');
  const result2: StringCalculatorTest = new StringCalculatorTest('321');
  expect(result1.main()).toBe(1);
  expect(result2.main()).toBe(321);
});

// Requirement 3
test('If the input string has two numbers separated by a comma, the result should be the sum of these two numbers.', (): void => {
  const result1: StringCalculatorTest = new StringCalculatorTest('1.2');
  const result2: StringCalculatorTest = new StringCalculatorTest('15.22');
  
  expect(result1.main()).toBe(3);
  expect(result2.main()).toBe(37);
})

// Requirement 4
test('If the input string has two numbers separated by a comma, the result should be the sum of these two numbers.', (): void => {
  const result1: StringCalculatorTest = new StringCalculatorTest('1.2.66');
  
  expect(result1.main()).toBe(69);
})
