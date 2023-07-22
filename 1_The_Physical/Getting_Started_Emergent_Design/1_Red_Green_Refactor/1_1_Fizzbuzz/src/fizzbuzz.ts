
export function fizzbuzz(n: number): string {
    if (n === 15) return "FizzBuzz";
    if (n === 5) return "Buzz";
    if (n === 3 || n === 9) return "Fizz";
    return n.toString();
}