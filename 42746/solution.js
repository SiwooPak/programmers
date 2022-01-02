function solution(numbers) {
    const mergeNumbers = numbers.map((number) => number.toString());
    const answer = mergeNumbers.sort((a, b) => (b + a) - (a + b)).join("");
    return answer.replace(/^0+/, "0");
}
