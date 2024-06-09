import {usersData} from '../mockData/usersData';
import {createUsersList, searchByName} from '../src/utils/functionsUtils';

const initialData = {
  zywwDpX4ovUw52Kt2vOP6tFbpzG3: {
    bananas: 3150,
    lastDayPlayed: '2018-10-22',
    longestStreak: 2,
    name: 'Mohamad R Julian Wangsadinata',
    stars: 17,
    subscribed: false,
    uid: 'zywwDpX4ovUw52Kt2vOP6tFbpzG3',
  },
  zz3PO3lfXzQAx12HilVxkPrgcP63: {
    bananas: 3200,
    lastDayPlayed: '2018-10-27',
    longestStreak: 1,
    name: 'Luana Souza',
    stars: 13,
    subscribed: false,
    uid: 'zz3PO3lfXzQAx12HilVxkPrgcP63',
  },
  zzEUwf7BeTXL628IuQdfCw4zdAk2: {
    bananas: 150,
    lastDayPlayed: '2018-10-27',
    longestStreak: 1,
    name: '',
    stars: 5,
    subscribed: false,
    uid: 'zzEUwf7BeTXL628IuQdfCw4zdAk2',
  },
  zzqGU2sWryUPwRfqUphPprnK1gs2: {
    bananas: 200,
    lastDayPlayed: '2018-04-26',
    longestStreak: 1,
    name: 'Ryden Shipper',
    stars: 6,
    subscribed: false,
    uid: 'zzqGU2sWryUPwRfqUphPprnK1gs2',
  },
  zzupAnHefmYqyPM9Sx74j88aeZB2: {
    bananas: 200,
    lastDayPlayed: '2018-07-04',
    longestStreak: 1,
    name: 'Jamie Hatton',
    stars: 5,
    subscribed: false,
    uid: 'zzupAnHefmYqyPM9Sx74j88aeZB2',
  },
};

describe('createUsersList', () => {
  it('should sort users by descending number of bananas and alphabetically by name if bananas are equal', () => {
    const expectedOutput: IUser[] = [
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
      {
        bananas: 200,
        lastDayPlayed: '2018-04-26',
        longestStreak: 1,
        name: 'Ryden Shipper',
        stars: 6,
        rank: 3,
        subscribed: false,
        uid: 'zzqGU2sWryUPwRfqUphPprnK1gs2',
      },
      {
        bananas: 200,
        lastDayPlayed: '2018-07-04',
        longestStreak: 1,
        name: 'Jamie Hatton',
        stars: 5,
        rank: 4,
        subscribed: false,
        uid: 'zzupAnHefmYqyPM9Sx74j88aeZB2',
      },
      {
        bananas: 150,
        lastDayPlayed: '2018-10-27',
        longestStreak: 1,
        name: '',
        stars: 5,
        rank: 5,
        subscribed: false,
        uid: 'zzEUwf7BeTXL628IuQdfCw4zdAk2',
      },
    ];

    const result = createUsersList(initialData);
    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty array if no users are provided', () => {
    const data = {};
    const expectedOutput: IUser[] = [];
    const result = createUsersList(data);
    expect(result).toEqual(expectedOutput);
  });
});

