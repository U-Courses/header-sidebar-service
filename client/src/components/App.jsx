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
      courseId: 4,
      courseData: {},
      headerFixed: false,
      sidebarFixed: false,
      bannerHeight: null,
      distanceToBelowTrailer: null,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const bannerHeight = document.querySelector('.App__banner___3EFF9').offsetHeight;
    const topRowHeight = document.querySelector('.TopRow__topRow___SvI7h').offsetHeight;
    const trailerHeight = document.querySelector('.Trailer__trailerBox___28ieD').offsetHeight + 3;
    const distanceToBelowTrailer = topRowHeight + trailerHeight;
    window.addEventListener('scroll', this.handleScroll);
    requests.getCourseData(this.state.courseId)
      .then(data => (
        this.setState({
          courseId: data.id,
          courseData: data,
          bannerHeight,
          distanceToBelowTrailer,
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

  render() {
    return (
      <div>
        <div className={ styles.banner }>
          <div className={ styles.container }>
            <TopRow />
            <div className={ styles.contentBox }>
              <Header course={ this.state.courseData }/>
              {this.state.sidebarFixed
                ? <FixedSidebar course={ this.state.courseData }/>
                : <Sidebar course={ this.state.courseData }/>
              }
            </div>
          </div>
        </div>
        {this.state.headerFixed
          ? <FixedHeader course={ this.state.courseData } />
          : null
        }
        <div className={ styles.belowContent }>Remove after Scroll Implementation</div>
      </div>
    );
  }
}

export default App;
