function solution(citations) {
    let len = citations.length;
    let sortedCiations = citations.sort((a,b) => a-b);
    
    for(let i=0; i<len; i++) {
        let h_index = len - i;
        if(sortedCiations[i] >= h_index) return h_index;
    }
    
    return 0;
}
