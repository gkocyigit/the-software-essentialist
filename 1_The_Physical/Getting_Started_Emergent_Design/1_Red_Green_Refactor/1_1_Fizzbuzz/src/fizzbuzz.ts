
export function fizzbuzz(n: any) {
    if(n>100 || n<0) throw new Error("Number not in range");
    let result = "";
    if (n % 3 === 0) result+="Fizz";
    if (n % 5 === 0) result+="Buzz";
    return result || n.toString();
}