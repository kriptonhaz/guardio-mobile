import {StyleSheet} from 'react-native';
import {ms, mvs} from 'react-native-size-matters';
import Colors from './colors';
import {heightPercentage, widthPercentage} from '@utils/dimensionFormat';

const Styles = StyleSheet.create({
  backgroundScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxTransparent: {
    width: 'auto',
    height: 'auto',
    backgroundColor: Colors.Transparent[1],
    borderRadius: mvs(20),
    padding: ms(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBackNav: {
    position: 'absolute',
    left: widthPercentage(20),
    top: heightPercentage(56),
  },
});

export default Styles;
