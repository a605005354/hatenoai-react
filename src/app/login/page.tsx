"use client"
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import { Button, InputGroup, Modal } from 'react-bootstrap';
import { signup, loginUser } from '@/requests/login';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/utils/authContext'
import { saveAuthDetails } from '@/utils/authService';

function Login() {
    const [isSignup, setIsSignup] = useState(true);
    const router = useRouter()
    const { loginAuth, isAuthenticated} = useAuth();
    const [redirectTo, setRedirectTo] = useState(false)

    interface FormValues{
        username?:string;
        email:string;
        password:string;
    }

    const validationSchema = Yup.object().shape({
        username: isSignup ? Yup.string().required('Username is required') : Yup.string(),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Must be at least 6 characters').required('Password is required'),
    });

    const handleSubmit = async (values:FormValues, { setSubmitting }:{setSubmitting: (isSubmitting: boolean) => void}) => {
        const { username, email, password } = values;
        const data = isSignup ? { username, email, password } : { email, password };

        try {
            if (isSignup) {
                signup(data).then(response => {

                    redirecting(response)
                }).catch(error => {
                    console.log(error)
                    alert(error)
                })
            } else {
                loginUser(data).then(response => {
                    redirecting(response)
                }).catch(error => {
                    console.log(error)
                    alert(error)
                })
            }
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'An error occurred';
            console.error('Unexpected error:', error);
            alert(message || 'An error occurred');
        }
        setSubmitting(false);
    };

    useEffect( ()=> {
        if (isAuthenticated) {
            setRedirectTo(true)
            setTimeout(() => {
                router.push('/myvillage'); // Redirect after 3 seconds
            }, 3000); // 3000 milliseconds = 3 seconds
        }
    })

    const redirecting = (response: { data: any; }) => {
        const userInfo = response.data
        loginAuth(userInfo.token)
        saveAuthDetails(userInfo)
        setRedirectTo(true)
        setTimeout(() => {
            router.push('/myvillage'); // Redirect after 3 seconds
        }, 3000); // 3000 milliseconds = 3 seconds
    }

    if (redirectTo) {
        return (
            <div >
                <div className={styles.fadeOut}>{'You\'re successfully logged in. Redirecting to MyVillage...'}</div>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <div className={styles.switcher}>
                <button onClick={() => setIsSignup(true)} className={isSignup ? styles.active : ''}>Sign Up</button>
                <button onClick={() => setIsSignup(false)} className={!isSignup ? styles.active : ''}>Login</button>
            </div>
            <Formik
                initialValues={{ username: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className={styles.form}>
                        {isSignup && (
                            <div className="mb-3">
                                <Field name="username" type="text" className={styles.formInput} placeholder="Username" />
                                <ErrorMessage name="username" component="div" className={styles.errorMessage} />
                            </div>
                        )}
                        <div className="mb-3">
                            <Field name="email" type="email" className={styles.formInput} placeholder="Email" />
                            <ErrorMessage name="email" component="div" className={styles.errorMessage} />
                        </div>
                        <InputGroup className="mb-3">
                            <Field name="password" type="password" className={styles.formInput} placeholder="Password" />
                            <ErrorMessage name="password" component="div" className={styles.errorMessage} />
                        </InputGroup>
                        <Button variant="primary" type="submit" disabled={isSubmitting} className={styles.formButton}>
                            {isSubmitting ? 'Please wait...' : isSignup ? 'Sign Up' : 'Login'}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Login;
