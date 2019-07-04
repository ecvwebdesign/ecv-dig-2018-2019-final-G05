import React from 'react';
import Show from '../components/product/Show';
import Layout from "../components/block/Layout";
import './ProductPage.scss';

export const ProductPage = (props) => (
    <>
        <Layout>
            <Show {...props}/>
        </Layout>
    </>
)
