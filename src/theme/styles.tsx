import {StyleSheet} from 'react-native';
import {ms, mvs} from 'react-native-size-matters';
import Colors from './colors';

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
    padding: ms(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
