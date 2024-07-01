import {FlatList, StyleSheet, View} from 'react-native';
import {dataStatisticLeave} from '@assets/data/statisticLeave.data';
import Box from '@components/Box';
import {CardStatisic} from '@components/Card/CardStatistic';
import {Navbar} from '@components/Navbar';
import {Select} from '@components/Select';
import {heightPercentage} from '@utils/dimensionFormat';
import {CardLeave} from '@components/Card/CardLeave';
import {dataListLeave} from '@assets/data/listLeave.data';

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
      <FlatList
        data={dataListLeave}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        style={{marginTop: heightPercentage(27)}}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                width: '100%',
                marginTop: heightPercentage(12),
              }}
            />
          );
        }}
        renderItem={({item, index}) => (
          <CardLeave
            id={item.id}
            period={item.period}
            remarks={item.remarks}
            duration={item.duration}
            status={item.status}
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
