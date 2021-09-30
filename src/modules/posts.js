import * as postsAPI from '../api/posts';

/* 액션 타입 */
// 포스트 여러 개 조회
const GET_POSTS = 'GET_POSTS'; //요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; //요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; //요청 실패

// 포스트 하나 조회
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

// thunk를 사용할 때, 꼭 모든 액션들에 대해 액션 생성함수를 만들 필요는 없다. thunk 함수에서 바로 액션 객체를 만들어줘도 OK

export const getPosts = () => async dispatch => {
    dispatch({ type: GET_POSTS });
    try {
        const posts = await postsAPI.getPosts();
        dispatch({ type: GET_POSTS_SUCCESS, posts });
    } catch (error) {
        dispatch({ type: GET_POSTS_ERROR, error });
    }
}

// thunk 함수에서도 파라미터를 받아와서 사용할 수 있다.
export const getPost = (id) => async dispatch => {
    dispatch({ type: GET_POST });
    try {
        const posts = await postsAPI.getPosts(id);
        dispatch({ type: GET_POST_SUCCESS, posts });
    } catch (error) {
        dispatch({ type: GET_POST_ERROR, error });
    }
}

const initialState = {
    posts: {
        loading: false,
        data: null,
        error: null
    },
    post: {
        loading: false,
        data: null,
        error: null
    }
};

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: action.posts,
                    error: null
                }
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
        case GET_POST:
            return {
                ...state,
                post: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: {
                    loading: true,
                    data: action.post,
                    error: null
                }
            };
        case GET_POST_ERROR:
            return {
                ...state,
                post: {
                    loading: true,
                    data: null,
                    error: action.error
                }
            };
        default:
            return state;
    }
}