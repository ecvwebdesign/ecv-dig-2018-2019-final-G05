import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { SubmissionError } from 'redux-form';
import { fetch } from '../../utils/dataAccess';
import { authentication } from '../../services/authentication';
import {
    LinearProgress,
} from '@material-ui/core';
import SubmitButton from "../../utils/submit-button";

export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    render() {
        return(
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required('Le prénom est requis'),
                    lastName: Yup.string()
                        .required('Le nom est requis'),
                    email: Yup.string()
                        .email('L\'addresse email est invalide')
                        .required('L\'email est requis'),
                    password: Yup.string()
                        .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
                        .required('Le mot de passe est requis'),
                })}
                onSubmit={(fields, { setStatus, setSubmitting }) => {
                    setStatus();
                    fetch('http://localhost:8080/users', { method: 'POST', body: JSON.stringify(fields, ['firstName', 'lastName', 'email', 'password'], 4)  })
                        .then((response) => {
                            authentication.login(fields.email, fields.password)
                                .then(
                                    user => {
                                        this.props.history.push('/')
                                    },
                                    error => {
                                        setSubmitting(false);
                                        setStatus(error);
                                    }
                                );
                        })
                        .catch(e => {
                            if (e instanceof SubmissionError) {
                                throw e;
                            }
                        });
                }}
                render={({ errors, status, touched, isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">PRÉNOM</label>
                            <Field label="Prénom" margin="normal" fullWidth name="firstName" type="text" />
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">NOM</label>
                            <Field label="Nom" margin="normal" fullWidth name="lastName" type="text" />
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">ADRESSE MAIL</label>
                            <Field label="Email" margin="normal" fullWidth name="email" type="text" />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">MOT DE PASSE</label>
                            <Field label="Mot de passe" margin="normal" fullWidth name="password" type="password" />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            {isSubmitting ? (
                                <LinearProgress/>
                            ) : (
                                <>
                                <div className="text-center mt-2">
                                    <button className="btn-secondary btn-280">S'inscrire</button>
                                </div>
                                {/*<button type="reset" className=" btn-secondary form-btn">Réinitialiser</button>*/}
                                </>
                            )}
                        </div>
                    </Form>
                )}
            />
        );
    }
}
