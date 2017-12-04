import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import propTypes from 'prop-types'

class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {this.props.list.filter(function(item){
            return item.friend === true
        }).map(function(friends, index){
            return <li key={index}>{friends.name}</li>
          })}
        </ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {this.props.list.filter(function(item){
            return item.friend === false
        }).map(function(notFriends, index){
            return <li key={index}>{notFriends.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

Users.propTypes = {
    list: propTypes.arrayOf(propTypes.shape({
        name: propTypes.string.isRequired,
        friend: propTypes.bool.isRequired
    })).isRequired
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]}
  />,
  document.getElementById('root')
);
