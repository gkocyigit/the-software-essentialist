import { palindromeChecker } from "./index"
describe('palindrome checker', () => {

    it.each([
        [true, 'mom'],
        [true, 'Mom'],
        [true, 'MoM'],
        [false, 'Momx'],
        [true, 'xMomx'],
        [true, 'Was It A Rat I Saw'],
        [true, 'Never Odd Or Even'],
        [false, 'Never Odd Or Even1'],
        [true, '1Never Odd Or Even1'],
        [false, 'Never Even Or Odd'],
    ])((`should return %s when given %s`), (expected,word) => {
        expect(palindromeChecker(word)).toBe(expected);
    });
})