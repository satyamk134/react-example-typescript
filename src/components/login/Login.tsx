import React, { Dispatch } from "react";
import { ILoginRes,IUserInfo } from '../models'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import loginService from '../../http/login.service';
import qs from 'qs'
import ButtonLink from '../ButtonLink';
import TextField from '@material-ui/core/TextField';
import '../login/login.scss';
import {setUserLoginStatus,TloginStatus,LoginAction } from '../../actions/index'
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid Email')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});


class login extends React.Component<{location:any,history:any},{}> {
    constructor(props:any) {
        super(props)
        

    }

    continueWithGoogleHandler = () => {
      
        //call the backendEndpoint to get the google consent screen
        loginService.getGoogleConsent()
            .then((response:any) => {
               
                let resp = response.data;
                if (resp.status === 'success') {
                    window.open(resp.url, '_self')
                }
            })

    }

    /**
     * login with local creddentials
    */
    contiuteWithLocalHandler = ({email:emailId, password}:any)=>{
        loginService.login({emailId, password})
        .then((response:{data:ILoginRes})=>{
            console.log("response.data",response.data)
            this.reDirectToDashboard(response.data.data)
        })
    }

    componentDidMount() {

        
       
        let code = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).code
       
        if (code) {

            //call the google end point to login and redirect to dashboard
            //LOGIN the users

            /**
             * first call get access-token
             */
            loginService.getAccessToken({ access_token: code.toString() })
                .then((response:any) => {
                   
                    //this.reDirectToDashboard(response.data);
                    localStorage.setItem('token', response.data.id_token);
                    return loginService.authorizeUser({ access_token: response.data.access_token })
                })
                .then((response:any) => {
                   
                    this.reDirectToDashboard(response.data.data);
                })

        }
        // browserHistory.listen( location =>  {
        //     //Do your stuff here
        //    });
    }

    reDirectToDashboard = ({ token, lastName, role, emailId }:IUserInfo) => {
   
        localStorage.removeItem('token');
        localStorage.setItem('token', token);
        localStorage.setItem('userInfo', JSON.stringify({ lastName: lastName, role: role, emailId: emailId }))
        //this.props.setUserLoginStatus(true)

        /**
         * Redirect based the role
         * -->customer redirect to products
         * -->admin redirect to dashboard
         */
        if(role === 'admin') {
            this.props.history.push('/dashboard')
        }else{
            console.log("came to products")
            this.props.history.push("/products")
        }
        
        //history.push("/home");

    }

    
    reDirectToRegister =  ()=> {
        return (history:any)=>history.push('/register');
    }

    loginHandler = () => {
        
        let history = useHistory();
        history.push("/users");
    }

    render() {
        return (
            <div className='container login-container'>
                <div className="form-wrapper">
                    <Formik validateOnChange={true}
                        initialValues={{
                            email: 'satyam6@gmail.com',
                            password: '123456',
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={values => {
                            // same shape as initial values
                          
                            this.contiuteWithLocalHandler(values);
                            /**
                             * when validation is successful login the user
                            */
                           
                        }}

                    >{({ errors, touched, validateField, submitForm, handleSubmit, values, handleChange }) => (
                        <Form className="form-elements">
                            <div className="third-party-login-btns">
                                <div className='continute-with-google' onClick={this.continueWithGoogleHandler}>
                                </div>
                                <div className='continute-with-google'>

                                </div>
                            </div>

                            <Field id="standard-basic" value={values.email} error={errors.email && touched.email ? true : false}
                                label="Email" name="email" as={TextField}
                                helperText={(errors.email && touched.email) && errors.email}
                            />

                            <Field id="standard-basic1" type="password" value={values.password}
                                error={errors.password && touched.password ? true : false}
                                label="Password" name="password" as={TextField}
                                helperText={(errors.password && touched.password) && errors.password}
                            />

                            <div className="login-register-wrapper">
                                <div className="login-register-btn">
                                    <ButtonLink  link="dashboard" text="LOGIN" color="primary" onClick={submitForm} />
                                    <div className="register-btn-wrapper">
                                        <div  className="register-btn">
                                            <ButtonLink color="secondary" link="register" text="REGISTER" onClick={this.reDirectToRegister()} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                    </Formik>
                    
                </div>
            </div>
        )
    }



}

const mapStateToprops = (state:TloginStatus)=>{
    return ({loggedIn:state.loginStatus })
}


const mapDispatchToProps = (dispatch:Dispatch<LoginAction>) => {
   
    return ({
        setUserLoginStatus: (loginStatus:boolean) => dispatch(setUserLoginStatus({loginStatus:true}))
    })
}
// export default login
export default connect(
    mapStateToprops,
    mapDispatchToProps
)(login)
