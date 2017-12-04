import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import propTypes from 'prop-types'

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
            src={this.props.img}
            alt="Ty's face"
            style={{width: 100, height: 100}}
            />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username}</h3>
      </div>
    )
  }
}

Badge.propTypes = {
    img: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    username: propTypes.string.isRequired
}

ReactDOM.render(
    <Badge
        name='Tyler McGinnis'
        username='tylermcginnis'
        img={'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'}
    />,
    document.getElementById('root')
);
registerServiceWorker();
