const solution = (progresses, speeds) => { 
  let deploys = [];
  // 남은 작업량에 하루작업량을 나눠서 배포되는 날을 배열로 매핑
  let deploy_days = progresses.map((progress, idx) => Math.ceil((100-progress)/speeds[idx]))
  // progresses 배열이 0보다 클 때까지 반복합니다.
  while (deploy_days.length) {  
    // progresses에서 0번째 인덱스보다 큰 크기의 인덱스를 찾아 할당합니다.
    let biggerThanIdx = deploy_days.findIndex((num) => deploy_days[0] < num);
    
    // findIndex는 반환된 값이 없는 경우 -1 리턴
    // deploy_days[0]보다 큰수가 없는 경우 같이 나간다.
    if (biggerThanIdx === -1) {
      deploys.push(deploy_days.length);
      deploy_days.splice(0, deploy_days.length-1);
    } else {
      deploys.push(biggerThanIdx);
      deploy_days.splice(0, biggerThanIdx);
    }
  }
  
  return deploys;
}
