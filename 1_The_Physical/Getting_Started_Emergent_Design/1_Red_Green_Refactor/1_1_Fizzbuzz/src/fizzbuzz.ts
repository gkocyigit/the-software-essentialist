
export function fizzbuzz(n: number): string {
    if (typeof n !== "number") throw new Error("not a number");
    if (n < 1 || n > 100) throw new Error("not in range(1,100)");
    let result = "";
    if (n % 3 === 0) result += "Fizz";
    if (n % 5 === 0) result += "Buzz";
    if (result.length > 0) return result;
    return n.toString();
}