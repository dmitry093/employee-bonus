import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {withTranslation} from 'react-i18next';

class TableRow extends Component {e
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('http://localhost:8080/employee/'+this.props.obj.id)
            .then(() => {
                console.log('Deleted');
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    render() {
        const {t} = this.props;
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.first_name}
                </td>
                <td>
                    {this.props.obj.second_name}
                </td>
                <td>
                    {this.props.obj.patronymic}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary mr-1">{t('Edit')}</Link>
                    <button onClick={this.delete} className="btn btn-danger">{t('Delete')}</button>
                </td>
            </tr>
        );
    }
}

export default withTranslation()(TableRow);