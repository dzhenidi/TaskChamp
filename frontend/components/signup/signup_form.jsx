import React from 'react';
import { Link, hashHistory } from 'react-router';
import BodyClassName from 'react-body-classname';

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
      this.demoLogin = this.demoLogin.bind(this);
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

  componentDidUpdate(){
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  demoLogin(e){
    e.preventDefault();
    let user = {
        username: "Kristen M.",
        password: "starwars",
        email: "kristen@rollingpress.com",
        team_id: 2
    };
    this.props.demoLogin(user);
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

    const options = this.props.teams.map( (team, idx) => (
      <option key={idx} value={team.id} className="option">
        {team.name}
      </option>
    ));

    return (
      <BodyClassName className='landing-home'>
        <div className="welcome-page">

          <nav className="welcome-nav group">
            <img src={window.taskChampAssets.taskChampLogo}></img>
            <p className="logo">TaskChamp 1</p>
            <p><Link to={linkTo} className="button">{linkHeader}</Link></p>
          </nav>

          <ul>
            {this.errors()}
          </ul>

          <section className="intro-container">
            <h1>Champs, synchronized.</h1>
            <p>TaskChamp keeps teams coordinated. Regardless of your team's
              internal structure, TaskChamp will make collaboration seamless and
              project completion a shared goal. </p>
          </section>

          <section className="signup-container group">
            <div className="signup-illustration">
              <img src={window.taskChampAssets.signupIllustration}></img>
            </div>
            <form className="signup-form" onSubmit={this.handleSubmit}>

              <label><p>Your username</p>
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
              <input
                type="submit"
                value="Start my 60 day free trial"
                className="submit"/>
              <input
                type="submit"
                value="Demo Login"
                className="submit demo"
                onClick={this.demoLogin}/>
            </form>
          </section>
        </div>
      </BodyClassName>
    );
  }
}

export default SignupForm;
