import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Query, ApolloConsumer } from "react-apollo";
import Queries from "../../graphql/queries";
const { IS_LOGGED_IN } = Queries;

const AuthRoute = ({
  component: Component,
  path,
  exact,
  routeType,
  ...rest
}) => (
  <Query query={IS_LOGGED_IN}>
    {({ data }) => {
      if (routeType === "auth") {
        return (
          <Route
            path={path}
            exact={exact}
            render={props =>
              !data.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
            }
          />
        );
      } else {
        return (
          <Route
            {...rest}
            render={props => {
              return data.isLoggedIn ? (
                <Component {...props} />
              ) : (
                <Redirect to="/register" />
              );
            }}
          />
        );
      }
    }}
  </Query>
);

export default AuthRoute;
