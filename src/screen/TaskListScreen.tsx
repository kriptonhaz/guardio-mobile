import {dataTasksHome} from '@assets/data/homeTask.data';
import Box from '@components/Box';
import {CardTask} from '@components/Card/CardTask';
import {Navbar} from '@components/Navbar';
import {Select} from '@components/Select';
import {heightPercentage} from '@utils/dimensionFormat';
import {FlatList, StyleSheet, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export const TaskListScreen = () => {
  return (
    <Box.Gradient containerStyle={styles.root}>
      <Navbar label="Task" rightIcon="plus-circle" />
      <Select
        type="date"
        value="2024"
        containerStyle={{
          marginTop: heightPercentage(28),
          marginBottom: heightPercentage(28),
        }}
      />
      <FlatList
        data={dataTasksHome}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                width: widthPercentageToDP('80%'),
                height: heightPercentage(10),
              }}
            />
          );
        }}
        renderItem={({item}) => (
          <CardTask
            id={item.id}
            date={item.date}
            time={item.time}
            message={item.message}
            type={item.type}
            variant={item.variant}
            onPress={() => null}
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
