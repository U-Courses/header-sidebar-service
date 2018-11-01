import React from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import requests from '../lib/requests.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: 5,
      courseData: {},
    };
  }

  componentDidMount() {
    requests.getCourseData(this.state.courseId)
      .then(data => {
        this.setState({
          courseId: data.id,
          courseData: data
        })
      })
  }

  render() {
    return (
      <div className="banner">
        <div className="container">
          <div className="row top-row">
            <div className="top-row-content">
              <div className="gift-text">Gift this course</div>
              <div className="heart">HEART</div>
            </div>
          </div>
          <div className="row content-box">
            <Header data={ this.state.courseData }/>
            <Sidebar data={ this.state.courseData }/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;