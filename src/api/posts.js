/* 가짜 API 함수 만들기 */

// n 밀리 세컨드 동안 기다리는 프로미스를 만들어주는 함수
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// 가짜 포스트 목록 데이터
const posts = [
    {
        id: 1,
        title: '리덕스 미들웨어',
        body: '리덕스 미들웨어를 직접 만들어보면 이해하기 쉽다.'
    },
    {
        id: 2,
        title: 'redux-thunk',
        body: 'redux-thunk를 사용해서 비동기 작업을 처리하자.'
    },
    {
        id: 3,
        title: 'redux-saga',
        body:
            'redux-saga를 사용해서 비동기 작업을 처리하자.'
    }
];

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
    await sleep(500); //0.5초 쉬고
    return posts;
}

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async (id) => {
    await sleep(500);
    return posts.find(post => post.id === id);
}