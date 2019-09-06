import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginPage.css';

//Material UI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const styles = {
  title: {
    textAlign: 'center',
    color: '#FFF',
  },
  button: {
    marginTop: '15px',
    color: 'white',
  },
  link: {
    margin: '15px',
  },
  Grid: {
    margin: '175px 0px 0px 0px',
  },
};

const theme = createMuiTheme({
  palette: {
    primary: { main: '#000080' },
  },
});

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="body">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
          </Container>
          <Container component="main" maxWidth="xs">
            <div align="center">
              <Grid
                item xs={11}
                style={styles.Grid}
              >
                {this.props.errors.loginMessage && (
                  <h2
                    className="alert"
                    role="alert"
                  >
                    {this.props.errors.loginMessage}
                  </h2>
                )}
                <form onSubmit={this.login}>
                  <center>
                    <h1 className="header">Instant Offer</h1>
                  </center>
                  <div>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      autoComplete="username"
                      autoFocus
                      value={this.state.username}
                      onChange={this.handleInputChangeFor('username')}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)"
                      }}
                      InputProps={{
                        style: {
                          color: "black"
                        }
                      }}
                    />
                  </div>
                  <div>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      type="password"
                      id="password"
                      label="Password"
                      name="password"
                      autoComplete="password"
                      // autoFocus
                      value={this.state.password}
                      onChange={this.handleInputChangeFor('password')}
                      color="primary"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)"
                      }}
                      InputProps={{
                        style: {
                          color: "black"
                        }
                      }}
                    />
                  </div>
                  <div>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      style={styles.button}
                      value="Log In"
                      color="primary"
                    >
                      Sign In
                </Button>
                  </div>
                  <center style={styles.link}>
                <Link
                  component="button"
                  variant="body2"
                  fullWidth
                  variant="outlined"
                  onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
                >
                  {"Don't have an account? Sign Up!"}
                </Link>
              </center>
                </form>
              </Grid>
            </div>
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
