import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {

    it("should return a string", () => {
        expect(typeof fizzbuzz(1)).toBe("string");
    });

    it("should return Fizz when given 3", () => {
        expect(fizzbuzz(3)).toBe("Fizz");
    });

    it("should return Buzz when given 5", () => {
        expect(fizzbuzz(5)).toBe("Buzz");
    });

    it("should return FizzBuzz when given 15", () => {
        expect(fizzbuzz(15)).toBe("FizzBuzz");
    });

    it("should return Fizz when given 9", () => {
        expect(fizzbuzz(9)).toBe("Fizz");
    });

    it("should return 43 when given 43", ()=>{
        expect(fizzbuzz(43)).toBe("43");
    })

    it("should return Fizz when given 42", ()=>{
        expect(fizzbuzz(42)).toBe("Fizz");
    });

    it("should return FizzBuzz when given 45", ()=>{
        expect(fizzbuzz(45)).toBe("FizzBuzz");
    });

});
