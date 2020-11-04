import React from 'react'
import Button from '@material-ui/core/Button'
import Layout from '../components/layout'
import DashCard from '../components/dashboard/DashCard'
import styles from '../styles/modules/diary.module.scss'

const Dashboard = () => {
    return (
        <Layout>
            <div className={styles.dashboard}>
                {links.map((l) => (
                    <DashCard
                        key={l.title}
                        className={styles.dash_button}
                        image={l.img}
                        to={l.to}
                        title={l.title}
                        description={l.description}
                    ></DashCard>
                ))}
            </div>
        </Layout>
    )
}
const links = [
    {
        title: 'Diary',
        to: '/diary',
        img: '/static/dashboard/dash1.jpg',
        description:
            'A diary is a place where you record events, ' +
            'experiences and other personal things that interest you. ' +
            'You can write about whatever you like, free of outside judgment or criticism. ',
    },
    {
        title: 'ToDo',
        to: '/todo',
        img: '/static/dashboard/dash2.jpg',
        description:
            'Write down your daily tasks, plan your day and make your life easier.',
    },
    {
        title: 'Food Diary',
        to: '/food-diary',
        img: '/static/dashboard/dash3.jpg',
        description: 'Plan and keep track of your daily calorie intake.',
    },
]
export default Dashboard
