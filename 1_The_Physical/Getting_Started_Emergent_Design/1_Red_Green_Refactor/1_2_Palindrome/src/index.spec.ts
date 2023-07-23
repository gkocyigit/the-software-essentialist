import { palindromeChecker } from "./index"
describe('palindrome checker', () => {

    it.each([
        [true, 'mom'],
        [true, 'Mom'],
        [true, 'MoM'],
        [false, 'Momx']
    ])((`should return %s when given %s`), (expected,word) => {
        expect(palindromeChecker(word)).toBe(expected);
    });
})