import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'signin.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js'
import {withTranslation} from 'react-i18next';
import gbflag from './img/flags/GB.png'
import ruflag from './img/flags/RU.png'
import employeeLogo from './img/logo/employee.png'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import axios from 'axios';

import Create from './components/employee/create.component';
import Edit from './components/employee/edit.component';
import Index from './components/employee/index.component';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            user: {}
        };
    }

    handleLogin(e) {
        e.preventDefault();
        axios({
            method: 'get',
            url: 'http://localhost:8080/user',
            auth: {
                username: 'ad',
                password: 'password'
             }
        }).then(response => {
            console.log(response.data);
            this.setState({isLoggedIn: true});
        })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const {t, i18n} = this.props;
        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
        };
        let footer = <footer className="footer mt-auto py-3">
            <div className="container text-center">
                <span className="text-muted">© dmitry, 2019</span>
                <br/>
                <img width="32" src={gbflag} alt={t('enlang')} title={t('enlang')}
                     onClick={() => changeLanguage('en')}/>
                <img width="32" src={ruflag} alt={t('rulang')} title={t('rulang')}
                     onClick={() => changeLanguage('ru')}/>
            </div>
        </footer>;

        if (!this.state.isLoggedIn) {
            return (<form className="form-signin text-center" onSubmit={this.handleLogin}>
                    <img className="mb-4" src={employeeLogo} alt="" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">{t('Please sign in')}</h1>
                    <input type="login" id="inputLogin" name="login" className="form-control" placeholder={t("Login")}
                           required=""
                           autoFocus/>
                    <input type="password" id="inputPassword" name="password" className="form-control"
                           placeholder={t("Password")}
                           required=""/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">{t("Sign in")}</button>
                    {footer}
                </form>
            );
        }
        else {
            return (
                <Router>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <Link to={'/'} className="navbar-brand">EmployeeBonus</Link>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link to={'/'} className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/create'} className="nav-link">Create</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/index'} className="nav-link">Index</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <br/>
                        <h2>{t('Welcome')}</h2>
                        <br/>
                        <Switch>
                            <Route exact path='/create' component={Create}/>
                            <Route path='/edit/:id' component={Edit}/>
                            <Route path='/index' component={Index}/>
                        </Switch>
                        {footer}
                    </div>
                </Router>
            );
        }
    }
}

export default withTranslation()(App);