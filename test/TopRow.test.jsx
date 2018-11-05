import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TopRow from '../client/src/components/TopRow.jsx';

configure({ adapter: new Adapter() });

describe('<TopRow />', () => {
  it('render correctly text component', () => {
    const TopRowComp = renderer.create(<TopRow />).toJSON();
    expect(TopRowComp).toMatchSnapshot();
  });
  it('should update state on heart click', () => {
    const wrapper = shallow(<TopRow />);
    wrapper.find('.heart').simulate('click');
    expect(wrapper.state('clicked')).toEqual(true);
  });
  it('should update state on heart hover', () => {
    const wrapper = shallow(<TopRow />);
    wrapper.find('.heart').simulate('mouseEnter');
    expect(wrapper.state('hover')).toEqual(true);
  });
  it('should update state after heart hover mouse leave', () => {
    const wrapper = shallow(<TopRow />);
    wrapper.find('.heart').simulate('mouseLeave');
    expect(wrapper.state('hover')).toEqual(true);
  });
});
