import React from 'react';
import renderer from 'react-test-renderer'

import { ImageSlide } from '../src/components/home/Carousel';
import { imgUrls }  from  '../src/images/home/index.js'

describe('ImageSlide', () => {
  it('renders', () => {
    const tree = renderer.create(
      <ImageSlide url={imgUrls}/>
    ).toJSON();
    expect(tree).toMatchSnapshot()
  });
});
