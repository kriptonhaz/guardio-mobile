import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface BoxGradientProps extends React.PropsWithChildren {
  containerStyle?: ViewStyle;
}

export const BoxGradient = (props: BoxGradientProps) => {
  return (
    <LinearGradient
      colors={['#EBC894', '#B49EF4']}
      useAngle={true}
      angle={145}
      style={[styles.root, props.containerStyle]}
      testID="box">
      {props.children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
