import React from 'react';
import {ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../theme/colors';
import {Styles} from '../../theme/styles';

interface BoxGradientProps extends React.PropsWithChildren {
  containerStyle?: ViewStyle;
}

export const BoxGradient = (props: BoxGradientProps) => {
  return (
    <LinearGradient
      colors={[Colors.Gradient[1], Colors.Gradient[2]]}
      useAngle={true}
      angle={145}
      style={[Styles.backgroundScreen, props.containerStyle]}
      testID="box">
      {props.children}
    </LinearGradient>
  );
};
