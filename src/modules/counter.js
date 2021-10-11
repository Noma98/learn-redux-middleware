/* 초기 상태값 */
const initialState = 0;

/* 액션 타입 */
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

/* 액션 생성 함수 */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}