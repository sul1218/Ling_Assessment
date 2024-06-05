import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Alert,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SearchBar from './components/searchBar';
import {searchCreators} from './redux/search.action';
import UserCard from './components/userCard';
import {styles} from './styles';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../utils/responsive';

const Search = () => {
  const dispatch = useDispatch();

  const {searchedUsers} = useSelector((state: IInitialState) => state.search);

  const [search, setSearch] = useState<string>('');

  const handleSearch = () => {
    dispatch(searchCreators.searchUser(search));
  };

  useEffect(() => {
    dispatch(searchCreators.usersData());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        <View
          style={{
            alignSelf: 'flex-end',
            marginTop: heightPercentageToDP(1),
            marginRight: widthPercentageToDP(4),
          }}>
          <Text>Options</Text>
        </View>
      </View>
      <View
        style={{
          width: widthPercentageToDP(30),
          backgroundColor: 'red',
          position: 'absolute',
          zIndex: 99999,
          top: heightPercentageToDP(16),
          right: widthPercentageToDP(5),
          paddingVertical: heightPercentageToDP(1),
          alignItems: 'flex-start',
        }}>
        <Pressable
          onPress={() => dispatch(searchCreators.sortUsers('name'))}
          style={{
            alignSelf: 'flex-end',
            marginVertical: heightPercentageToDP(1),
            marginRight: widthPercentageToDP(3),
          }}>
          <Text>Sort by name</Text>
        </Pressable>
        <Pressable
          onPress={() => dispatch(searchCreators.sortUsers('lowest-ranked'))}
          style={{
            alignSelf: 'flex-end',
            marginVertical: heightPercentageToDP(1),
            marginRight: widthPercentageToDP(3),
          }}>
          <Text>Lowest ranked</Text>
        </Pressable>
      </View>

      <View style={styles.renderList}>
        <FlatList
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          data={searchedUsers}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}: {item: IUser; index: number}) => {
            return <UserCard user={item} index={index} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
