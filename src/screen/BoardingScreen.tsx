import React, {useRef, useState} from 'react';
import Box from '@components/Box';
import Button from '@components/Button';
import Theme from '@theme';
import {heightPercentage, width, widthPercentage} from '@utils/dimensionFormat';
import {
  StyleSheet,
  Image,
  FlatList,
  View,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {boardingItem} from '@assets/data/boarding.data';
import {mvs} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '@route';

type OnScrollEventHandler = (
  event: NativeSyntheticEvent<NativeScrollEvent>,
) => void;

export const BoardingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const flatlistRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onNextSlide = () => {
    if (activeIndex < boardingItem.length - 1) {
      flatlistRef.current?.scrollToIndex({
        index: activeIndex + 1,
        animated: true,
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
    }
  };

  const handleScroll: OnScrollEventHandler = event => {
    let offsetX = event.nativeEvent.contentOffset.x;
    setActiveIndex(Math.ceil(offsetX / width));
  };

  return (
    <Box.Gradient containerStyle={styles.root}>
      <FlatList
        ref={flatlistRef}
        data={boardingItem}
        horizontal
        keyExtractor={item => item.id}
        style={styles.flatlist}
        showsHorizontalScrollIndicator={false}
        snapToInterval={widthPercentageToDP('100%')}
        decelerationRate="fast"
        scrollEventThrottle={200}
        snapToAlignment={'center'}
        scrollEnabled={false}
        pagingEnabled={true}
        onScroll={handleScroll}
        renderItem={({item}) => (
          <View>
            <Image source={item.img} style={styles.img} resizeMode="cover" />
            {item.title}
            <Text
              style={[Theme.Typography.TypographyRegular.lg, styles.subtitle]}>
              {item.subtitle}
            </Text>
          </View>
        )}
      />
      <View style={styles.wrapperIndicator}>
        {boardingItem.map((item, index) => {
          return (
            <View
              key={item.id}
              style={[
                styles.inactiveIndicator,
                index === activeIndex && styles.activeIndicator,
              ]}
            />
          );
        })}
      </View>
      <Button
        label={activeIndex === 2 ? 'Get Started' : 'Next'}
        containerStyle={styles.btnNext}
        onPress={onNextSlide}
      />
    </Box.Gradient>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  flatlist: {
    height: heightPercentageToDP('80%'),
    flexGrow: 0,
  },
  img: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('50%'),
  },
  subtitle: {
    alignSelf: 'center',
    textAlign: 'center',
    width: widthPercentageToDP('80%'),
    color: Theme.Colors.default.Neutral[40],
    marginTop: heightPercentage(20),
  },
  wrapperIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactiveIndicator: {
    width: widthPercentage(15),
    height: heightPercentage(10),
    backgroundColor: Theme.Colors.default.Neutral[60],
    borderRadius: mvs(100),
    marginHorizontal: widthPercentage(2),
  },
  activeIndicator: {
    backgroundColor: Theme.Colors.default.Secondary[400],
    width: widthPercentage(35),
  },
  btnNext: {
    marginTop: heightPercentage(37),
    width: widthPercentageToDP('80%'),
  },
});
