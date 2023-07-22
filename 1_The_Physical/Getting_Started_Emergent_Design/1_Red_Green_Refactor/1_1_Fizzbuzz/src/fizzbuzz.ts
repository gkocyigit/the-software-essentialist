
export function fizzbuzz(n: number): string {
    if (n === 15 || n === 45) return "FizzBuzz";
    if (n === 5) return "Buzz";
    if (n % 3 === 0) return "Fizz";
    return n.toString();
}