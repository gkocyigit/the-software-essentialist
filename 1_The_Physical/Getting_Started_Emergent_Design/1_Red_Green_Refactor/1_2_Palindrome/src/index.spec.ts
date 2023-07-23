import { palindromeChecker } from "./index"
describe('palindrome checker', () => {

    it("should return true when given mom", () => {
        expect(palindromeChecker("mom")).toBe(true)
    })

})