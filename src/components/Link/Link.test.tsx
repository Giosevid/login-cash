import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Link from './index';

describe('Test Link', () => {
  const handleClick = jest.fn();
  test('Snapshot Link', () => {
    const {toJSON} = render(
      <Link onPress={handleClick} label="Test label link" />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('Expect call handleClick', () => {
    const {getByText} = render(
      <Link onPress={handleClick} label="Test label link" />,
    );
    const element = getByText('Test label link');
    fireEvent.press(element);
    expect(handleClick).toBeCalledTimes(1);
  });
});
