import styles from '../styles/modules/index.module.scss'
import React from 'react'
import Button from '@material-ui/core/Button'
import Layout from '../components/layout'

const Index = () => {
    return (
        <Layout>
            <div className={styles.welcome}>
                <h1>Diario</h1>
                <span>Handy collection of tools to help you through life</span>
                <Button
                    href={'/login'}
                    className={styles.placement}
                    variant="outlined"
                    color="primary"
                >
                    Get started
                </Button>
            </div>
        </Layout>
    )
}
export default Index
