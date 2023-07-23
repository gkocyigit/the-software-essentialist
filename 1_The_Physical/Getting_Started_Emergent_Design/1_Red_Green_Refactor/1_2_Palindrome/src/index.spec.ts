import { palindromeChecker } from "./index"
describe('palindrome checker', () => {

    it.each([
        [true, 'mom'],
        [true, 'Mom'],
        [true, 'MoM'],
        [false, 'Momx'],
        [true, 'xMomx'],
        [true, 'Was It A Rat I Saw'],
    ])((`should return %s when given %s`), (expected,word) => {
        expect(palindromeChecker(word)).toBe(expected);
    });
})