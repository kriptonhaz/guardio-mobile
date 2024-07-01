import {ButtonIcon} from '@components/Button/ButtonIcon';
import {IFeatherIconName} from '@interfaces/icon.interface';
import Theme from '@theme';
import {heightPercentage, widthPercentage} from '@utils/dimensionFormat';
import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

type NavbarProps = {
  label: string;
  isBack?: boolean;
  onPressRight?: () => void;
  rightIcon?: IFeatherIconName;
};

export const Navbar = (props: NavbarProps) => {
  const {label, isBack, onPressRight, rightIcon} = props;
  return (
    <View style={styles.root}>
      {isBack ? (
        <ButtonIcon iconName="chevron-left" variant="circle" />
      ) : (
        <View style={styles.blankView} />
      )}
      <Text
        style={[
          Theme.Typography.TypographyRegular.h6,
          {
            fontWeight: 700,
            color: Theme.Colors.default.Neutral[0],
            paddingTop: isBack || rightIcon ? 0 : heightPercentage(11),
          },
        ]}>
        {label}
      </Text>
      {rightIcon ? (
        <ButtonIcon
          iconName={rightIcon}
          variant="circle"
          onPress={onPressRight}
        />
      ) : (
        <View style={styles.blankView} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: widthPercentageToDP('90%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blankView: {
    width: widthPercentage(44),
  },
});
