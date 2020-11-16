import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Box, TextField } from '@material-ui/core'
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  welcome: {
    color: 'white',
    marginTop: '2em',
    letterSpacing: '0.05em',
    fontWeight: 'normal',
  },
  container: {
    height: '100vh !important',
  },
  formtext: {
    fontSize: '2rem',
  },
}))

export default function Login() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.container}>
      <ThemeProvider theme={theme}>
        <Typography className={classes.welcome} variant="h2">
          Welcome to OptoX!
        </Typography>
      </ThemeProvider>
      <form
        noValidate
        autoComplete="off"
        style={{
          backgroundColor: 'rgb(37 37 37 / 83%)',
          minWidth: '400px',
          minHeight: '400px',
          padding: '30px',
          float: 'right',
          color: 'white',
          marginTop: '9em',
        }}
      >
        <Typography className={classes.formtext}>Please sign in:</Typography>
        <br />
        <TextField id="standard-basic" label="Email" variant="outlined" />
        <br />
        <br />
        <TextField id="standard-basic" label="Password" variant="outlined" />
      </form>
    </Container>
  )
}
