import {FlatList, StyleSheet, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {dataListClaim} from '@assets/data/listClaim.data';
import Box from '@components/Box';
import {CardClaim} from '@components/Card/CardClaim';
import {Navbar} from '@components/Navbar';
import {Select} from '@components/Select';
import {heightPercentage} from '@utils/dimensionFormat';

export const ClaimScreen = () => {
  return (
    <Box.Gradient containerStyle={styles.root}>
      <Navbar label="Claim" rightIcon="plus-circle" />
      <View style={styles.wrapperSelect}>
        <Select
          containerStyle={styles.selectDate}
          type="date"
          value="29/09/2024"
        />
        <Select
          containerStyle={styles.selectType}
          type="options"
          value="Type"
        />
      </View>
      <FlatList
        data={dataListClaim}
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
        renderItem={({item}) => (
          <CardClaim
            id={item.id}
            period={item.period}
            remarks={item.remarks}
            claimPrice={item.claimPrice}
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
  wrapperSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: widthPercentageToDP('90%'),
    marginTop: heightPercentage(28),
  },
  selectDate: {
    width: widthPercentageToDP('50%'),
  },
  selectType: {
    width: widthPercentageToDP('30%'),
  },
});
