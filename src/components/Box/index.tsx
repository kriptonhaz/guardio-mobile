import React from 'react';
import {View, ViewStyle} from 'react-native';
import {BoxGradient} from './BoxGradient';
import {BoxTransparent} from './BoxTransparent';

interface BoxProps extends React.PropsWithChildren {
  containerStyle?: ViewStyle;
}

const Box = (props: BoxProps) => {
  return <View style={props.containerStyle}>{props.children}</View>;
};

Box.Gradient = BoxGradient;
Box.Transparent = BoxTransparent;
export default Box;
