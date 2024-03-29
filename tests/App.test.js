import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('App Has Been Render Correctly', () => {
  it('It renders 1 child element', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});