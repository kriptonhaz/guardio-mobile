import Theme from '@theme';
import {heightPercentage} from '@utils/dimensionFormat';
import {Text} from 'react-native';

export const boardingItem = [
  {
    id: '1',
    img: require('@assets/img/boarding-1.png'),
    title: (
      <Text
        style={[
          Theme.Typography.TypographyBold.h4,
          {
            color: Theme.Colors.default.Neutral[10],
            textAlign: 'center',
            marginTop: heightPercentage(40),
          },
        ]}>
        Welcome to {'\n'}
        <Text style={{color: Theme.Colors.default.Secondary[400]}}>
          Guardio
        </Text>
      </Text>
    ),
    subtitle:
      'Start streamlining your security operations and workforce management today with SecureManage.',
  },
  {
    id: '2',
    img: require('@assets/img/boarding-2.png'),
    title: (
      <Text
        style={[
          Theme.Typography.TypographyBold.h4,
          {
            color: Theme.Colors.default.Secondary[400],
            textAlign: 'center',
            marginTop: heightPercentage(40),
          },
        ]}>
        Empower{' '}
        <Text style={{color: Theme.Colors.default.Neutral[10]}}>
          Every {'\n'} Shift
        </Text>
      </Text>
    ),
    subtitle:
      'Organize and track shifts, attendance, and payroll effortlessly.',
  },
  {
    id: '3',
    img: require('@assets/img/boarding-3.png'),
    title: (
      <Text
        style={[
          Theme.Typography.TypographyBold.h4,
          {
            color: Theme.Colors.default.Neutral[10],
            textAlign: 'center',
            marginTop: heightPercentage(40),
          },
        ]}>
        Command Your {'\n'}
        <Text style={{color: Theme.Colors.default.Secondary[400]}}>
          Operations
        </Text>
      </Text>
    ),
    subtitle:
      'Report incidents, manage visitors, and dispatch tasks—all in real-time.',
  },
];
