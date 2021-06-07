import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { validate } from '../utils/validate';
import { Button } from './Button';
import '../assets/FormOrder.scss';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className='containerAll'>
        <label className="formField mt-15">{label}</label>
        <div className='containerInput'>
            <input {...input} className="formField mt-15" placeholder={label} type={type} />
            {touched && error && <span className="error">{error}</span>}        
        </div>
    </div>
)

const FormOrder = props => {
    const { handleSubmit, pristine, submitting, reset, touched, error } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field
                className="formField"
                name="firstName"
                component={renderField}
                type="text"
                label="FirstName" />
            {touched && error && <span>{error}</span>}                
            <Field
                className="formField"
                name="lastName"
                component={renderField}
                type="text"
                label="LastName" />
            {touched && error && <span>{error}</span>}
            <Field
                className="formField"
                name="age"
                component={renderField}
                type="text"
                label="User age" />
            {touched && error && <span>{error}</span>}
            <Field
                className="formField"
                name="deliveryAddress"
                component={renderField}
                type="text"
                label="Address" />
            {touched && error && <span>{error}</span>}
            <Field
                className="formField"
                name="mobilePhone"
                component={renderField}
                type="text"
                label="Phone number" />
            {touched && error && <span>{error}</span>}
            <div className='buttonContainer'>
                <Button
                    className="btn m-15"
                    text="Submit"
                    type="submit"
                    disabled={pristine || submitting}
                    style={{ backgroundColor: "green" }}
                />
                <Button
                    className="btn m-15"
                    text="Clear All"
                    type="button"
                    disabled={pristine || submitting}
                    style={{ backgroundColor: "red" }}
                    onClick={reset}
                />
            </div>
        </form >
    )
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('contactOrder'));

export const FormOrderRedux = reduxForm({
    form: 'contactOrder',
    validate,
    onSubmitSuccess: afterSubmit,
})(FormOrder);