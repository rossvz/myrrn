import React, {Component} from 'react';

const styles = {
  user: {
    height: '15rem',
    width: '15rem',
    border: '1px solid lightgray',
    borderRadius: '1rem',
    margin: '1rem',
    padding: '1rem'
  },
  logo: {
    width: '5rem',
    height: '5rem',
    float: 'right',
    margin: '0 0 .5rem .5rem'
  },
  h3: {
    fontSize: '1.5rem',
    margin: '0 0 2rem 0'
  }
};

export class User extends Component {
  render() {
    return (
      <div style={styles.user}>
        <h3 style={styles.h3}>
          Name: {this.props.user.first_name} {this.props.user.last_name}
        </h3>
        <p>Email: {this.props.user.email}</p>
      </div>
    );
  }
}

User.propTypes = {
  user: React.PropTypes.object.isRequired
};
