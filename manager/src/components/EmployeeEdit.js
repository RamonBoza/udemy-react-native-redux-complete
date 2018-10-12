import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardSection, Button, Confirm } from "./common";
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from "../actions";
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        })

    }

    onSaveButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    switchModal() {
        this.setState({showModal: !this.state.showModal })
    }

    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAcceptModal() {
        this.switchModal();
        this.props.employeeDelete({uid: this.props.employee.uid});
    }

    onDeclineModal() {
        this.switchModal();
    }


    render() {

        return(
            <Card>

                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onSaveButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.switchModal.bind(this)}>
                        Fire employee
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>


                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAcceptModal.bind(this)}
                    onDecline={this.onDeclineModal.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}
export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete } )(EmployeeEdit);