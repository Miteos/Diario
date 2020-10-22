import styles from '../styles/index.module.scss'
import React from 'react'
import Button from '@material-ui/core/Button'

const Index = () => {
    return (
        <div className={styles.main_background}>
            <h1>Diario</h1>
            <span>Handy collection of tools to help you through life</span>
            <Button variant="contained" color="primary">
                Get started
            </Button>
        </div>
    )
}
export default Index
