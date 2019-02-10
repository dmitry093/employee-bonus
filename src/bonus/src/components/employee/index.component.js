import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
    }
    componentDidMount(){
        axios.get('http://localhost:8080/employees')
            .then(response => {
                console.log(response.data);
                this.setState({ employees: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        return this.state.employees.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Employee List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Second name</th>
                        <th>Patronymic</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}