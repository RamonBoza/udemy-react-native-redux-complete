import {
    EMPLOYEE_UPDATE
} from "./types";

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        pyeload: { prop, value }
    }
};