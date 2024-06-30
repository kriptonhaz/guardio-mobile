import {dataStatisticAttendance} from '@assets/data/statisticAttendance.data';
import Box from '@components/Box';
import {CardStatisic} from '@components/Card/CardStatistic';
import Theme from '@theme';
import {heightPercentage} from '@utils/dimensionFormat';
import {StyleSheet, Text} from 'react-native';

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
      <CardStatisic
        dataStatistic={dataStatisticAttendance}
        containerStyle={{marginTop: heightPercentage(14)}}
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
