import StringCalculatorTest from './calc';
// Requirement 1

test('If the input string is empty, the result should be 0', (): void  => {
  const result: StringCalculatorTest = new StringCalculatorTest('');
  expect(result.main()).toBe(0);
});
