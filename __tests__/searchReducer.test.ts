import {searchTypes} from '../src/screens/search/redux/search.action';
import {HANDLERS} from '../src/screens/search/redux/search.reducer';
import * as functionsUtils from '../src/utils/functionsUtils';

const initialState = {
  usersList: [],
  searchedUsers: [],
};

// Mocking the data that would be imported from leaderboard.json
jest.mock('../src/common/leaderboard.json', () => ({
  zz3PO3lfXzQAx12HilVxkPrgcP63: {
    bananas: 3200,
    lastDayPlayed: '2018-10-27',
    longestStreak: 1,
    name: 'Luana Souza',
    stars: 13,
    rank: 1,
    subscribed: false,
  },
  zywwDpX4ovUw52Kt2vOP6tFbpzG3: {
    bananas: 3150,
    lastDayPlayed: '2018-10-22',
    longestStreak: 2,
    name: 'Mohamad R Julian Wangsadinata',
    stars: 17,
    rank: 2,
    subscribed: false,
  },
  // Add more entries as needed
}));

const usersList = [
  {
    bananas: 3200,
    lastDayPlayed: '2018-10-27',
    longestStreak: 1,
    name: 'Luana Souza',
    stars: 13,
    rank: 1,
    subscribed: false,
    uid: 'zz3PO3lfXzQAx12HilVxkPrgcP63',
  },
  {
    bananas: 3150,
    lastDayPlayed: '2018-10-22',
    longestStreak: 2,
    name: 'Mohamad R Julian Wangsadinata',
    stars: 17,
    rank: 2,
    subscribed: false,
    uid: 'zywwDpX4ovUw52Kt2vOP6tFbpzG3',
  },
];

// Mocking createUsersList function
jest.mock('../src/utils/functionsUtils', () => ({
  createUsersList: jest.fn(),
  searchByName: jest.fn(),
}));

describe('search reducer', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle USERS_DATA action', () => {
    // Mock the return value of createUsersList
    jest.spyOn(functionsUtils, 'createUsersList').mockReturnValue(usersList);

    const newState = HANDLERS[searchTypes.USERS_DATA](initialState);

    expect(functionsUtils.createUsersList).toHaveBeenCalled();
    expect(newState.usersList).toEqual(usersList);
    expect(newState.searchedUsers).toEqual(usersList);
  });

  it('should handle SEARCH_USER action', () => {
    // Mock the return value of createUsersList
    jest.spyOn(functionsUtils, 'createUsersList').mockReturnValue(usersList);

    // Mock the searchByName function
    const searchResult = [usersList[0]]; // Assuming only the first user matches the search
    (functionsUtils.searchByName as any).mockReturnValue(searchResult);

    const action = {type: searchTypes.SEARCH_USER, info: 'Luana'}; // Assuming 'Luana' is the search term
    const newState = HANDLERS[action.type](initialState, action);

    expect(functionsUtils.createUsersList).toHaveBeenCalled();
    expect(functionsUtils.searchByName).toHaveBeenCalledWith({
      usersList,
      searchTerm: 'Luana',
    });
    expect(newState.searchedUsers).toEqual(searchResult);
  });

  it('should handle SORT_USERS action', () => {
    const sortedArray = [...usersList].sort((a, b) => b.rank - a.rank); // Sort usersList array by rank
    const action = {type: searchTypes.SORT_USERS, info: 'rank'}; // Assuming 'rank' is the sorting criteria
    const newState = HANDLERS[action.type](
      {...initialState, usersList},
      action,
    );

    expect(newState.searchedUsers).toEqual(sortedArray);
  });
});
