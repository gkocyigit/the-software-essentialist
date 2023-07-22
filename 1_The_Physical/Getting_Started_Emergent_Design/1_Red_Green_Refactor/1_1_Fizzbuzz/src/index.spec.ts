import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {

    it("should return string", () => {
        expect(typeof fizzbuzz(1)).toBe("string");
    });

    it("should return 'Fizz' when receive 3", () => {
        expect(fizzbuzz(3)).toBe("Fizz");
    });

    it("should return 'Buzz' when receive 5", () => {
        expect(fizzbuzz(5)).toBe("Buzz");
    });

});