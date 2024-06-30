import Theme from '@theme';
import {heightPercentage, widthPercentage} from '@utils/dimensionFormat';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {ms, mvs} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

type CardProfileProps = {
  variant: 'big' | 'small';
  containerStyle?: ViewProps;
  img?: string;
  name: string;
  designation: string;
  email: string;
  location: string;
};

export const CardProfile = (props: CardProfileProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.root,
        props.variant === 'big' ? styles.containerBig : styles.containerSmall,
        props.containerStyle,
      ]}>
      {props.img ? (
        <Image source={{uri: props.img}} />
      ) : (
        <View
          style={[
            styles.wrapperIcon,
            props.variant === 'big'
              ? styles.wrapperIconBig
              : styles.wrapperIconSmall,
          ]}>
          <Icon
            name="user"
            color={Theme.Colors.default.Primary[900]}
            size={props.variant === 'big' ? ms(45) : ms(25)}
          />
        </View>
      )}
      {props.variant === 'big' ? (
        <View style={styles.wrapperTextBigContainer}>
          <Text
            style={[
              Theme.Typography.TypographyBold.h6,
              {color: Theme.Colors.default.Neutral[10]},
            ]}>
            {props.name}
          </Text>
          <Text
            style={[
              Theme.Typography.TypographyBold.md,
              {color: Theme.Colors.default.Neutral[10]},
            ]}>
            {props.designation}
          </Text>
          <Text
            style={[
              Theme.Typography.TypographyBold.sm,
              {color: Theme.Colors.default.Neutral[10]},
            ]}>
            {props.email}
          </Text>
        </View>
      ) : (
        <View style={styles.wrapperTextSmallContainer}>
          <Text
            style={[
              Theme.Typography.TypographyRegular.sm,
              {color: Theme.Colors.default.Neutral[10]},
            ]}>
            {props.designation}
          </Text>
          <Text
            style={[
              Theme.Typography.TypographyBold.lg,
              {color: Theme.Colors.default.Neutral[10]},
            ]}>
            {props.name}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Theme.Colors.default.Transparent[1],
    borderRadius: mvs(20),
    shadowColor: Theme.Colors.default.Neutral[0],
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerBig: {
    width: widthPercentageToDP('80%'),
    minHeight: heightPercentage(134),
    paddingLeft: widthPercentage(27),
    paddingVertical: heightPercentage(35),
  },
  containerSmall: {
    width: widthPercentageToDP('40%'),
    padding: widthPercentage(4),
  },
  wrapperIcon: {
    height: undefined,
    aspectRatio: 1 / 1,
    borderRadius: mvs(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Theme.Colors.default.Secondary[400],
    borderWidth: 2,
  },
  wrapperIconSmall: {
    width: widthPercentage(40),
  },
  wrapperIconBig: {
    width: widthPercentage(70),
  },
  wrapperTextSmallContainer: {
    marginLeft: widthPercentage(7),
  },
  wrapperTextBigContainer: {
    marginLeft: widthPercentage(10),
  },
});
