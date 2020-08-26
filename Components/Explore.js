import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default ExploreScreen;
