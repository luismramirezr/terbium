/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import DefaultLayout from '~/layouts/default';

interface Props {
  component: React.FC<any>;
  path: string
  exact: boolean | undefined;
  isPrivate: boolean | undefined;
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate,
  exact,
  path
}) => {
  // const signed = useSelector(state => state.auth.auth);

  const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={props => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
};

RouteWrapper.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  isPrivate: PropTypes.bool,
  exact: PropTypes.bool
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  exact: false,
};

export default RouteWrapper;
