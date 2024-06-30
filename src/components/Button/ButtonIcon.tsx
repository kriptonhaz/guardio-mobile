import {IFeatherIconName} from '@interfaces/icon.interface';
import Theme from '@theme';
import {heightPercentage, widthPercentage} from '@utils/dimensionFormat';
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
import Icon from 'react-native-vector-icons/Feather';

interface ButtonIconProps extends TouchableOpacityProps {
  containerStyle?: ViewStyle;
  iconName?: IFeatherIconName;
  iconColor?: string;
  iconSize?: number;
  iconStyle?: ViewStyle;
  variant?: 'circle' | 'rounded';
}

export const ButtonIcon = (props: ButtonIconProps) => {
  const {
    iconName = '',
    iconColor = Theme.Colors.default.Neutral[0],
    iconSize = mvs(24),
    iconStyle,
    variant = 'circle',
  } = props;
  return (
    <TouchableOpacity
      style={[
        styles.root,
        variant === 'circle' ? styles.variantCircle : styles.variantRounded,
        props.containerStyle,
      ]}
      {...props}>
      <Icon
        name={iconName}
        size={iconSize}
        color={iconColor}
        style={iconStyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Theme.Colors.default.Neutral[90],
    justifyContent: 'center',
    alignItems: 'center',
  },
  variantCircle: {
    width: widthPercentage(44),
    height: undefined,
    aspectRatio: 1 / 1,
    borderRadius: mvs(20),
  },
  variantRounded: {
    width: widthPercentage(50),
    height: undefined,
    aspectRatio: 1 / 1,
    borderRadius: mvs(20),
  },
});
