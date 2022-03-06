import React from 'react';
import {render} from '@testing-library/react-native';
import CustomText from './index';

describe('Test Button', () => {
  const cases = ['regular', 'bold', 'light'];

  test.each(cases)('expect textType with %p and returns %p', firstArg => {
    const {toJSON} = render(
      <CustomText children="Test Button" textType={firstArg} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
