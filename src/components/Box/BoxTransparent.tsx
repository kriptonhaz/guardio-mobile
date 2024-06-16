import {View, ViewStyle} from 'react-native';
import Theme from '@theme';

interface BoxTransparentProps extends React.PropsWithChildren {
  containerStyle?: ViewStyle;
}

export const BoxTransparent = (props: BoxTransparentProps) => {
  return (
    <View style={[Theme.Styles.default.boxTransparent, props.containerStyle]}>
      {props.children}
    </View>
  );
};
