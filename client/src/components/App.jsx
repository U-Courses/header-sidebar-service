import React from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import requests from '../lib/requests.js';
import TopRow from './TopRow.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: 12,
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
          <TopRow />
          <div className="row content-box">
            <Header course={ this.state.courseData }/>
            <Sidebar course={ this.state.courseData }/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;