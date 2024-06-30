import Theme from '@theme';
import {heightPercentage, widthPercentage} from '@utils/dimensionFormat';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {mvs} from 'react-native-size-matters';

interface ChipProps extends React.PropsWithChildren {
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

export const Chip = (props: ChipProps) => {
  return (
    <TouchableOpacity
      disabled={!props.onPress}
      onPress={props.onPress}
      style={[styles.root, props.containerStyle]}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: widthPercentage(20),
    paddingVertical: heightPercentage(5),
    backgroundColor: Theme.Colors.default.Neutral[100],
    borderRadius: mvs(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
