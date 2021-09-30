import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './modules';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

//thunk에서 라우터의 history 객체를 사용하려면 BrowserHistory 인스턴스를 직접 만들어서 적용해야 한다.
const customHistory = createBrowserHistory();

// 미들웨어 여러개 적용 가능. logger는 가장 마지막에 와야함
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(//redux-thunk의 withExtraArgument를 사용하면 thunk 함수에서 사전에 정해준 값들을 참조할 수 있다.
      ReduxThunk.withExtraArgument({ history: customHistory }),
      logger
    )
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
