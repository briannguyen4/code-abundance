import React from 'react';
import Splash from './splash/splash';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import QuestionIndexContainer from './question_index/question_index_container';
import NavBarContainer from './navbar/navbar_container'

const App = () => (
    <div> 
        <NavBarContainer />
        <AuthRoute exact path='/' component={Splash} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signup' component={SignupFormContainer}/>
        <Route exact path='/questions' component={QuestionIndexContainer} />
    </div>
);

export default App;