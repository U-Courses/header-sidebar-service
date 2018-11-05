import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderStars from '../client/src/components/HeaderStars.jsx';

configure({ adapter: new Adapter() });

describe('<HeaderStars />', () => {
  it('renders correctly', () => {
    const HeaderStarsComp = renderer.create(<HeaderStars avgRating={ 3.5 }/>).toJSON();
    expect(HeaderStarsComp).toMatchSnapshot();
  });
  it('renders 5 <FontAwesomeIcon /> stars', () => {
    const wrapper = shallow(<HeaderStars />);
    expect(wrapper.find(FontAwesomeIcon).length).toEqual(5);
  });
});
