import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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

const samplePropsNull = {
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
  tag: null,
  title: 'React & Redux for Beginners',
  total_articles: 3,
  total_downloads: 5,
  total_ratings: 41,
  video_hrs: 26.1,
};

describe('<TagRatingsEnroll />', () => {
  it('renders correctly', () => {
    const TagRatingsEnrollWrapper = renderer.create(
      <TagRatingsEnroll course={ sampleProps }/>,
    ).toJSON();
    expect(TagRatingsEnrollWrapper).toMatchSnapshot();
  });
  it('should render a div tag with class "tag" when tag is not null', () => {
    const wrapper = shallow(<TagRatingsEnroll course={ sampleProps }/>);
    expect(wrapper.exists('.tag')).toEqual(true);
  });
  it('should not render a div tag with class "tag" when tag is null', () => {
    const wrapper = shallow(<TagRatingsEnroll course={ samplePropsNull }/>);
    expect(wrapper.exists('.tag')).toEqual(false);
  });
});
