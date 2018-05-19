import React from 'react';
import renderer from 'react-test-renderer'

import App from '../src/App';

describe('App', () => {
  it('renders', () => {
    const tree = renderer.create(
      <App />
    ).toJSON();
    expect(tree).toMatchSnapshot()
  });
});
