const getCnt = (...args) => {
    if(args.length === 2) {
        return args[0].filter(n => args[1].includes(n)).length;
    } else {
        return args[0].filter(n => !n).length;
    }
}
function solution(lottos, win_nums) {
    const rank = [6,6,5,4,3,2,1];
    
    const zeroCnt = getCnt(lottos);
    const set = new Set([...lottos]);
    
    const worst = new Set(win_nums.filter(n => set.has(n))).size;
    const best = worst+zeroCnt;

    return [rank[best], rank[worst]];
}
// 시간복잡도: O(N)
// 기존의 배열의 filter(), include()를 사용하여 처리하였고 그때 O(N^2)
// 자료구조 set과 set의 has()를 이용하여 시간복잡도를 단축하였다.
