import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }


  errors() {
    return (
      this.props.errors.map((error, i) => {
        return (<li className="error" key={`error-${i}`}>{error}</li>);
      })
    );
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  //ComponentW

  render() {
    let buttonHeader;
    let linkTo;
    let linkHeader;
    //
    // if (this.props.formType === "login") {
    //   buttonHeader = "Log in";
    //   linkTo = "/signup";
    //   linkHeader="Sign up";
    // } else {
    //   buttonHeader = "Sign up";
    //   linkTo = "/login";
    //   linkHeader="Log in";
    // }
    buttonHeader = "Log in";
    linkTo = "/signup";
    linkHeader="Sign up";

    return (
      <div className = "login">
        <div className="logo-banner">
          <img src={window.taskChampAssets.taskChampLogo}></img>
        </div>
        <ul>
          {this.errors()}
        </ul>
        <section className="login-container">
          <h1>Log in to TaskChamp</h1>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <label>username
              <input
                type="text"
                value={this.state.username}
                placeholder="username"
                onChange={this.update('username')}/>
            </label>
            <label>password
              <input
                type="password"
                placeholder="password"
                onChange={this.update('password')}/>
              <input className="submit" type="submit" value={buttonHeader}/>
            </label>
          </form>
          <div></div>
          <Link to={linkTo}>{linkHeader}</Link>
        </section>

      </div>
    );
  }
}

export default SessionForm;
