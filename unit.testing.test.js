const {capitalize, reverseString, calculator, ceaserCipher, analyzeArray} = require('./unit.testing');



test('capitalize first word', () => {
  expect(capitalize("tilen")).toBe("Tilen");
});

test("Reverse a string", () => {
  expect(reverseString("Tilen")).toBe("neliT");
})

test("subtract", () => {
  expect(calculator.subtract(3, 1)).toBe(2);
})

test("add", () => {
  expect(calculator.add(3, 1)).toBe(4);
})

test("divide", () => {
  expect(calculator.divide(3, 1)).toBe(3);
})

test("multiply", () => {
  expect(calculator.multiply(3, 1)).toBe(3);
})

test("analyze array", () => {
  expect(analyzeArray([1, 3, 7, 12])).toEqual({
    average: 6,
    min: 1,
    max: 12,
    length: 4
  });
});

test("ceaser cipher", () => {
  expect(ceaserCipher("abc", 3)).toBe("def");
})

test("ceaser cipher", () => {
  expect(ceaserCipher("aBc", 3)).toBe("dEf");
})

test("ceaser cipher", () => {
  expect(ceaserCipher("xyz", 3)).toBe("abc");
})
