import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';
import axios from 'axios';
import TableRow from './TableRow';

class Index extends Component {

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
        const {t} = this.props;
        return (
            <div>
                <h3 align="center">{t('Employee list')}</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>{t('First name')}</th>
                        <th>{t('Second name')}</th>
                        <th>{t('Patronymic')}</th>
                        <th colSpan="2">{t('Action')}</th>
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

export default withTranslation()(Index);