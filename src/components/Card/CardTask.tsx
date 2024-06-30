import {Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {mvs} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import {Chip} from '@components/Chip';
import Theme from '@theme';
import {heightPercentage, widthPercentage} from '@utils/dimensionFormat';

export type CardTaskProps = {
  id: string;
  date?: string;
  time?: string;
  message: string;
  type: string;
  variant?: 'error' | 'success';
  onPress?: () => void;
};
export const CardTask = (props: CardTaskProps) => {
  const {date, time, message, type, variant} = props;
  return (
    <TouchableOpacity
      style={{
        width: widthPercentageToDP('90%'),
        height: undefined,
        backgroundColor: Theme.Colors.default.Transparent[1],
        borderRadius: mvs(16),
        padding: widthPercentage(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text
          style={[
            Theme.Typography.TypographyItalic.sm,
            {color: Theme.Colors.default.Neutral[40]},
          ]}>
          {date}-{time}
        </Text>
        <Text
          style={[
            Theme.Typography.TypographyRegular.lg,
            {color: Theme.Colors.default.Neutral[0]},
          ]}>
          {message}
        </Text>
        <Chip
          containerStyle={{
            backgroundColor:
              variant === 'error'
                ? Theme.Colors.default.Error[300]
                : Theme.Colors.default.Success[300],
            width: widthPercentageToDP('20%'),
            marginTop: heightPercentage(6),
          }}>
          <Text
            style={[
              Theme.Typography.TypographyRegular.sm,
              {color: Theme.Colors.default.Neutral[100]},
            ]}>
            {type}
          </Text>
        </Chip>
      </View>
      <Icon
        name="chevron-right"
        color={Theme.Colors.default.Neutral[40]}
        size={widthPercentage(20)}
      />
    </TouchableOpacity>
  );
};
