import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/TopRow.css'

class TopRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      hover: false,
    }
  }

  handleHover() {
    if (this.state.clicked) {
      return;
    }

    this.setState({
      hover: !this.state.hover,
    });
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    let heart;

    if (this.state.clicked || this.state.hover) {
      heart = fas.faHeart;
    } else {
      heart = far.faHeart;
    }

    return (
      <div className={ styles.topRow }>
        <div className={ styles.topRowContent }>
          <div className={ styles.giftText }>Gift This Course</div>
          <div className={ styles.heart }>
            <FontAwesomeIcon icon={ heart } style={ {color: 'rgb(236, 82, 82)'} } onMouseEnter={ ()=> this.handleHover() } onMouseLeave={ ()=> this.handleHover() } onClick={ ()=> this.handleClick() }/>
          </div>
        </div>
      </div>
    );
  }
};

export default TopRow;