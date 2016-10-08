import React from 'react';
import { Link, hashHistory } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: "",
          email: "",
          team_id: ""
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


  componentWillUpdate(){
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  render() {
    let buttonHeader;
    let linkTo;
    let linkHeader;

    if (this.props.formType === "login") {
      buttonHeader = "Log in";
      linkTo = "/signup";
      linkHeader="Sign up";
    } else {
      buttonHeader = "Sign up";
      linkTo = "/login";
      linkHeader="Log in";
    }

    const options = this.props.teams.map( team => (
      <option value={team.id} className="option">{team.name}</option>
    ));

    return (
      <div className="welcome-page">

        <nav className="welcome-nav group">
          <p className="logo">TaskChamp 2</p>
          <p><Link to={linkTo} className="button">{linkHeader}</Link></p>
        </nav>

        <ul>
          {this.errors()}
        </ul>

        <section className="intro-container">
          <h1>Champs, synchronized.</h1>
          <h2>TaskChamp keeps teammates organized. </h2>
        </section>

        <section className="signup-container group">
          <div className="signup-illustration">
            <img src={window.taskChampAssets.signupIllustration}></img>
          </div>
          <form className="signup-form" onSubmit={this.handleSubmit}>

            <label><p>Your full name</p>
              <input
                type="text"
                value={this.state.username}
                placeholder="Julie Orangepeel"
                onChange={this.update('username')}/>
            </label>
            <label><p>Company or organization</p>
              <select value={this.state.team_id} onChange={this.update('team_id')}>
                <option value="" className="option">select a team</option>
                {options}
              </select>
            </label>
            <label><p>Email</p>
              <input
                type="email"
                placeholder="email"
                onChange={this.update('email')}/>
            </label>
            <label><p>Password</p>
              <input
                type="password"
                placeholder="Easy to remember, hard to guess"
                onChange={this.update('password')}/>
            </label>
            <input type="submit" value="Start my 60 day free trial" className="submit"/>
          </form>
        </section>
      </div>
    );
  }
}

export default SignupForm;
