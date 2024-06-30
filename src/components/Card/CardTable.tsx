import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Theme from '@theme';
import {heightPercentage, widthPercentage} from '@utils/dimensionFormat';

type CellType = {
  value: string;
  label: string;
};

export type TableType = {
  id: string;
  data: [CellType, CellType, CellType];
};

type CardTableProps = {
  containerStyle?: ViewStyle;
  data: [CellType, CellType, CellType];
};

export const CardTable = (props: CardTableProps) => {
  const {containerStyle, data} = props;
  return (
    <View style={[styles.root, containerStyle]}>
      {data.map((item, index) => {
        return (
          <View
            style={{
              justifyContent: 'space-between',
              width: '36%',
            }}>
            <Text
              style={[
                index === 0
                  ? Theme.Typography.TypographyBold.lg
                  : Theme.Typography.TypographyRegular.lg,
                {
                  color:
                    index === 1
                      ? Theme.Colors.default.Secondary[400]
                      : Theme.Colors.default.Neutral[0],
                },
              ]}>
              {item.value}
            </Text>
            <Text>{item.label}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: widthPercentageToDP('90%'),
    backgroundColor: Theme.Colors.default.Transparent[1],
    flexDirection: 'row',
    paddingVertical: heightPercentage(10),
    paddingHorizontal: widthPercentage(28),
  },
});
