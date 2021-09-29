const myLogger = store => next => action => {
    console.log(action);
    const result = next(action);//다음 미들웨어(또는 리듀서)에게 액션 전달

    //업데이트 이후의 상태 조회
    console.log('\t', store.getState());
    return result; //여기선 dispatch(action)의 결과물임
}
export default myLogger;