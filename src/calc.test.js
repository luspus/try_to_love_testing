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
