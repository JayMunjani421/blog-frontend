import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { thunk } from 'redux-thunk';
import BlogReducer from '../reducers/BlogReducer';
import CommentReducer from '../reducers/CommentReducer';
import LikeReducer from '../reducers/LikeReducer';
import AdminReducer from '../reducers/AdminReducer';

const rootReducer = combineReducers({
  "admin": AdminReducer,
  "blog": BlogReducer,
  "comment": CommentReducer,
  "like": LikeReducer
});

const mystore = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default mystore;
