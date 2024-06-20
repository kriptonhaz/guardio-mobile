import {Dimensions, Platform, PixelRatio} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

const normalize = (size: number) => {
  return moderateScale(size, 0.3);
  // const newSize = size * scale;
  // if (Platform.OS === 'ios') {
  //   return Math.round(PixelRatio.roundToNearestPixel(newSize));
  // } else {
  //   return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  // }
};

export {normalize};
