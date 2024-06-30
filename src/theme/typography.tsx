import {TextStyle} from 'react-native';
import {normalize} from '../utils';
import Font from './fonts';

interface ITypography {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  h6: TextStyle;
  lg: TextStyle;
  md: TextStyle;
  sm: TextStyle;
}

const TypographyRegular: ITypography = {
  h1: {
    fontFamily: Font.InterRegular,
    fontSize: normalize(56),
  },
  h2: {
    fontFamily: Font.InterRegular,
    fontSize: normalize(48),
  },
  h3: {
    fontFamily: Font.InterRegular,
    fontSize: normalize(40),
  },
  h4: {
    fontFamily: Font.InterRegular,
    fontSize: normalize(32),
  },
  h5: {
    fontFamily: Font.InterRegular,
    fontSize: normalize(24),
  },
  h6: {
    fontFamily: Font.InterRegular,
    fontSize: normalize(20),
  },
  lg: {
    fontFamily: Font.InterRegular,
    fontSize: normalize(16),
  },
  md: {
    fontFamily: Font.InterRegular,
    fontSize: normalize(14),
  },
  sm: {
    fontFamily: Font.InterRegular,
    fontSize: normalize(12),
  },
};

const TypographyBold: ITypography = {
  h1: {
    fontFamily: Font.InterBold,
    fontSize: normalize(56),
  },
  h2: {
    fontFamily: Font.InterBold,
    fontSize: normalize(48),
  },
  h3: {
    fontFamily: Font.InterBold,
    fontSize: normalize(40),
  },
  h4: {
    fontFamily: Font.InterBold,
    fontSize: normalize(32),
  },
  h5: {
    fontFamily: Font.InterBold,
    fontSize: normalize(24),
  },
  h6: {
    fontFamily: Font.InterBold,
    fontSize: normalize(20),
  },
  lg: {
    fontFamily: Font.InterBold,
    fontSize: normalize(16),
  },
  md: {
    fontFamily: Font.InterBold,
    fontSize: normalize(14),
  },
  sm: {
    fontFamily: Font.InterBold,
    fontSize: normalize(12),
  },
};

const TypographyItalic: ITypography = {
  h1: {
    fontFamily: Font.InterItalic,
    fontSize: normalize(56),
  },
  h2: {
    fontFamily: Font.InterItalic,
    fontSize: normalize(48),
  },
  h3: {
    fontFamily: Font.InterItalic,
    fontSize: normalize(40),
  },
  h4: {
    fontFamily: Font.InterItalic,
    fontSize: normalize(32),
  },
  h5: {
    fontFamily: Font.InterItalic,
    fontSize: normalize(24),
  },
  h6: {
    fontFamily: Font.InterItalic,
    fontSize: normalize(20),
  },
  lg: {
    fontFamily: Font.InterItalic,
    fontSize: normalize(16),
  },
  md: {
    fontFamily: Font.InterItalic,
    fontSize: normalize(14),
  },
  sm: {
    fontFamily: Font.InterItalic,
    fontSize: normalize(12),
  },
};

export {TypographyRegular, TypographyBold, TypographyItalic};
