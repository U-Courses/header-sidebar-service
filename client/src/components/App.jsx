import React from 'react';
import Header from './Header.jsx';
import FixedHeader from './FixedHeader.jsx';
import Sidebar from './Sidebar.jsx';
import FixedSidebar from './FixedSidebar.jsx';
import requests from '../lib/requests.js';
import TopRow from './TopRow.jsx';
import styles from '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: null,
      courseData: {},
      discountPrice: '',
      couponUsed: false,
      headerFixed: false,
      sidebarFixed: false,
      bannerHeight: null,
      distanceToBelowTrailer: null,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.changePrice = this.changePrice.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    // Need to setTimeout to allow time to properly mount and calculate proper offsetHeight
    setTimeout(() => {
      const bannerHeight = document.querySelector('.App__banner___3EFF9').offsetHeight;
      const topRowHeight = document.querySelector('.TopRow__topRow___SvI7h').offsetHeight;
      const trailerHeight = document.querySelector('.Trailer__trailerBox___28ieD').offsetHeight + 3;
      const distanceToBelowTrailer = topRowHeight + trailerHeight;
      this.setState({
        bannerHeight,
        distanceToBelowTrailer,
      });
    });
    // requests.getCourseData(this.state.courseId)
    // window.location.pathname === '/courses/66/'
    requests.getCourseData(window.location.pathname)
      .then(data => (
        console.log('This is in app: ', data[0]),
        this.setState({
          courseId: data[0]._id,
          courseData: data[0],
          discountPrice: data[0].discountPrice,
          listPrice: data[0].listPrice,
        })
      ));
  }

  handleScroll() {
    const { bannerHeight } = this.state;
    const { distanceToBelowTrailer } = this.state;
    if ((!this.state.headerFixed) && (window.scrollY >= bannerHeight)) {
      this.setState({ headerFixed: true });
    } else if (this.state.headerFixed && (window.scrollY <= bannerHeight)) {
      this.setState({ headerFixed: false });
    } else if ((!this.state.sidebarFixed) && (window.scrollY >= distanceToBelowTrailer)) {
      this.setState({ sidebarFixed: true });
    } else if (this.state.sidebarFixed && (window.scrollY <= distanceToBelowTrailer)) {
      this.setState({ sidebarFixed: false });
    }
  }

  changePrice() {
    const currentPrice = this.state.discountPrice;
    const newPrice = `$${(Number((currentPrice).split('$')[1]) - 5).toFixed(2)}`;
    if (!this.state.couponUsed) {
      this.setState({
        discountPrice: newPrice,
        couponUsed: true,
      });
    }
  }

  render() {
    return (
      <div>
        <div className={ styles.banner }>
          <div className={ styles.container }>
            <TopRow />
            <div className={ styles.contentBox }>
              <Header course={ this.state.courseData }/>
              {this.state.sidebarFixed
                ? <FixedSidebar course={ this.state.courseData }
                  discountPrice={ this.state.discountPrice }
                  changePrice={ this.changePrice }/>
                : <Sidebar course={ this.state.courseData }
                  discountPrice={ this.state.discountPrice }
                  changePrice={ this.changePrice }/>
              }
            </div>
          </div>
        </div>
        {this.state.headerFixed
          ? <FixedHeader course={ this.state.courseData } />
          : null
        }
      </div>
    );
  }
}

export default App;
