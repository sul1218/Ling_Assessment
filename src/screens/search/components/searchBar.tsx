import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import SearchIcon from '../../../assets/svgs/search-icon';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../../utils/responsive';
import {theme} from '../../../common/theme';

const SearchBar = ({
  search,
  setSearch,
  handleSearch,
}: {
  search: string;
  setSearch: (search: string) => void;
  handleSearch: any;
}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchIcon}>
          <SearchIcon />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput}
            placeholder="User Name"
            placeholderTextColor={theme.fontColors.light2}
            value={search}
            onChangeText={text => setSearch(text)}
          />
        </View>
        <View style={styles.search}>
          <Pressable onPress={handleSearch} style={styles.searchButton}>
            <Text style={styles.searchText}>Search</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: hp(2),
    backgroundColor: '#ffff',
    height: hp(5),
    borderColor: 'grey',
  },
  searchIcon: {width: '14%', alignItems: 'center', justifyContent: 'center'},
  input: {
    width: '56%',
  },
  textInput: {
    height: hp(5),
    borderColor: 'yelllow',
  },
  search: {width: '30%'},
  searchButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    height: hp(5),
    justifyContent: 'center',
    borderRadius: hp(2),
  },
  searchText: {
    color: '#fff',
    fontSize: wp(3.2),
    fontWeight: '500',
  },
});
