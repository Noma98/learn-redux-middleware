// Promise에 기반한 thunk를 만들어 주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return (param) => async dispatch => {
        // 이 함수는 promiseCreator가 단 하나의 파라미터만 받는다는 전제하에 작성됨
        // 만약 여러 종류의 파라미터를 전달해야 한다면 객체 타입으로 전달하면 됨
        dispatch({ type, param });
        try {
            //결과물 이름을 payload로 통일
            const payload = await promiseCreator(param);
            dispatch({ type: SUCCESS, payload });
        } catch (error) {
            dispatch({ type: ERROR, payload: error, error: true });
        }
    }
}
export const reducerUtils = {
    //초기 상태. 초기 data 값은 기본적으로 null이지만 바꿀 수도 있다.
    initial: (initialData = null) => ({
        loading: false,
        data: initialData,
        error: null
    }),
    //로딩 상태. prevState는 기본적으로 null이지만 따로 지정하면 다른 값으로 유지시킬 수 O
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null
    }),
    //성공 상태
    success: payload => ({
        loading: false,
        data: payload,
        error: null
    }),
    //실패 상태
    error: error => ({
        loading: false,
        data: null,
        error
    })

}

//비동기 관련 액션들을 처리하는 리듀서를 만들어 주는 함수
//type은 액션 타입, key는 상태의 key(예: posts,post)
export const handleAsyncActions = (type, key) => {
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    return (state, action) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: reducerUtils.loading()
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.payload)
                };
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.error)
                };
            default:
                return state;
        }
    }
}