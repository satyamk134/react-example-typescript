import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {setRegisterStep, addPersonalInfo} from '../actions/index';
import { connect } from 'react-redux'; 

const sleep = (ms:any) => new Promise(resolve => setTimeout(resolve, ms));
const validate = (values:any /* only available when using withFormik */) => {
    
    if(values.emailId.length>0){
        // return sleep(2000).then(() => {
        //     const errors = {};
        //     if (['admin@gmail.com', 'null', 'god'].includes(values.emailId)) {
        //       errors.emailId = 'Nice try';
        //     }
        //     // ...
        //     //console.log(errors)
        //     return errors;
        //   });
    }
    
  };
const personaInfoSchema = Yup.object().shape({
    emailId: Yup.string()
        .email('Invalid Email')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    firstName: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});
const PersonalInfo  = ({incrementStep,decrementStep, addPersonalInfo,currentStep,initialInfo}:any)=>{
    //console.log("setRegisterStep",setRegisterStep)
   
    return <Formik validateOnChange={true}
    initialValues={initialInfo} 
    validate={validate}
    validationSchema={personaInfoSchema}
    onSubmit={values => {
        // same shape as initial values
        
        incrementStep(currentStep+1)
        addPersonalInfo(values)
        /**
         * when validation is successful login the user
        */
    }}

>{({ errors, touched,isValid,dirty, validateField, submitForm, handleSubmit, values, handleChange }) => (
    <Form className="form-elements">
       

       <Field id="standard-basic1" error={errors.firstName && touched.firstName ? true : false}
            label="First Name" name="firstName" as={TextField}
            helperText={(errors.firstName && touched.firstName) && errors.firstName}
        />
        <Field id="standard-basic2" error={errors.lastName && touched.lastName ? true : false}
            label="Last Name" name="lastName" as={TextField}
            helperText={(errors.lastName && touched.lastName) && errors.lastName}
        />
        <Field id="standard-basic3" error={errors.emailId && touched.emailId ? true : false}
            label="Email" name="emailId" as={TextField}
            helperText={(errors.emailId && touched.emailId) && errors.emailId}
        />

        <Field id="standard-basic4" type="password"
            error={errors.password && touched.password ? true : false}
            label="Password" name="password" as={TextField}
            helperText={(errors.password && touched.password) && errors.password}
        />
        <div>
                 
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={submitForm}
                   
                    disabled={!(isValid && dirty)}
                  >
                     Next
                  </Button>
                </div>
    </Form>
)}
</Formik>
   
}


//const PersonalInfoComp =  connect(mapStateToProps,mapDispatchToProps)(PersonalInfo);
const mapStateToProps = (state:any) => {
    
    return ({
        currentStep: state.registerStep,
        initialInfo:state.personalInfo
    })
}

const mapDispatchToProps = (dispatch:any) => {
   
    return ({
        incrementStep: (step:any) => dispatch(setRegisterStep(step)),
        decrementStep: (step:any) =>dispatch(setRegisterStep(step)),
        addPersonalInfo: (personalInfo:any) =>dispatch(addPersonalInfo(personalInfo))
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(PersonalInfo)