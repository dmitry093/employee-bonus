import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js'
import {withTranslation} from 'react-i18next';

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Create from './components/employee/create.component';
import Edit from './components/employee/edit.component';
import Index from './components/employee/index.component';

class App extends Component {
    render() {
        const {t, i18n} = this.props;
        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
        };
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
                    <footer className="footer mt-auto py-3">
                        <div className="container text-center">
                            <span className="text-muted">© dmitry, 2019</span>

                            <button onClick={() => changeLanguage('ru')}>Русский</button>
                            <button onClick={() => changeLanguage('en')}>English</button>

                        </div>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default withTranslation()(App);