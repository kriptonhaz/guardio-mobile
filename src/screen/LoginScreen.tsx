import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {vs} from 'react-native-size-matters';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Box from '@components/Box';
import TextField from '@components/TextField';
import Button from '@components/Button';
import {ILogin} from '@interfaces/form.interface';
import Theme from '@theme';
import {heightPercentage} from '@utils/dimensionFormat';
import {SchemaLogin} from '@validation/login.validation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '@route';

export const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const {control, handleSubmit} = useForm<ILogin>({
    mode: 'onChange',
    resolver: yupResolver(SchemaLogin),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onLogin: SubmitHandler<ILogin> = data => {
    // TODO: will fix on wiring
    console.log(data);
    navigation.reset({
      index: 0,
      routes: [{name: 'MainTab'}],
    });
  };

  const onForgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const onRegister = () => {
    // TODO: add this later
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.root}>
      <Box.Gradient>
        <Box.Transparent>
          <Text
            style={[
              Theme.Typography.TypographyBold.h5,
              {marginBottom: vs(12)},
            ]}>
            Login
          </Text>
          <Text
            style={[
              Theme.Typography.TypographyRegular.sm,
              {color: Theme.Colors.default.Neutral[30]},
            ]}>
            Enter your email and password to log in
          </Text>
          <View style={{width: widthPercentageToDP(80)}}>
            <Controller
              control={control}
              name="email"
              render={({field: {onChange, value}, formState: {errors}}) => (
                <TextField
                  containerStyle={{marginTop: heightPercentage(24)}}
                  placeholder="Email"
                  onChangeText={onChange}
                  value={value}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({field: {onChange, value}, formState: {errors}}) => (
                <TextField
                  containerStyle={{marginTop: heightPercentage(6)}}
                  placeholder="Password"
                  rightIconName={showPassword ? 'eye' : 'eye-off'}
                  rightIconColor={Theme.Colors.default.Neutral[60]}
                  onClickRightIcon={toggleShowPassword}
                  secureTextEntry={!showPassword}
                  onChangeText={onChange}
                  value={value}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />
            <Text
              style={[
                Theme.Typography.TypographyBold.sm,
                styles.forgotPassword,
              ]}
              onPress={onForgotPassword}>
              Forgot Password
            </Text>
            <Button
              containerStyle={styles.btnLogin}
              label="Login"
              onPress={handleSubmit(onLogin)}
            />
            <Text
              style={[
                Theme.Typography.TypographyRegular.sm,
                styles.textFooter,
              ]}>
              <Text>Don't have an account? </Text>
              <Text
                style={[
                  Theme.Typography.TypographyBold.sm,
                  styles.textRegister,
                ]}
                onPress={onRegister}>
                Register your Company!
              </Text>
            </Text>
          </View>
        </Box.Transparent>
      </Box.Gradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  forgotPassword: {
    color: Theme.Colors.default.Secondary[400],
    textAlign: 'right',
    marginTop: heightPercentage(16),
  },
  btnLogin: {
    marginTop: heightPercentage(24),
  },
  textFooter: {
    color: Theme.Colors.default.Neutral[20],
    textAlign: 'center',
    marginTop: heightPercentage(24),
  },
  textRegister: {
    color: Theme.Colors.default.Secondary[400],
  },
});
