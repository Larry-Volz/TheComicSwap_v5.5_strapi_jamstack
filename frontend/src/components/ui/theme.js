import { createMuiTheme } from '@material-ui/core/styles'

const myBlack = "#343a40"
const blue = "#007bff"
const indigo = "#6610f2"
const purple = "#6f42c1"
const pink = "#e83e8c"
const red = "#dc3545"
const orange = "#fd7e14"
const yellow = "#ffc107"
const green = "#28a745"
const teal = "#20c997"
const cyan = "#17a2b8"
const white = "fff"
const gray = "#6c757d"
const grayDark = "#343a40"

const theme = CreateMuiTheme({
    palette: {
        primary: {
            main: "#007bff"
        },
        secondary: {
            main: "#6c757d"
        },
        success: {
            main: "#28a745"
        },
        info: {
            main: "#17a2b8"
        },
        warning: {
            main: "#ffc107"
        },
        danger: {
            main: "#dc3545"
        },
        light: {
            main: "#f8f9fa"
        },
        dark: {
            main: "#343a40"
        },
        common: {
            blue,
            indigo,
            purple,
            pink,
            red,
            orange,
            yellow,
            green,
            teal,
            cyan,
            white,
            gray,
            grayDark,

        }
    },
    typography: {
        h1: {
            color: myBlack,
            fontSize: "4rem",
            fontFamily:"Trebuchet MS,Arial,sans-serif",
            fontWeight: 700,
            letterSpacing: ".02em",
            lineHeight: "4.8125rem"
        },
        h2: {
            color: myBlack,
            fontSize: "3rem",
            fontFamily:"Trebuchet MS,Arial,sans-serif",
            fontWeight: 700,
            letterSpacing: ".02em",
            lineHeight: "3.625rem"
        },
        h3: {
            color: myBlack,
            fontSize: "1.375rem",
            fontFamily:"Trebuchet MS,Arial,sans-serif",
            fontWeight: 700,
            letterSpacing: ".04em",
            lineHeight: "1.625rem"
        },
        body1: {
            color: myBlack,
            fontSize: "1rem",
            fontFamily: "Roboto,Helvetica Neue,Arial,sans-serif"
        },
        body2: {

        },

    },
    overrides: {

    }
})

export default theme