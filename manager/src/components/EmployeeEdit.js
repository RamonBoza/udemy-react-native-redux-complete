import React, { Component } from 'react';
import { Card, CardSection, Button } from "./common";
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from "../actions";
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

    onSaveButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate( {name, phone, shift: shift || 'Monday' });
    }

    onDeleteButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate( {name, phone, shift: shift || 'Monday' });
    }


    render() {

        return(
            <Card>

                <EmployeeForm {...this.props} />
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
export default connect(mapStateToProps, { employeeUpdate, employeeCreate } )(EmployeeEdit);