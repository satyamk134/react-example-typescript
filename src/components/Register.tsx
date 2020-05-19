import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import {setRegisterStep, addPaymentInfo, addPersonalInfo} from '../actions/index';
import PersonalInfo from './PersonalInfo';
import PaymentInfo from './PaymentInfo';
import SecurityQuestion from './SecurityQuestion'
import loginService from '../http/login.service' 
import { toast } from 'react-toastify'
import  { useHistory } from 'react-router-dom';
import ButtonLink from '../components/ButtonLink';
import Header from '../components/header/header';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '40%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Personal Info', 'Payment Info', 'Security'];
}


function getStepContent(step:number) {
  switch (step) {
    case 0:
      return <PersonalInfo />
    case 1:
      return <PaymentInfo />
    case 2: return <SecurityQuestion />
    default:
      return 'Unknown step';
  }
}

function Register({currentStep,gotoLastStep,newUserDetails,intilisePersonalInfo,initialPaymentInfo}:any) {
  let history = useHistory();
//   gotoLastStep(0)
  const classes = useStyles();
  
  const steps = getSteps();

 
  const handleEdit = ()=>gotoLastStep(2)

  const createAccount = () => {
       
        return loginService.createUser(newUserDetails)
        .then((response:any)=>{
            intilisePersonalInfo();
            initialPaymentInfo();
            gotoLastStep(0)
            toast.success('User Created Successfully');
            history.push('/')
            // return <Redirect to="/">
        })
  }

  return (
    <div>
        <Header />
        <div className={classes.root}>

      <Stepper activeStep={currentStep} orientation="vertical" >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography component={'span'} variant={'body2'}>{getStepContent(index)}</Typography>
              
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {currentStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleEdit} className={classes.button}>
            Back
          </Button>
          <ButtonLink color="secondary" link="register" text="CREATE"  onClick={createAccount}  />
         
        </Paper>
      )}
    </div>
    </div>
    
  );
}



const mapStateToProps = (state:any) => {
   
    return ({
        currentStep: state.registerStep,
        newUserDetails:{...state.personalInfo, ...state.paymentInfo}
    })
}

const mapDispatchToProps = (dispatch:any) => {
    
    return ({
        gotoLastStep: (step:any) => dispatch(setRegisterStep(step)),
        intilisePersonalInfo:(userInfo:any)=>dispatch(addPersonalInfo({emailId:'',password:'',firstName:'',lastName:''})),
        initialPaymentInfo:(info:any)=>dispatch(addPaymentInfo({accountNumber:'',panNumber:''}))
    })
}

const RegisterComp = connect(mapStateToProps,mapDispatchToProps)(Register)

export {
    RegisterComp
}





