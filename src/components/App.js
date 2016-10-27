import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <IndexLink to="/">Home</IndexLink>
      {' | '}
      <Link to="/fuel-savings">Demo App</Link>
      {' | '}
      <Link to="/about">About</Link>
      {' | '}
      <a href="/api/v1">API Test</a>
      <br/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
