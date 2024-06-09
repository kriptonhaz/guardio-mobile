import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {RootStackParams} from '../route';

export const SplashScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const onClick = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View style={styles.root}>
      <Text>Splash Screen</Text>
      <TouchableOpacity onPress={onClick}>
        <Text>Press</Text>
      </TouchableOpacity>
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
