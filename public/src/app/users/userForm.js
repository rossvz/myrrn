import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  form: {
    height: '500px',
    width: '500px'
  }
};

const UserForm = React.createClass({
  getInitialState() {
    return {firstName: '', lastName: '', email: ''};
  },
  handleSubmit(e) {
    e.preventDefault();
    console.log("Here's whats in the form %O", this.state);
    this.setState({firstName: '', lastName: '', email: ''});
  },
  render() {
    return (
      <form style={styles.form} onSubmit={this.handleSubmit}>
        <input type="text" placeholder="First name" value={this.state.firstName}/>
        <input type="text" placeholder="Last name" value={this.state.lastName}/>
        <input type="email" placeholder="test@test.com" value={this.state.email}/>
        <input type="submit" value="Post"/>
      </form>
    );
  }
});

const elem = <UserForm/>;
ReactDOM.render(elem, document.getElementById('userForm'));

