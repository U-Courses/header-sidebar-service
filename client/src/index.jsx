import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      courseId: 1,
    };
  }

  componentDidMount() {
    fetch(`/course/${this.state.courseId}`)
      .then((response) => {
        
      });
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
