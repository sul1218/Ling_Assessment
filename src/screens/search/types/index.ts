// @ts-ignore

interface IUser {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  rank?: number;
  stars: number;
  subscribed: boolean;
  uid: string;
  searched?: boolean;
}

interface IUserCard {
  user: IUser;
  index: number;
}

interface ISearchByName {
  usersList: IUser[] | undefined;
  searchTerm: string;
}

interface IDropDown {
  showOptions: boolean;
  setShowOptions: (showOptions: boolean) => void;
}
