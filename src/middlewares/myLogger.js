const myLogger = store => next => action => {
    console.log(action);
    const result = next(action); //다음 미들웨어(또는 리듀서)에 액션 전달
    console.log('\t', store.getState()); //업데이트 이후 상태 조회
    return result; //이 리턴값은 dispatch(action)의 결과물이 됨(기본: undefined)
}
export default myLogger;