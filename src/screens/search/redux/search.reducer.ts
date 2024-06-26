import {createReducer} from 'reduxsauce';
import initialStates from '../../../redux/store/initialStates';
import {searchTypes} from './search.action';
import {createUsersList, searchByName} from '../../../utils/functionsUtils';
import data from '../../../common/leaderboard.json';

export const INITIAL_STATE = initialStates.search;

const getUsersData = (state: ISearch) => {
  const users = createUsersList(data);
  return {...state, usersList: users, searchedUsers: users};
};

const searchUser = (state: ISearch, {info}: {info: string}) => {
  const users = createUsersList(data);
  return {
    ...state,
    searchedUsers: searchByName({usersList: users, searchTerm: info}),
  };
};

const sortUsers = (state: ISearch, {info}: {info: string}) => {
  const sortedArray =
    info === 'name'
      ? state.searchedUsers?.sort((a, b) => a.name.localeCompare(b.name))
      : state.usersList?.sort((a, b) => b.rank - a.rank);
  return {...state, searchedUsers: sortedArray};
};

export const HANDLERS = {
  [searchTypes.USERS_DATA]: getUsersData,
  [searchTypes.SEARCH_USER]: searchUser,
  [searchTypes.SORT_USERS]: sortUsers,
};

export default createReducer(INITIAL_STATE, HANDLERS);
