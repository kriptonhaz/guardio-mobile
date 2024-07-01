import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';
import {Chip} from '@components/Chip';
import Theme from '@theme';
import {widthPercentage} from '@utils/dimensionFormat';
import {mvs} from 'react-native-size-matters';
import {normalize} from '@utils/formatter';

export interface LeaveDataType {
  id: string;
  period: string;
  remarks: string;
  duration: string;
  status: 'Approve' | 'Reject' | 'Waiting';
}

interface CardLeaveProps extends LeaveDataType {
  containerStyle?: ViewStyle;
  onPress?: () => void;
}

export const CardLeave = (props: CardLeaveProps) => {
  const {containerStyle, status, onPress} = props;
  return (
    <TouchableOpacity style={[styles.root, containerStyle]} onPress={onPress}>
      <View style={styles.leftContent}>
        <Text
          style={[
            Theme.Typography.TypographyItalic.sm,
            {color: Theme.Colors.default.Neutral[40]},
          ]}>
          Fri, 29 Nov - Mon, 2 Dec
        </Text>
        <Text
          style={[
            Theme.Typography.TypographyRegular.lg,
            {color: Theme.Colors.default.Neutral[0], fontWeight: 500},
          ]}>
          Cuti Tahunan
        </Text>
      </View>
      <View style={styles.rightContent}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={[
              Theme.Typography.TypographyRegular.md,
              {
                color: Theme.Colors.default.Neutral[0],
                fontWeight: 500,
              },
            ]}>
            3 Hari
          </Text>
          <Chip
            containerStyle={{
              backgroundColor:
                status === 'Approve'
                  ? Theme.Colors.default.Success[600]
                  : status === 'Reject'
                  ? Theme.Colors.default.Error[500]
                  : Theme.Colors.default.Warning[500],
              paddingHorizontal: 0,
              width: widthPercentage(60),
            }}>
            <Text style={styles.textChip}>{status}</Text>
          </Chip>
        </View>
        <Icon
          name="chevron-right"
          size={widthPercentage(20)}
          color={Theme.Colors.default.Neutral[40]}
          style={{
            marginLeft: widthPercentage(20),
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: widthPercentageToDP('90%'),
    backgroundColor: Theme.Colors.default.Transparent[1],
    borderRadius: mvs(16),
  },
  leftContent: {
    width: '60%',
    borderRightColor: Theme.Colors.default.Neutral[100],
    borderRightWidth: 1.5,
    padding: widthPercentage(25),
  },
  rightContent: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textChip: {
    fontFamily: Theme.Fonts.default.InterRegular,
    fontSize: normalize(10),
    color: Theme.Colors.default.Neutral[100],
  },
});
