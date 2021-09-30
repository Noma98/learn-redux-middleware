import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import posts from './posts';

const rootReducer = combineReducers({ counter, posts });
export function* rootSaga() {
    yield all([counterSaga()]); //all은 배열 안의 여러 사가를 동시에 실행시켜 준다.
}
export default rootReducer;