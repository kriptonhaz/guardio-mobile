import {dataTasksHome} from '@assets/data/homeTask.data';
import Box from '@components/Box';
import Button from '@components/Button';
import {ButtonIcon} from '@components/Button/ButtonIcon';
import {CardProfile} from '@components/Card/CardProfile';
import {CardTask} from '@components/Card/CardTask';
import {Chip} from '@components/Chip';
import Theme from '@theme';
import {heightPercentage, widthPercentage} from '@utils/dimensionFormat';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {ms, mvs} from 'react-native-size-matters';

export const HomeScreen = () => {
  const LabelMenu = (props: {label: string}) => {
    return (
      <Text
        style={[
          Theme.Typography.TypographyRegular.sm,
          {
            color: Theme.Colors.default.Neutral[0],
            marginTop: heightPercentage(4),
          },
        ]}>
        {props.label}
      </Text>
    );
  };

  return (
    <Box.Gradient containerStyle={styles.root}>
      <View style={styles.wrapperHeader}>
        <CardProfile
          variant="small"
          designation="Danru Security"
          name="Eliza Olsen"
          email="elizaolsen@gmail.com"
          location="Taman Anggrek"
        />
        <Button.Icon iconName="bell" containerStyle={styles.notifIcon} />
      </View>
      <Box.Transparent containerStyle={styles.boxDashboard}>
        <Text
          style={[
            Theme.Typography.TypographyRegular.sm,
            {color: Theme.Colors.default.Neutral[0], marginLeft: ms(22)},
          ]}>
          Today’s Overview
        </Text>
        <Text
          style={[
            Theme.Typography.TypographyRegular.lg,
            {
              color: Theme.Colors.default.Neutral[0],
              marginLeft: ms(22),
            },
          ]}>
          11 October 2024
        </Text>
        <View style={styles.lineSeparator} />
        <View style={styles.clockWrapper}>
          <View style={styles.clockDetail}>
            <Text
              style={[
                Theme.Typography.TypographyRegular.lg,
                {color: Theme.Colors.default.Neutral[0]},
              ]}>
              Clock In
            </Text>
            <Text
              style={[
                Theme.Typography.TypographyRegular.h5,
                {color: Theme.Colors.default.Neutral[0]},
              ]}>
              08:00 AM
            </Text>
            <Chip containerStyle={styles.chipTime}>
              <Text
                style={[
                  Theme.Typography.TypographyRegular.sm,
                  {color: Theme.Colors.default.Secondary[400]},
                ]}>
                Late at 08:05
              </Text>
            </Chip>
          </View>
          <View style={styles.clockDetail}>
            <Text
              style={[
                Theme.Typography.TypographyRegular.lg,
                {color: Theme.Colors.default.Neutral[0]},
              ]}>
              Clock Out
            </Text>
            <Text
              style={[
                Theme.Typography.TypographyRegular.h5,
                {color: Theme.Colors.default.Neutral[0]},
              ]}>
              05:00 PM
            </Text>
            <Chip containerStyle={styles.chipTime}>
              <Text
                style={[
                  Theme.Typography.TypographyRegular.sm,
                  {color: Theme.Colors.default.Neutral[0]},
                ]}>
                Not Yet
              </Text>
            </Chip>
          </View>
        </View>
        <Button label="Clock Out" containerStyle={styles.clockBtn} />
      </Box.Transparent>
      <View style={styles.menuDashboardWrapper}>
        <View style={styles.buttonMenuWrapper}>
          <ButtonIcon iconName="activity" variant="rounded" />
          <LabelMenu label="Patrol" />
        </View>
        <View style={styles.buttonMenuWrapper}>
          <ButtonIcon iconName="anchor" variant="rounded" />
          <LabelMenu label="Visitor" />
        </View>
        <View style={styles.buttonMenuWrapper}>
          <ButtonIcon iconName="credit-card" variant="rounded" />
          <LabelMenu label="Parcell" />
        </View>
      </View>
      <View
        style={{
          width: widthPercentageToDP('90%'),
          marginTop: heightPercentage(20),
          marginBottom: heightPercentage(10),
        }}>
        <Text
          style={[
            Theme.Typography.TypographyBold.lg,
            {color: Theme.Colors.default.Neutral[0], textAlign: 'left'},
          ]}>
          Task
        </Text>
      </View>

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
  wrapperHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  notifIcon: {
    backgroundColor: Theme.Colors.default.Transparent[1],
  },
  boxDashboard: {
    marginTop: heightPercentage(18),
    alignItems: 'flex-start',
    paddingVertical: ms(22),
    paddingHorizontal: 0,
    marginHorizontal: '5%',
  },
  lineSeparator: {
    minWidth: '100%',
    height: 1,
    backgroundColor: Theme.Colors.default.Secondary[400],
    marginVertical: heightPercentage(8),
  },
  clockWrapper: {
    minWidth: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  clockDetail: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  chipTime: {
    minWidth: widthPercentage(110),
    marginTop: heightPercentage(11),
  },
  clockBtn: {
    alignSelf: 'center',
    minWidth: widthPercentage(295),
    marginTop: heightPercentage(20),
  },
  menuDashboardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: widthPercentageToDP('55%'),
    marginTop: heightPercentage(30),
  },
  buttonMenuWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  menuWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.Colors.default.Neutral[100],
    width: widthPercentage(50),
    height: undefined,
    aspectRatio: 1 / 1,
    borderRadius: mvs(20),
  },
});
