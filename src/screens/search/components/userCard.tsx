import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../utils/responsive';
import {theme} from '../../../common/theme';

const UserCard = ({user}: IUserCard) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: user?.searched
            ? theme.backgorund.lightBackground
            : theme.white,
        },
      ]}>
      <View style={styles.info}>
        <Text style={styles.infoTitle}>
          {user?.name ? user?.name : 'Ling User'}
        </Text>
        <Text>{user?.bananas} bananas</Text>
      </View>
      <View style={styles.rankContainer}>
        <View style={styles.rank}>
          <Text>{user?.rank}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    width: wp(94),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.lighterGray,
    borderRadius: wp(2),
  },
  info: {
    width: wp(80),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
  infoTitle: {
    fontSize: wp(3.4),
    fontWeight: '500',
    lineHeight: hp(3),
    color: theme.black,
  },
  rankContainer: {width: wp(14), justifyContent: 'center'},
  rank: {
    width: wp(10),
    height: wp(10),
    borderWidth: 1,
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
