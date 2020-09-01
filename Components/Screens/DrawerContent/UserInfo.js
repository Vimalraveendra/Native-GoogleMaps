import React from 'react';

import {View, StyleSheet} from 'react-native';

import {Avatar, Title, Caption, Paragraph} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

const UserInfoScreen = () => {
  return (
    <View style={styles.userInfo}>
      <View style={styles.userDetails}>
        <Avatar.Image
          source={require('../../../assests/myimage.png')}
          size={50}
        />
        <View style={styles.user}>
          <Title style={styles.title}>Vimal Raveendran</Title>
          <Caption style={styles.caption}>React Developer</Caption>
        </View>
      </View>
      <View style={styles.subInfo}>
        <View style={styles.subSection}>
          <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
          <Caption style={styles.caption}>Following</Caption>
        </View>
        <View style={styles.subSection}>
          <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
          <Caption style={styles.caption}>Followers</Caption>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfo: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: '700',
  },
  userDetails: {
    flexDirection: 'row',
    marginTop: 15,
  },
  user: {
    marginLeft: 15,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  subInfo: {
    flexDirection: 'row',
    marginTop: 20,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },

  subSection: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
});

export default UserInfoScreen;
