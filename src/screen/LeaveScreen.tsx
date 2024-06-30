import {StyleSheet} from 'react-native';
import {dataStatisticLeave} from '@assets/data/statisticLeave.data';
import Box from '@components/Box';
import {CardStatisic} from '@components/Card/CardStatistic';
import {Navbar} from '@components/Navbar';
import {Select} from '@components/Select';
import {heightPercentage} from '@utils/dimensionFormat';

export const LeaveScreen = () => {
  return (
    <Box.Gradient containerStyle={styles.root}>
      <Navbar label="Cuti" rightIcon="plus-circle" />
      <Select
        type="date"
        variant="year"
        value="2024"
        containerStyle={{marginTop: heightPercentage(28)}}
      />
      <CardStatisic
        dataStatistic={dataStatisticLeave}
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
