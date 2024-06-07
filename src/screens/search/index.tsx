import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SearchBar from './components/searchBar';
import {searchCreators} from './redux/search.action';
import UserCard from './components/userCard';
import {styles} from './styles';
import ChevronUp from '../../assets/svgs/chevron';
import ChevronDown from '../../assets/svgs/chevron-down';
import DropDown from './components/dropDown';

const Search = () => {
  const dispatch = useDispatch();

  const {searchedUsers} = useSelector((state: IInitialState) => state.search);

  const [search, setSearch] = useState<string>('');
  const [showOptions, setShowOptions] = useState<boolean>(false);

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
        <TouchableOpacity
          onPress={() => setShowOptions(!showOptions)}
          style={styles.options}>
          <Text style={styles.optionsText}>Options</Text>
          {showOptions ? <ChevronUp /> : <ChevronDown />}
        </TouchableOpacity>
      </View>
      <DropDown showOptions={showOptions} setShowOptions={setShowOptions} />

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
