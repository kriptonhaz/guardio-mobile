import Theme from '@theme';
import {heightPercentage, widthPercentage} from '@utils/dimensionFormat';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {mvs} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

interface SelectProps extends TouchableOpacityProps {
  type: 'date' | 'options';
  variant?: 'date' | 'month' | 'year' | 'month-year';
  value: string;
  containerStyle?: ViewStyle;
}

export const Select = (props: SelectProps) => {
  const {type, variant, value, containerStyle} = props;
  return (
    <TouchableOpacity style={[styles.root, containerStyle]} {...props}>
      <View style={styles.wrapperLeftContent}>
        {type === 'date' && (
          <Icon
            name="calendar"
            size={widthPercentage(18)}
            color={Theme.Colors.default.Neutral[0]}
            style={{marginRight: widthPercentage(14)}}
          />
        )}
        <Text
          style={[
            Theme.Typography.TypographyRegular.md,
            {color: Theme.Colors.default.Neutral[0]},
          ]}>
          {value}
        </Text>
      </View>
      <Icon
        name="chevron-down"
        size={widthPercentage(18)}
        color={Theme.Colors.default.Neutral[0]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: widthPercentageToDP('90%'),
    backgroundColor: Theme.Colors.default.Transparent[1],
    borderRadius: mvs(16),
    paddingHorizontal: widthPercentage(14),
    paddingVertical: heightPercentage(12),
  },
  wrapperLeftContent: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
