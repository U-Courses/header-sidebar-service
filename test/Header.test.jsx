import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../client/src/components/Header.jsx';
import TagRatingsEnroll from '../client/src/components/TagRatingsEnroll.jsx';

configure({ adapter: new Adapter() });

const sampleProps = {
  active_coupon: 'ILOVEUDEMO',
  avg_rating: 4.9,
  ccOptions: ['English', 'Spanish'],
  created_by: 'Sibyl Roberts',
  description: 'Iste qui quia in.',
  discount_price: '$28.99',
  enrollment: 51,
  id: 1,
  img_url: 'http://lorempixel.com/640/480',
  language: 'English, Mandarin',
  last_updated: '21/2015',
  list_price: '$283.99',
  tag: 'Hot & New',
  title: 'React & Redux for Beginners',
  total_articles: 3,
  total_downloads: 5,
  total_ratings: 41,
  video_hrs: 26.1,
};

describe('<Header />', () => {
  it('renders correctly', () => {
    const HeaderComp = renderer.create(<Header course={ sampleProps }/>).toJSON();
    expect(HeaderComp).toMatchSnapshot();
  });
  it('renders a <TagRatingsEnroll /> component', () => {
    const wrapper = shallow(<Header course={ sampleProps }/>);
    expect(wrapper.find(TagRatingsEnroll).length).toEqual(1);
  });
});
