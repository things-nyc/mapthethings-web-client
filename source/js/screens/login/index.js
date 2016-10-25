import React, { PropTypes } from 'react';
import { navigate } from 'redux-routes';

import classNames from 'classnames';

import LoginForm from './components/login';

export const Login = ({
  action,
  text,
}) => {
  const divClasses = classNames('container-login');
  const buttonClasses = classNames('btn', 'btn-primary');

  return (
    <div className = { divClasses }>
      <h1>{ text.login.header }</h1>
      <LoginForm />
      <button className={ buttonClasses } onClick={() => action(navigate('/meeting'))}>
        Meeting
      </button>
      <button className = { buttonClasses } onClick={() => action(navigate('/'))}>
        Go home
      </button>
    </div>
  );
};

Login.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.object.isRequired,
};

