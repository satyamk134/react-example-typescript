import React, { Dispatch } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {setRegisterStep, addPersonalInfo} from '../actions/index';
import { connect } from 'react-redux'; 
import { IPersonalInfo,AddPersonalAction,setRegisterAction } from  '../actions'
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
    enableReinitialize
    initialValues={initialInfo}
    validateOnMount={true}
    validate={validate}
    validationSchema={personaInfoSchema}
    onSubmit={(values,{resetForm}) => {
        // same shape as initial values
        //resetForm()
        incrementStep(currentStep+1)
        addPersonalInfo(values)
        /**
         * when validation is successful login the user
        */
    }}

>{({ errors, setFieldValue,touched,isValid,dirty, validateField, submitForm, handleSubmit, values, handleChange }:any) => (
    <Form className="form-elements">
        
       <Field id="standard-basic1"  value={values.firstName} error={errors.firstName && touched.firstName ? true : false}
            label="First Name" name="firstName" as={TextField}
            helperText={(errors.firstName && touched.firstName) && errors.firstName}
        />
        <Field id="standard-basic2"  value={values.lastName} error={errors.lastName && touched.lastName ? true : false}
            label="Last Name" name="lastName" as={TextField}
            helperText={(errors.lastName && touched.lastName) && errors.lastName}
        />
        <Field id="standard-basic3"  value={values.emailId} error={errors.emailId && touched.emailId ? true : false}
            label="Email" name="emailId" as={TextField}
            helperText={(errors.emailId && touched.emailId) && errors.emailId}
        />

        <Field id="standard-basic4"  value={values.password} type="password"
            error={errors.password && touched.password ? true : false}
            label="Password" name="password" as={TextField}
            helperText={(errors.password && touched.password) && errors.password}
        />
        <div>
                 
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

function Effect(props:any) {
    const effect = () => {
      if (props.formik.submitCount > 0 && !props.formik.isValid) {
        props.onSubmissionError();
      }
    };
    React.useEffect(effect, [props.formik.submitCount]);
    return null;
}

type  TRegisterStep = {
    registerStep:number,
    personalInfo:IPersonalInfo
}

const mapStateToProps = (state:TRegisterStep) => {
    
    return ({
        currentStep: state.registerStep,
        initialInfo:state.personalInfo
    })
}

const mapDispatchToProps = (dispatch:Dispatch<AddPersonalAction | setRegisterAction>) => {
   
    return ({
        incrementStep: (step:number) => dispatch(setRegisterStep(step)),
        decrementStep: (step:number) =>dispatch(setRegisterStep(step)),
        addPersonalInfo: (personalInfo:IPersonalInfo) =>dispatch(addPersonalInfo(personalInfo))
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(PersonalInfo)