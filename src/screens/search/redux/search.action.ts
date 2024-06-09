import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  usersData: null,
  searchUser: ['info'],
  sortUsers: ['info'],
});

export const searchTypes = Types;
export const searchCreators = Creators;
