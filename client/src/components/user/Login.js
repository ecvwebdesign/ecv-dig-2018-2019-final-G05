import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { authentication } from '../../services/authentication';
import {
    LinearProgress,
} from '@material-ui/core';
import { login, logout } from '../../actions/user/authentication';
import { connect } from 'react-redux';
import SubmitButton from "../../utils/submit-button";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.props.logout();
    }

    render() {
        return(
            <div>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().required('L\'email est requis'),
                        password: Yup.string().required('Le mot de passe est requis')
                    })}
                    onSubmit={({ email, password }, { setStatus, setSubmitting }) => {
                        setStatus();
                        authentication.login(email, password)
                            .then(
                                (user) => {
                                    setSubmitting(false);
                                    this.props.history.push('/');
                                    this.props.login(user);
                                },
                                error => {
                                    setSubmitting(false);
                                    setStatus(error);
                                }
                            );
                    }}
                    render={({ errors, status, touched, isSubmitting }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="email">ADRESSE MAIL</label>
                                <Field name="email" margin='normal' type="text" label="Votre email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">MOT DE PASSE</label>
                                <Field name="password" margin='normal' type="password" label="Votre mot de passe" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            </div>
                            <span className="form-minor-info">Mot de passe oublié</span>
                            <div className="form-group mt-3 text-center">
                                {isSubmitting ? (
                                    <LinearProgress/>
                                ) : (
                                    <SubmitButton disabled={isSubmitting} text="Se connecter"/>
                                )}
                            </div>
                            {status &&
                            <div className={'alert alert-danger'}>{status}</div>
                            }
                        </Form>
                    )}
                />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    loggedUser: state.user.authentication.authentication.loggedUser,
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);