
export function fizzbuzz(n: number): string {
    let result = "";
    if (n % 3 === 0) result += "Fizz";
    if (n % 5 === 0) result += "Buzz";
    if (result.length > 0) return result;
    return n.toString();
}