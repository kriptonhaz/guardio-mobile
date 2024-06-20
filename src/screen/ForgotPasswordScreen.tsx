import Box from '@components/Box';
import Button from '@components/Button';
import TextField from '@components/TextField';
import {yupResolver} from '@hookform/resolvers/yup';
import {IForgot} from '@interfaces/form.interface';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '@route';
import Theme from '@theme';
import {heightPercentage} from '@utils/dimensionFormat';
import React from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {StyleSheet, KeyboardAvoidingView, Platform, Text} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {SchemaForgot} from '@validation/forgot.validation';

export const ForgotPasswordScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const onPressBack = () => {
    navigation.goBack();
  };

  const {control, handleSubmit} = useForm<IForgot>({
    mode: 'onChange',
    resolver: yupResolver(SchemaForgot),
    defaultValues: {
      email: '',
    },
  });

  const onForgotPassword: SubmitHandler<IForgot> = data => {
    // TODO: handle wiring later
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.root}>
      <Box.Gradient containerStyle={styles.content}>
        <Button.Icon
          containerStyle={Theme.Styles.default.btnBackNav}
          iconName="chevron-left"
          onPress={onPressBack}
        />
        <Text style={[Theme.Typography.TypographyBold.h4, styles.title]}>
          Forgot password
        </Text>
        <Text style={[Theme.Typography.TypographyRegular.lg, styles.subtitle]}>
          Enter your email account to reset your password
        </Text>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, value}, formState: {errors}}) => (
            <TextField
              containerStyle={{marginTop: heightPercentage(40)}}
              placeholder="Email"
              onChangeText={onChange}
              value={value}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
        <Button
          containerStyle={styles.btnForgot}
          label="Reset Password"
          onPress={handleSubmit(onForgotPassword)}
        />
      </Box.Gradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    justifyContent: 'flex-start',
    paddingTop: heightPercentageToDP('20%'),
  },
  title: {
    color: Theme.Colors.default.Neutral[30],
  },
  subtitle: {
    marginTop: heightPercentage(12),
    color: Theme.Colors.default.Neutral[30],
    width: widthPercentageToDP('70%'),
    textAlign: 'center',
  },
  btnForgot: {
    marginTop: heightPercentage(20),
    width: widthPercentageToDP('80%'),
  },
});
