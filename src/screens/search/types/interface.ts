// @ts-ignore

interface LeaderBoardUser {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
  searched?: boolean;
}

interface IUser extends LeaderBoardUser {
  rank: number;
}

interface IUserCard {
  user: IUser;
}

interface ISearchByName {
  usersList: IUser[];
  searchTerm: string;
}

interface IDropDown {
  setShowOptions: (showOptions: boolean) => void;
}
