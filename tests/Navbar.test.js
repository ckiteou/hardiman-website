import React from 'react';
import renderer from 'react-test-renderer'

import Navbar from '../src/components/Navbar';

describe('Navbar', () => {
  it('renders', () => {
    const tree = renderer.create(
      <Navbar />
    ).toJSON();
    expect(tree).toMatchSnapshot()
  });
});
