import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router} from 'react-router-dom';
import Main from './../main/main.jsx';
import {connect} from 'react-redux';
import MovieInfo from '../movie-info/movie-info.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import MyList from '../my-list/my-list.jsx';
import {Operation as UserOperation} from "../../reducer/user/user.js";
import history from "../../history.js";
import {AppRoute} from "../../const.js";


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    const {login} = this.props;

    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <Main/>
          </Route>
          <Route exact path={`${AppRoute.FILM}/:id`}
            render={({match}) => {
              return <MovieInfo id={match.params.id}/>;
            }
            }>
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <SignIn
              onSubmit={login}
            />
          </Route>
          <PrivateRoute
            exact
            path={AppRoute.MYLIST}
            render={() => {
              return (
                <MyList/>
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  login: PropTypes.func,
};


const mapDispatchToProps = (dispatch) => {
  return {
    login(authData) {
      dispatch(UserOperation.login(authData));
    }
  };
};


export default connect(null, mapDispatchToProps)(App);
