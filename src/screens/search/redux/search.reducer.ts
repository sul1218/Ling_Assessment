import {createReducer} from 'reduxsauce';
import initialStates from '../../../redux/store/initialStates';
import {searchTypes} from './search.action';
import {createUsersList, searchByName} from '../index.functions';

export const INITIAL_STATE = initialStates.search;

const getUsersData = (state: ISearch) => {
  const response = require('../../../common/leaderboard.json');
  const users = createUsersList(response);

  return {
    ...state,
    usersList: users,
    searchedUsers: users,
  };
};

const searchUser = (state: ISearch, {info}: {info: string}) => {
  return {
    ...state,
    searchedUsers: searchByName({usersList: state.usersList, searchTerm: info}),
  };
};

const sortUsers = (state: ISearch, {info}: {info: string}) => {
  const sortedArray =
    info === 'name'
      ? state.searchedUsers?.sort((a, b) => a.name.localeCompare(b.name))
      : state.usersList?.sort((a, b) => b.rank - a.rank);
  return {
    ...state,
    searchedUsers: sortedArray,
  };
};

export const HANDLERS = {
  [searchTypes.USERS_DATA]: getUsersData,
  [searchTypes.SEARCH_USER]: searchUser,
  [searchTypes.SORT_USERS]: sortUsers,
};

export default createReducer(INITIAL_STATE, HANDLERS);
