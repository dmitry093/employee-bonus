import React, {Component} from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeSecondName = this.onChangeSecondName.bind(this);
        this.onChangePatronymic = this.onChangePatronymic.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            second_name: '',
            patronymic:'',
            created: false,
            errMsg: ''
        }
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

        if (!this.state.first_name || !this.state.second_name || !this.state.patronymic){
            this.setState({
                errMsg : 'Firstname, Secondname, Patronymic must be not empty!'
            });
            return;
        }

        const obj = {
            first_name: this.state.first_name,
            second_name: this.state.second_name,
            patronymic: this.state.patronymic
        };
        axios.post('http://localhost:8080/employee', obj)
            .then(res => {
                this.setState({
                    updated: true
                });
            })
            .catch(error => {
                this.setState({
                    errMsg: error.message
                })
            });

        this.setState({
            first_name: '',
            second_name: '',
            patronymic: ''
        })
    }

    render() {
        let notification = null;

        if (this.state.updated) {
            notification = <div className="alert alert-success" role="alert">
                <strong>Success!</strong> Created.
            </div>;
        }
        console.log(this.state.errMsg);

        if (this.state.errMsg !== '') {
            notification = <div className="alert alert-danger" role="alert">
                <strong>Error!</strong> {this.state.errMsg}
            </div>;
        }
        return (
            <div style={{marginTop: 10}}>
                <h3>Add Employee</h3>
                {notification}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Firstname: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.first_name}
                            onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>SecondName: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.second_name}
                               onChange={this.onChangeSecondName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Patronymic: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.patronymic}
                               onChange={this.onChangePatronymic}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save employee" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}