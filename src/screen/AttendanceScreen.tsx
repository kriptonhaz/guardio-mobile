import {dataListAttendance} from '@assets/data/listAttendance.data';
import {dataStatisticAttendance} from '@assets/data/statisticAttendance.data';
import Box from '@components/Box';
import {CardStatisic} from '@components/Card/CardStatistic';
import {CardTable} from '@components/Card/CardTable';
import {Select} from '@components/Select';
import Theme from '@theme';
import {heightPercentage} from '@utils/dimensionFormat';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {mvs} from 'react-native-size-matters';

export const AttendanceScreen = () => {
  return (
    <Box.Gradient containerStyle={styles.root}>
      <Text
        style={[
          Theme.Typography.TypographyBold.h6,
          {color: Theme.Colors.default.Neutral[0]},
        ]}>
        Attendance
      </Text>
      <Select
        type="date"
        value="September 2024"
        containerStyle={{marginTop: heightPercentage(39)}}
      />
      <CardStatisic
        dataStatistic={dataStatisticAttendance}
        containerStyle={{marginTop: heightPercentage(14)}}
      />
      <FlatList
        data={dataListAttendance}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        style={{marginTop: heightPercentage(27)}}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: Theme.Colors.default.Neutral[100],
              }}
            />
          );
        }}
        renderItem={({item, index}) => (
          <CardTable
            data={item.data}
            containerStyle={{
              borderTopLeftRadius: index === 0 ? mvs(16) : 0,
              borderTopRightRadius: index === 0 ? mvs(16) : 0,
              paddingTop:
                index === 0 ? heightPercentage(20) : heightPercentage(10),
              paddingBottom:
                index === dataListAttendance.length - 1
                  ? heightPercentage(20)
                  : heightPercentage(10),
              borderBottomLeftRadius:
                index === dataListAttendance.length - 1 ? mvs(16) : 0,
              borderBottomRightRadius:
                index === dataListAttendance.length - 1 ? mvs(16) : 0,
            }}
          />
        )}
      />
    </Box.Gradient>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'flex-start',
    paddingTop: heightPercentage(70),
  },
});
