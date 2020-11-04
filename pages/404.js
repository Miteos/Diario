import Layout from '../components/layout'
import Button from '@material-ui/core/Button'
import React from 'react'

export default function Custom404() {
    return (
        <Layout>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Button href={'/login'} variant="outlined" color="primary">
                Go back
            </Button>
        </Layout>
    )
}
