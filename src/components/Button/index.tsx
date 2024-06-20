import Theme from '@theme';
import {heightPercentage} from '@utils/dimensionFormat';
import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {mvs} from 'react-native-size-matters';

interface ButtonProps extends TouchableOpacityProps {
  label?: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.root, props.containerStyle]} {...props}>
      <Text
        style={[
          Theme.Typography.TypographyBold.md,
          styles.label,
          props.labelStyle,
        ]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: Theme.Colors.default.Primary[900],
    height: heightPercentage(48),
    borderRadius: mvs(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: Theme.Colors.default.Neutral[100],
  },
});

export default Button;
