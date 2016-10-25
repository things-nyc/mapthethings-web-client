import React from 'react';
import classNames from 'classnames';

class LoginForm extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      active: false,
      login: '',
      password: ''
    };

    this.setActive = this.setActive.bind(this);
    this.checkValue = this.checkValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  setActive () {
    this.setState({ active: true });
  }

  checkValue () {
    if (this.state.input === '' || this.state.password === '') {
      this.setState({ active: false });
    }
  }

  handleChange (e) {
    const newState = {};
    newState[e.target.attributes.name.value] = e.target.value;
    this.setState(newState);
  }

  render () {
    return (
      <div className={ classNames(this.props.className, 'login', (this.state.active) ? 'active' : null) }>
        <form>
          <div className="login-form">
            <div className="form-group">
              <label htmlFor="InputEmail">Email</label>
              <input onFocus={ this.setActive } onBlur={ this.checkValue } onChange={ this.handleChange } name="login" value={ this.state.login } type="email" className="form-control" id="InputEmail" />
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword">Password</label>
              <input onFocus={ this.setActive } onBlur={ this.checkValue } onChange={ this.handleChange } value={ this.state.password } name="password" type="password" className="form-control" id="InputPassword" />
            </div>
            <div className="checkbox">
              <label>
                <input onChange={ this.setActive } type="checkbox" /> Remember me
              </label>
            </div>
          </div>
          <button className={ classNames('cta cta__login vspace-small', (this.state.active) ? 'cta__login--active' : null) } to="dashboard">Log in</button>
        </form>
        <div className="forgot">
          <a>Forgot your password?</a>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  className: React.PropTypes.string
};

export default LoginForm;
