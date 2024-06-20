import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {RootStackParams} from '@route';
import Box from '@components/Box';
import Theme from '@theme';

export const SplashScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'BoardingScreen'}],
      });
    }, 3000);
  }, []);

  return (
    <Box.Gradient>
      <Text
        style={[
          Theme.Typography.TypographyItalic.h1,
          {color: Theme.Colors.default.Neutral[100]},
        ]}>
        Guardio
      </Text>
    </Box.Gradient>
  );
};
