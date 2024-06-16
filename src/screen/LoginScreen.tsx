import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Box from '@components/Box';

export const LoginScreen = () => {
  return (
    <Box.Gradient>
      <Text>Login Screen</Text>
    </Box.Gradient>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
