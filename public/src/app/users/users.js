import React, {Component} from 'react';
import axios from 'axios';

import {User} from './user';

const styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  users: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

export class Users extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/users')
      .then(response => {
        this.setState({users: response.data.users});
      });
  }

  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.h2}>
          Here are some users that Ross made:
        </h2>
        <div style={styles.users}>
          {this.state.users.map((user, i) => (
            <User key={i} user={user}/>
          ))}
        </div>
      </div>
    );
  }
}
