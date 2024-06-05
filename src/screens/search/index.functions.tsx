import {Alert} from 'react-native';

export const createUsersList = (response: any) => {
  const usersData: IUser[] = Object.values(response);
  const sortedData: IUser[] = usersData?.sort((a, b) => {
    // First, compare based on number of bananas
    if (b.bananas !== a.bananas) {
      return b.bananas - a.bananas; // Sort by descending order of bananas
    } else {
      // If bananas are the same, sort alphabetically by names
      return b.name.localeCompare(a.name); // Assuming the name field is 'name', replace it with the actual field name if needed
    }
  });
  const updatedData = sortedData
    .filter(user => user.name) // Remove items without a name
    .map((user, index) => ({
      ...user,
      rank: index + 1,
    }));

  return updatedData;
};

export const searchByName = ({usersList, searchTerm}: ISearchByName) => {
  const searchedUser = usersList?.filter((item: IUser) =>
    item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()),
  );
  const userTosearch = usersList?.slice(0, 10);
  let usersToRender;
  if (!searchedUser?.length) {
    Alert.alert(
      'This user name does not exist!',
      'Please specify an existing user name!',
    );
  } else if (searchedUser?.length === 1) {
    const userAvailable = userTosearch?.some((user: IUser) => {
      return user?.uid === searchedUser[0]?.uid;
    });
    if (userAvailable) {
      const users = userTosearch?.map((user: IUser) => {
        return user?.uid === searchedUser[0]?.uid
          ? {
              ...user,
              searched: true,
            }
          : {...user, searched: false};
      });

      usersToRender = users;
    } else {
      const removeUser = userTosearch?.slice(0, 9);
      const updated = searchedUser?.map((user: IUser) => {
        return {
          ...user,
          searched: true,
        };
      });
      const addUser = removeUser?.concat(updated);
      usersToRender = addUser;
    }
  } else {
    usersToRender = searchedUser;
  }

  return usersToRender;
};
