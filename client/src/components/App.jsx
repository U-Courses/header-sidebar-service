import React from 'react';
import Header from './Header.jsx';
import FixedHeader from './FixedHeader.jsx';
import Sidebar from './Sidebar.jsx';
import requests from '../lib/requests.js';
import TopRow from './TopRow.jsx';
import styles from '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: 97,
      courseData: {},
      headerFixed: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    requests.getCourseData(this.state.courseId)
      .then(data => (
        this.setState({
          courseId: data.id,
          courseData: data,
        })
      ));
  }

  handleScroll() {
    const bannerHeight = document.querySelector('.App__banner___3EFF9').offsetHeight;
    if ((!this.state.headerFixed) && (window.scrollY >= bannerHeight)) {
      this.setState({ headerFixed: true });
    } else if (this.state.headerFixed && (window.scrollY <= bannerHeight)) {
      this.setState({ headerFixed: false });
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
              <Sidebar course={ this.state.courseData }/>
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
