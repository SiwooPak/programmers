// 입력 매개변수 2개고, 데이터타입은 배열이며
// 출력 데이터 타입이 배열이고
// 두번째 매개변수 commands 변수의 요소에서 첫번째값은 시작인덱스
// 두번째 인덱스 마지막 인덱스고, 이 인덱스로 배열을 자른 다음에 정렬하고
// 3에 해당하는 값을 리턴 해주는 
// 저는 slice(), map(), sort()
function solution(array, commands) { // O(n^2)
    const result = [];
    for(let cmd of commands) {
        const [start, end, idx] = cmd;
        const slicedArray = array.slice(start-1,end);
        const num = slicedArray.sort((a,b)=> a-b)[idx-1];
        result.push(num);
    };	
    return result;
    // forEach문을 쓰거나 map()을써도 무관
}
