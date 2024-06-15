import React from 'react';
import {render, screen} from '@testing-library/react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BoxGradient} from './BoxGradient';
import {Text, View} from 'react-native';
jest.mock('react-native-linear-gradient', () => 'LinearGradient');

describe('Box component', () => {
  it('Render Box', () => {
    render(
      <BoxGradient>
        <Text>Test</Text>
      </BoxGradient>,
    );

    const element = screen.getByTestId('box');
    expect(element).toBeDefined();
  });
});
