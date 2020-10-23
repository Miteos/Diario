import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#eeeeee',
        },
        secondary: {
            main: '#0F2027',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
            gradient: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
        },
    },
})

export default theme
