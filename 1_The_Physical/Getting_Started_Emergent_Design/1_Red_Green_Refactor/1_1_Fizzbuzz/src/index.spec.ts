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

    it("should return 'Fizz' when receive 42", () => {
        expect(fizzbuzz(42)).toBe("Fizz");
    });

    it("should return 'FizzBuzz' when receive 45", () => {
        expect(fizzbuzz(45)).toBe("FizzBuzz");
    });

    it("should throw error when recieve 102", () => {
        expect(() => fizzbuzz(102)).toThrowError();
    });

    it("should throw error when recieve -12", () => {
        expect(() => fizzbuzz(-12)).toThrowError();
    });

    it("should throw error when recieve non-number", () => {
        expect(() => fizzbuzz("Hello")).toThrowError();
    });

});