import {combineReducers} from 'redux';
import searchReducer from '../../screens/search/redux/search.reducer';

const rootReducer = combineReducers({
  search: searchReducer,
});

export default rootReducer;
