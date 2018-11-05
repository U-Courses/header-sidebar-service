import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Interactives from '../client/src/components/Interactives.jsx';

configure({ adapter: new Adapter() });

describe('<Interactives />', () => {
  it('render correctly text component', () => {
    const InteractivesComp = renderer.create(<Interactives />).toJSON();
    expect(InteractivesComp).toMatchSnapshot();
  });
});
