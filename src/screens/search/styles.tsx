import {StyleSheet} from 'react-native';
import {theme} from '../../common/theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: theme.white},
  searchBar: {
    width: '100%',
    borderBottomLeftRadius: hp(4),
    borderBottomRightRadius: hp(4),
    backgroundColor: theme.backgorund.lightBackground,
    paddingHorizontal: wp(3),
    paddingVertical: wp(3),
  },
  renderList: {
    width: wp(94),
    flex: 1,
    paddingTop: hp(1),
    alignSelf: 'center',
  },
  separator: {height: hp(1.5)},
  options: {
    alignSelf: 'flex-end',
    marginTop: hp(1),
    marginRight: wp(4),
    flexDirection: 'row',
  },
  optionsText: {marginRight: wp(2)},
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
