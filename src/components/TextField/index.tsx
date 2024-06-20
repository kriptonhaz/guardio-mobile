import React from 'react';
import {
  TextInput,
  Text,
  TextInputProps,
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import Theme from '@theme';
import {mvs} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import {heightPercentage, widthPercentage} from '@utils/dimensionFormat';
import {IFeatherIconName} from 'interfaces/icon.interface';

interface TextFieldProps extends TextInputProps {
  containerStyle?: ViewStyle;
  leftIconName?: IFeatherIconName;
  leftIconColor?: string;
  onClickLeftIcon?: () => void;
  rightIconName?: IFeatherIconName;
  rightIconColor?: string;
  onClickRightIcon?: () => void;
  error?: boolean;
  helperText?: string;
}

const TextField = (props: TextFieldProps) => {
  return (
    <View>
      <View
        style={[
          styles.root,
          props.containerStyle,
          !!props.error && {
            borderColor: Theme.Colors.default.Error[500],
            borderWidth: 1,
          },
        ]}>
        <TextInput
          style={[Theme.Typography.TypographyRegular.md, styles.input]}
          placeholderTextColor={Theme.Colors.default.Neutral[50]}
          {...props}
        />
        {props.rightIconName && (
          <TouchableOpacity onPress={props.onClickRightIcon}>
            <Icon
              name={props.rightIconName}
              color={props.rightIconColor}
              size={widthPercentage(16)}
            />
          </TouchableOpacity>
        )}
      </View>
      {props.helperText && (
        <Text
          style={[
            Theme.Typography.TypographyRegular.sm,
            styles.helperText,
            props.error && {color: Theme.Colors.default.Error[500]},
          ]}>
          {props.helperText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: Theme.Colors.default.Neutral[100],
    borderColor: Theme.Colors.default.Neutral[80],
    borderWidth: 0.5,
    borderRadius: mvs(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: widthPercentage(14),
  },
  input: {
    backgroundColor: Theme.Colors.default.Neutral[100],
    width: '80%',
    borderRadius: mvs(10),
    height: heightPercentage(46),
    paddingLeft: widthPercentage(14),
    color: Theme.Colors.default.Neutral[10],
  },
  helperText: {
    marginTop: heightPercentage(4),
    color: Theme.Colors.default.Neutral[60],
  },
});

export default TextField;
