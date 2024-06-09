import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const BoardingScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Boarding Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
