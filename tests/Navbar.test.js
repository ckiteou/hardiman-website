import React from 'react';
import renderer from 'react-test-renderer'

import Navbar from '../src/components/home/Navbar';
import { ContactDetails } from '../src/components/home/Navbar';

describe('Navbar', () => {
  it('renders', () => {
    const tree = renderer.create(
      <Navbar />
    ).toJSON();
    expect(tree).toMatchSnapshot()
  });
});

describe('ContactDetails', () => {
  it('renders', () => {
    const tree = renderer.create(
      <ContactDetails />
    ).toJSON();
    expect(tree).toMatchSnapshot()
  });
});
