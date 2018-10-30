import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import requests from './requests.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      courseId: 1,
      courseData: {},
    };
  }

  componentDidMount() {
    // fetch(`/course/${this.state.courseId}`)
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     throw new Error(response.status);
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
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
          <Header />
          <Sidebar />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('headerSidebar'));
