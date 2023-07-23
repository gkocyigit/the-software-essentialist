import { palindromeChecker } from "./index"
describe('palindrome checker', () => {

    it.each([
        ['mom', true],
        ['Mom', true],
        ['MoM', true],
    ])((`should return true when given %s`), (word, expected) => {
        expect(palindromeChecker(word)).toBe(expected);
    });

    it('should return false when given "Momx"', () => {
        expect(palindromeChecker('Momx')).toBe(false);
    });

})