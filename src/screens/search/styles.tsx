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
});
