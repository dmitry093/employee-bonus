import React, {Component} from 'react';
import axios from 'axios';
import {withTranslation} from 'react-i18next';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeSecondName = this.onChangeSecondName.bind(this);
        this.onChangePatronymic = this.onChangePatronymic.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            second_name: '',
            patronymic: '',
            updated: false,
            errMsg: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/employee/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    first_name: response.data.first_name,
                    second_name: response.data.second_name,
                    patronymic: response.data.patronymic
                });
            })
            .catch(function (error) {
                if (error.response.status === 404) {
                    console.log('redirect');
                }
            })
    }

    onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeSecondName(e) {
        this.setState({
            second_name: e.target.value
        })
    }

    onChangePatronymic(e) {
        this.setState({
            patronymic: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            first_name: this.state.first_name,
            second_name: this.state.second_name,
            patronymic: this.state.patronymic
        };
        axios.put('http://localhost:8080/employee/' + this.props.match.params.id, obj)
            .then(res => {
                this.setState({
                    updated: true
                });
            })
            .catch(error => {
                    console.log(error);
                    this.setState({
                        errMsg: error.message
                    });
                }
            );
    }

    render() {
        const {t} = this.props;
        let notification = null;

        if (this.state.updated) {
            notification = <div className="alert alert-success" role="alert">
                <strong>{t('Success')}!</strong> {t('Updated')}.
            </div>;
        }

        if (this.state.errMsg !== '') {
            notification = <div className="alert alert-danger" role="alert">
                <strong>{t('Error')}!</strong> {this.state.errMsg}
            </div>;
        }
        return (
            <div style={{marginTop: 10}}>
                <h3 align="center">{t('Update employee')}</h3>
                {notification}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>{t('First name')}: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.first_name}
                            onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('Second name')}: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.second_name}
                               onChange={this.onChangeSecondName}
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('Patronymic')}: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.patronymic}
                               onChange={this.onChangePatronymic}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               value={t('Update')}
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default withTranslation()(Edit);