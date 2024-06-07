import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {theme} from '../../../common/theme';
import {searchCreators} from '../redux/search.action';
import {useDispatch} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../utils/responsive';

const DropDown = ({showOptions, setShowOptions}: IDropDown) => {
  const dispatch = useDispatch();
  return (
    <>
      {showOptions ? (
        <View style={styles.dropDown}>
          <Pressable
            onPress={() => {
              dispatch(searchCreators.sortUsers('name')), setShowOptions(false);
            }}
            style={[
              styles.sortOptions,
              {
                borderColor: theme.lighterGray,
                borderBottomWidth: 1,
              },
            ]}>
            <Text>Sort by name</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              dispatch(searchCreators.sortUsers('lowest-ranked')),
                setShowOptions(false);
            }}
            style={styles.sortOptions}>
            <Text>Lowest ranked</Text>
          </Pressable>
        </View>
      ) : null}
    </>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropDown: {
    width: wp(30),
    backgroundColor: theme.white,
    position: 'absolute',
    zIndex: 99999,
    top: hp(16),
    right: wp(5),
    alignItems: 'flex-start',
    borderColor: theme.lighterGray,
    borderWidth: 1,
    borderRadius: wp(2),
  },
  sortOptions: {
    width: wp(30),
    paddingLeft: wp(2),
    paddingVertical: hp(1),
  },
});
