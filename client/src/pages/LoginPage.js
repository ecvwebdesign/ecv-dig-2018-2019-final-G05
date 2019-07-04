import React from 'react';
import Layout from "../components/block/Layout";
import Login from "../components/user/Login";
import Register from "../components/user/Register";

export const LoginPage = (props) => (
    <>
    <Layout>
        <Login {...props}/>
        <Register {...props}/>
    </Layout>
    </>
)
