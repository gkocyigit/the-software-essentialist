import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {

    it("should return a string", () => {
        expect(typeof fizzbuzz(1)).toBe("string");
    });

    it.each([3,9,42])("should return Fizz when given %i", (n) => {
        expect(fizzbuzz(n)).toBe("Fizz");
    });

    it("should return Buzz when given 5", () => {
        expect(fizzbuzz(5)).toBe("Buzz");
    });

    it("should return FizzBuzz when given 15", () => {
        expect(fizzbuzz(15)).toBe("FizzBuzz");
    });

    it("should return 43 when given 43", ()=>{
        expect(fizzbuzz(43)).toBe("43");
    })

    it("should return FizzBuzz when given 45", ()=>{
        expect(fizzbuzz(45)).toBe("FizzBuzz");
    });

    it.each([102,-12,"test"])("should throw error when given %i", (n)=>{
        expect(()=>fizzbuzz(n as any)).toThrowError();
    });

});
