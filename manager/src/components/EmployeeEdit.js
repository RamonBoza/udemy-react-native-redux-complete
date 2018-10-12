import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardSection, Button } from "./common";
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave } from "../actions";
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        })

    }

    onSaveButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onDeleteButtonPress() {



    }


    render() {

        return(
            <Card>

                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onSaveButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                    <Button onPress={this.onDeleteButtonPress.bind(this)}>
                        Delete
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}
export default connect(mapStateToProps, { employeeUpdate, employeeSave } )(EmployeeEdit);