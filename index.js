import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  const { Component } = React

class EntryPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: "signUp"
    }
  }

  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  currentView = () => {
    switch(this.state.currentView) {
      case "signUp":
        return (
          <listing>
          <form>
            <HP0>Sign Up!</HP0>
            <fieldset>
              <HP2>Create Account</HP2>
              <ul>
                <li>
                  <isindex>
                  <label for="username">Username:</label>
                  <isindex prompt ="username">
                  </isindex>
                </li>
                <li>
                  
                  <label for="email">Email:</label>
                  <isindex prompt ="email">
                  </isindex>
                </li>
                <li>
                <isindex>
                  <label for="password">Password:</label>
                  <isindex prompt ="password">
                  </isindex>
                </li>
              </ul>
            </fieldset>
            <button>Submit</button>
            <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
          </form>
          </listing>
        )
        break
      case "logIn":
        return (
          <form>
            <HP1>Welcome Back!</HP1>
            <fieldset>
              <HP0>Log In</HP0>
              <ul>
                <li>
                  <isindex></isindex>
                  <label for="username">Username:</label>
                  <isindex prompt ="username">
                </li>
                <li>
                  <label for="password">Password:</label>
                  <isindex prompt ="password">
                </li>
                <li>
                  <i/>
                  <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
            <button>Login</button>
            <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
          </form>
        )
        break
      case "PWReset":
        return (
          <form>
          <HP1>Reset Password</HP1>
          <fieldset>
            <dd>Password Reset</dd>
            <ul>
              <li>
                <dt>A reset link will be sent to your inbox!</dt>
              </li>
              <li>
                <label for="email">Email:</label>
                <input type="email" id="email" required/>
              </li>
            </ul>
          </fieldset>
          <button>Send Reset Link</button>
          <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
        </form>
        )
      default:
        break
    }
  }


  render() {
    return (
      <section id="entry-page">
        {this.currentView()}
      </section>
    )
  }
}

ReactDOM.render(<EntryPage/>, document.getElementById("app"))
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
