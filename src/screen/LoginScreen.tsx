import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {vs} from 'react-native-size-matters';
import Box from '@components/Box';
import Theme from '@theme';

export const LoginScreen = () => {
  return (
    <Box.Gradient>
      <Box.Transparent>
        <Text
          style={[Theme.Typography.TypographyBold.h5, {marginBottom: vs(12)}]}>
          Login
        </Text>
        <Text
          style={[
            Theme.Typography.TypographyRegular.sm,
            {color: Theme.Colors.default.Neutral[30]},
          ]}>
          Enter your email and password to log in
        </Text>
      </Box.Transparent>
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
