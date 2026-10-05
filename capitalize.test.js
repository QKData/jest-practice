import {capitalize} from "./capitalize.js"

test("Capitalize javascript to be Javascript", () => {
    expect(capitalize("javascript")).toBe("Javascript");
});