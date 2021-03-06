import React, { Dispatch } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { setRegisterStep, addPaymentInfo } from '../actions/index';
import { connect } from 'react-redux';
import { IPaymentInfo, AddPaymentAction, setRegisterAction } from '../actions'
const LoginSchema = Yup.object().shape({
    accountNumber: Yup.string()
        .required('Required')
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),

    panNumber: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});
const PaymentInfo = ({ incrementStep, decrementStep, initialPayemntInfo, currentStep, addPayment }: any) => {
    //console.log("setRegisterStep",setRegisterStep)


    const prevStepHandler = () => {
        decrementStep(currentStep - 1)
    }
    return <Formik
        enableReinitialize
        initialValues={initialPayemntInfo}
        validateOnMount={true}

        validationSchema={LoginSchema}
        onSubmit={values => {
            // same shape as initial values

            incrementStep(currentStep + 1);
            addPayment(values)
            /**
             * when validation is successful login the user
            */

        }}

    >{({ errors, touched, isValid, dirty, validateField, submitForm, handleSubmit, values, handleChange }) => (
        <Form className="form-elements">


            <Field id="accountNumber" error={errors.accountNumber && touched.accountNumber ? true : false}
                label="Account Number" name="accountNumber" as={TextField}
                helperText={(errors.accountNumber && touched.accountNumber) && errors.accountNumber}
            />

            <Field id="panNumber" type="password"
                error={errors.panNumber && touched.panNumber ? true : false}
                label="Pan Number" name="panNumber" as={TextField}
                helperText={(errors.panNumber && touched.panNumber) && errors.panNumber}
            />
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={prevStepHandler}


                >
                    Back
                  </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={submitForm}

                    disabled={!(isValid)}
                >
                    Next
                  </Button>
            </div>
        </Form>
    )}
    </Formik>
}

type TRegisterStep = {
    registerStep: number,
    paymentInfo: IPaymentInfo
}
const mapStateToProps = (state: TRegisterStep) => {
    return ({
        currentStep: state.registerStep,
        initialPayemntInfo: state.paymentInfo
    })
}

const mapDispatchToProps = (dispatch: Dispatch<AddPaymentAction | setRegisterAction>) => {

    return ({
        incrementStep: (step: number) => dispatch(setRegisterStep(step)),
        decrementStep: (step: number) => dispatch(setRegisterStep(step)),
        addPayment: (paymentInfo: IPaymentInfo) => dispatch(addPaymentInfo(paymentInfo))
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(PaymentInfo)