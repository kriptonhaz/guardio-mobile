import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RootStackParams} from '../route';
import Box from '../components/Box';

export const SplashScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const onClick = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <Box.Gradient>
      <Text>Guardio</Text>
      <TouchableOpacity onPress={onClick}>
        <Text>Press</Text>
      </TouchableOpacity>
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
