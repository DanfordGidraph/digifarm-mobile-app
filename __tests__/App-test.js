import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import RootRedux from '../src/App/Container/RootRedux'

it('renders correctly', () => {
  renderer.create(<RootRedux />);
});