describe('searchByName function', () => {
  const topNineUsers = [
    {
      bananas: 36750,
      lastDayPlayed: '2018-07-21',
      longestStreak: 18,
      name: 'Chris Buckley',
      rank: 1,
      stars: 176,
      subscribed: true,
      uid: 'zJsI8m74uqOI3el3EM1u64kbUWd2',
    },
    {
      bananas: 27800,
      lastDayPlayed: '2018-12-30',
      longestStreak: 7,
      name: 'Patrick Kennedy',
      rank: 2,
      stars: 104,
      subscribed: true,
      uid: 'zOztg0xHJwN2GSHO9XSFAPvTl7E2',
    },
    {
      bananas: 19500,
      lastDayPlayed: '2019-02-02',
      longestStreak: 9,
      name: 'Wolfgang Wirtz',
      rank: 3,
      stars: 92,
      subscribed: true,
      uid: 'zQH10NTZfYaXACdiF3V6hd7Ahn93',
    },
    {
      bananas: 18250,
      lastDayPlayed: '2019-02-01',
      longestStreak: 13,
      name: 'Bryan Holleman',
      rank: 4,
      stars: 66,
      subscribed: true,
      uid: 'zBgGPzU0saQuZHL7EH3T8xX6zCm2',
    },
    {
      bananas: 17200,
      lastDayPlayed: '2018-12-14',
      longestStreak: 4,
      name: 'Kim Schytt-Nielsen ',
      rank: 5,
      stars: 35,
      subscribed: true,
      uid: 'zyqWz9Obwsfk9TIkDAoNshMGPtc2',
    },
    {
      bananas: 14300,
      lastDayPlayed: '2018-05-15',
      longestStreak: 3,
      name: 'Tobias Fager',
      rank: 6,
      stars: 64,
      subscribed: false,
      uid: 'znHBpuZTcVhC5DpMtSAYLGtWo023',
    },
    {
      bananas: 11250,
      lastDayPlayed: '2019-01-29',
      longestStreak: 4,
      name: 'Lawrence Chan',
      rank: 7,
      stars: 53,
      subscribed: true,
      uid: 'zOCMOcl3dKfgnJFvaS1Tk9Ifq3A3',
    },
    {
      bananas: 8300,
      lastDayPlayed: '2019-01-25',
      longestStreak: 4,
      name: 'Hannah Krzywicki',
      rank: 8,
      stars: 34,
      subscribed: true,
      uid: 'zRa6fy2hvtYWXkKI3jKoASOqmd32',
    },
    {
      bananas: 6550,
      lastDayPlayed: '2018-09-18',
      longestStreak: 6,
      name: 'Emma',
      rank: 9,
      stars: 24,
      subscribed: false,
      uid: 'zDHhDho9h5fTDntQhyEg66RMvqK2',
    },
  ];

  it('If search term exists in top 10 users list', () => {
    const searchTerm = 'Alexander Mochalski';
    const expectedResult = [
      ...topNineUsers,
      {
        bananas: 6200,
        lastDayPlayed: '2018-12-23',
        longestStreak: 2,
        name: 'Alexander Mochalski',
        rank: 10,
        searched: true,
        stars: 26,
        subscribed: true,
        uid: 'zOKzuWGBUVWRrTxyEHgTKc4gin32',
      },
    ];
    expect(searchByName({usersList: usersData, searchTerm})).toEqual(
      expectedResult,
    );
  });

  it('If search term does not exists in top 10 users list', () => {
    const searchTerm = 'Ivy';
    const expectedResult = [
      ...topNineUsers,
      {
        bananas: 4600,
        lastDayPlayed: '2018-04-18',
        longestStreak: 4,
        name: 'Ivy',
        rank: 18,
        searched: true,
        stars: 21,
        subscribed: false,
        uid: 'zycLGDOMWLZLyjGrc98TdumJHl32',
      },
    ];
    expect(searchByName({usersList: usersData, searchTerm})).toEqual(
      expectedResult,
    );
  });

  it('fuzzy search, if multiple users exist with same search term', () => {
    const searchTerm = 'Chris';
    const expectedResult = [
      {
        bananas: 36750,
        lastDayPlayed: '2018-07-21',
        longestStreak: 18,
        name: 'Chris Buckley',
        rank: 1,
        stars: 176,
        subscribed: true,
        uid: 'zJsI8m74uqOI3el3EM1u64kbUWd2',
      },
      {
        bananas: 300,
        lastDayPlayed: '2018-09-30',
        longestStreak: 1,
        name: 'Shania Christina Westy',
        rank: 183,
        stars: 5,
        subscribed: false,
        uid: 'zLgRJcqWC4eG1SCpqimIiIaALQv2',
      },
      {
        bananas: 0,
        lastDayPlayed: '2017-11-01',
        longestStreak: 0,
        name: 'Christoph Ulherr',
        rank: 449,
        stars: 5,
        subscribed: false,
        uid: 'zg7y12X3gCZeFfKGT4ixVxRhxKz2',
      },
      {
        bananas: 0,
        lastDayPlayed: '2017-11-01',
        longestStreak: 0,
        name: 'Christian Grohmann',
        rank: 450,
        stars: 5,
        subscribed: false,
        uid: 'zoWgSNiXriPiHs7NxbpH3qVp2wf1',
      },
    ];
    expect(searchByName({usersList: usersData, searchTerm})).toEqual(
      expectedResult,
    );
  });

  it('should return an empty array when no users match the searchTerm', () => {
    const searchTerm = 'Nonexistent';
    expect(searchByName({usersList: usersData, searchTerm})).toEqual([]);
  });

  // Add more test cases as needed to cover all scenarios
});
