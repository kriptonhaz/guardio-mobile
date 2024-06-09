import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const OtpScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Otp Screen</Text>
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
