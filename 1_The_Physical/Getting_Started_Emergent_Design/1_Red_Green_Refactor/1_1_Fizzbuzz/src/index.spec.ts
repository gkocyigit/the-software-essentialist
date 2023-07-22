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

    it("should return 'FizzBuzz' when receive 15", () => {
        expect(fizzbuzz(15)).toBe("FizzBuzz");
    });

    it("should return 'Fizz' when receive 9", () => {
        expect(fizzbuzz(9)).toBe("Fizz");
    });

    it('should return 43 when receive 43', () => {
        expect(fizzbuzz(43)).toBe("43");
    });

});