import Theme from '@theme';
import {heightPercentage} from '@utils/dimensionFormat';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {mvs} from 'react-native-size-matters';

export type DataStatisticType = {
  count: number;
  label: string;
};
export type CardStatisicProps = {
  dataStatistic: DataStatisticType[];
  containerStyle?: ViewStyle;
};

export const CardStatisic = (props: CardStatisicProps) => {
  const {dataStatistic, containerStyle} = props;
  return (
    <View style={[styles.root, containerStyle]}>
      {dataStatistic.map((item, index) => {
        return (
          <View
            key={index}
            style={[
              styles.contentWrapper,
              index < 3 && {
                borderBottomColor: Theme.Colors.default.Neutral[100],
                borderBottomWidth: 1.5,
              },
              index !== 2 &&
                index !== 5 && {
                  borderRightColor: Theme.Colors.default.Neutral[100],
                  borderRightWidth: 1.5,
                },
            ]}>
            <Text style={[Theme.Typography.TypographyBold.h6, styles.count]}>
              {item.count}
            </Text>
            <Text style={[Theme.Typography.TypographyRegular.sm, styles.label]}>
              {item.label}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: widthPercentageToDP('90%'),
    borderRadius: mvs(16),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: Theme.Colors.default.Transparent[1],
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
    paddingVertical: heightPercentage(15),
  },
  count: {
    color: Theme.Colors.default.Secondary[400],
  },
  label: {
    color: Theme.Colors.default.Neutral[0],
    marginTop: heightPercentage(5),
  },
});
