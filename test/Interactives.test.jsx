import React from 'react';
import Interactives from '../client/src/components/Interactives.jsx';
import renderer from 'react-test-renderer';

it('render correctly text component', () => {
  const InteractivesComp = renderer.create(<Interactives />).toJSON();
  expect(InteractivesComp).toMatchSnapshot();
});

