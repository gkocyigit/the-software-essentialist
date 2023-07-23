export function palindromeChecker(word: string): boolean{
    const removedSpaces = word.replace(/\s/g, '');
    const reversedWord = removedSpaces.split('').reverse().join('');
    return removedSpaces.toLowerCase() === reversedWord.toLowerCase();
}