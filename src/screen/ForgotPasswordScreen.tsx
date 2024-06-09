import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ForgotPasswordScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Forgot Password Screen</Text>
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
