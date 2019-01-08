import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, Message } from 'semantic-ui-react';
import actions from '../actions/index';
import SignUp from './SignUp';
import PopularTasks from '../components/PopularTasks';

import '../style/Landing.scss';

class Landing extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      isFormDataLoaded: false,
      userName: '',
      password: '',
      isLoginOrSignUp: false
    };
  };

  onEventChange = e => {
    this.setState({
      [name] : e.target.value
    });
  };

  renderRegisterMessage = () => {
    console.log('yee')
    console.log(this.props);
  }

  onSubmit = e => {
    e.preventDefault();
    const {reqLoginData} = this.props;
    const {userName, password} = this.state;
    reqLoginData(userName, password);
  };

  onSelectLogin = () => this.setState({ isLoginOrSignUp: true });

  onSelectSignUp = () => this.setState({ isLoginOrSignUp: false });


  renderLoginForm = () => {
    return(
      <div className={"landing-container__login-form"}>
      <h1 className={'signup-title'}>Log In</h1>
      <form onSubmit={this.onSubmit} >
      <label>
        Name:
        <input name="userName" onChange={this.onEventChange} />
      </label>
      <label>
      Password:
       <input name="password" onChange={this.onEventChange} />
      </label>
       <input type="submit" value="Submit" />
      </form>
      <div className={"SignUp-button"} onClick={() => {this.onSelectLogin()}}>
        Did you mean to Sign Up? Click here.
      </div>
    </div>
    )
  }

  renderLoginOrSignUp = () => {
    const LoginOrSignUp =
        this.state.isLoginOrSignUp ?
        <SignUp onSelectSignUp={this.onSelectSignUp} /> :
        this.renderLoginForm();

    return(
    <div>
      { LoginOrSignUp }
    </div>
    )
  }

  render() {
    return (
      <div className="landing-container">
       <Image src={'https://assets.taskrabbit.com/v3/assets/static/heros/homepage/hero-v2-b4c1033eac5b640d40b824503e42aff0.jpg'}
              />
        <div className={"landing-container__Heading"}>
         Welcome to Task Turtle
        </div>
        { this.renderLoginOrSignUp() }
        <PopularTasks />
     </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    registerUserMessage: state.register_message
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ reqLoginData: actions['sendLoginRequest']}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
