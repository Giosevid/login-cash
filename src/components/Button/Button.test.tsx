import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from './index';

jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');

describe('Test Button', () => {
  const handleClick = jest.fn();
  test('Snapshot Button', () => {
    const {toJSON} = render(
      <Button onPress={handleClick} label="Test Button" />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('Expect call handleClick', () => {
    const {getByText} = render(
      <Button onPress={handleClick} label="Test Button" />,
    );
    const element = getByText('Test Button');
    fireEvent.press(element);
    expect(handleClick).toBeCalledTimes(1);
  });
});
