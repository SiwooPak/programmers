// 배열의 3개의 숫자의 조합 구하기(O(n^2))
const getCombination = (arr, n) => {
    // 결과값을 담을 배열 변수
    const results = [];
    // 재귀함수 점화식
    // n=1이 되는 경우는 현재값을 선택하는것과 동일
    // 따라서 각각의 원소를 바로 배열 형태로 리턴
    if(n===1) return arr.map(el=> [el]);
    
    // 반복문으로 조합구하기
    arr.forEach((fixed, idx, origin) => {
        // 현재 요소를 제외한 배열
        const rest = origin.slice(idx+1);
        // 모든 요소를 탐색하는 것을 방지하기 위해
        // 만약 제외한 배열의 길이가 숫자의 개수 -1보다 작다면 반복문 탈출
        if(rest.length < n-1) return false;
        // 제외한 배열의 조합 구하기(재귀)
        const combinations = getCombination(rest, n-1);
        // 현재 요소와 조합으로 구한 배열 합쳐서 배열로 리턴
        const attached = combinations.map( el => [fixed,...el])
        // 결과값 변수에 각 요소(조합)을 담는다
        results.push(...attached)
        
    })
    // 결과 리턴
    return results
}
// 그 조합의 배열인 요소의 합을 요소로 가진 배열 구하기(시간복잡도: O(n^2))
const getSums = (arr) => {
    const sumsOfArray = arr.map( el => {
        const sum = el.reduce((acc,cur) => acc+cur);
        return sum;
    })
    return sumsOfArray;
}
// 각 요소가 소수인지 확인하는 함수 만들기(시간복잡도: O(sqrt(n)))
const isPrime = n => {
    // 소수는 2부터 시작, n의 제곱근을 이용해서 소수 판별 
    for(let i=2; i<=Math.sqrt(n) ; i++) {
        if(n%i === 0) return false;
    }
    return true;
}
function solution(nums) {
    let combination = getSums(getCombination(nums,3));
    let answer = combination.reduce((acc,cur) => acc+isPrime(cur),0);
    
    return answer;
}

const result = solution([1,2,7,6,4])
console.log(result)
