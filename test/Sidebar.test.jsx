import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from '../client/src/components/Sidebar.jsx';
import CouponDefault from '../client/src/components/CouponDefault.jsx';
import CouponForm from '../client/src/components/CouponForm.jsx';

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

describe('<Sidebar />', () => {
  it('renders correctly', () => {
    const SidebarComp = renderer.create(<Sidebar course={ sampleProps }/>).toJSON();
    expect(SidebarComp).toMatchSnapshot();
  });
  // it('renders a <TagRatingsEnroll /> component', () => {
  //   const wrapper = shallow(<Header course={ sampleProps }/>);
  //   expect(wrapper.find(TagRatingsEnroll).length).toEqual(1);
  // });
  it('should render on heart click', () => {
    const wrapper = shallow(<Sidebar course={ sampleProps }/>);
    wrapper.find('.defaultCouponBtn').simulate('click');
    expect(wrapper.state('hasCoupon')).toEqual(true);
  });
});
