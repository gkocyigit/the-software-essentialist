
export function fizzbuzz(n: number) {
    if(n>100) throw new Error("Number too big");
    let result = "";
    if (n % 3 === 0) result+="Fizz";
    if (n % 5 === 0) result+="Buzz";
    return result || n.toString();
}