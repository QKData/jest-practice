import {capitalize, reverseString, Calculator} from "./practice.js"

test("Capitalize javascript to be Javascript", () => {
    expect(capitalize("javascript")).toBe("Javascript");
});

test("Reverse javascript to be tpircsavaj", () => {
    expect(reverseString("javascript")).toBe("tpircsavaj");
});

test("Add 2 numbers", () => {
    expect(Calculator.add(1, 2)).toBe(3);
});

test("Subtract 2 numbers", () => {
    expect(Calculator.subtract(2, 1)).toBe(1);
});

test("Devide 2 numbers", () => {
    expect(Calculator.devide(6, 3)).toBe(2);
    expect(Calculator.devide(3, 0)).toBe("y cannot equal zero");
});

test("Multiply 2 numbers", () => {
    expect(Calculator.multiply(3, 2)).toBe(6);
});