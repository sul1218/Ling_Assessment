// @ts-ignore

interface IInitialState {
  search: ISearch;
}

interface ISearch {
  usersList: IUser[] | undefined;
  searchedUsers: IUser[] | undefined;
}
