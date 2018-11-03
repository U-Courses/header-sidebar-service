import React from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import requests from '../lib/requests.js';
import TopRow from './TopRow.jsx';
import styles from '../styles/App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: 97,
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
        <div className={ styles.belowContent }>Remove after Scroll Implementation</div> 
      </div>
    )
  }
}

export default App;