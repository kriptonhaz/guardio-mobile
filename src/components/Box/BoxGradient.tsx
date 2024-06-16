import React from 'react';
import {ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Theme from '@theme';

interface BoxGradientProps extends React.PropsWithChildren {
  containerStyle?: ViewStyle;
}

export const BoxGradient = (props: BoxGradientProps) => {
  return (
    <LinearGradient
      colors={[
        Theme.Colors.default.Gradient[1],
        Theme.Colors.default.Gradient[2],
      ]}
      useAngle={true}
      angle={145}
      style={[Theme.Styles.default.backgroundScreen, props.containerStyle]}
      testID="box">
      {props.children}
    </LinearGradient>
  );
};
