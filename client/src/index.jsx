import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import requests from './lib/requests.js'

class App extends React.Component {
  constructor() {
    super();
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
      <div className="container">
        <div className="row"></div>
        <div className="row">
          <Header data={ this.state.courseData }/>
          <Sidebar data={ this.state.courseData }/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('headerSidebar'));
