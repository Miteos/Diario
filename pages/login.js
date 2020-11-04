import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Layout from '../components/layout'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        color: theme.palette.primary.main,
    },
    field: {
        background: theme.palette.primary.main,
        marginTop: theme.spacing(5),
        color: 'white',
    },
    checkbox: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        color: 'white',
    },
    label: {
        color: theme.palette.primary.main,
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
    },
    input: {
        background: 'white',
    },
}))

export default function Login() {
    const classes = useStyles()

    return (
        <Layout>
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}></Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            className={classes.field}
                            variant="filled"
                            margin="normal"
                            color="secondary"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            InputProps={{
                                className: classes.input,
                            }}
                        />
                        <TextField
                            className={classes.field}
                            variant="filled"
                            margin="normal"
                            color="secondary"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            InputProps={{
                                className: classes.input,
                            }}
                        />
                        <FormControlLabel
                            className={classes.checkbox}
                            control={
                                <Checkbox
                                    value="remember"
                                    className={classes.label}
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            href={'/dashboard'}
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </Layout>
    )
}
