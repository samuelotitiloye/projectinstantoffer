import React, { Component } from "react";
import { connect } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

//Material UI
import { Container, Grid, Button } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#173F5F' },
    secondary: { main: '#3CAEA3' },
  },
});

const styles = {
  Grid: {
    margin: '150px 0px 0px 0px',
  },
  button: {
    color: 'white',
  },
};

class  Home extends Component {
  handleClick = (docType) => {
    this.props.history.push(`/new/${docType}/`)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid
          item xs={12}
          style={styles.Grid}
        >
          <center>
            <h1>Welcome, {this.props.user.username}!</h1>
            <h4>Please select one of the forms below to begin.</h4>
          </center>
          <br />
          <div align="center">
            <Container component="main" maxWidth="xs">
              <Grid item xs={9}>
                <center>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => this.handleClick("listing")}
                    id="listingDocButton"
                  >
                    Listing Contract
                  </Button>
                </center>
                <br />
              </Grid>
              <Grid item xs={9}>
                <center>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    size="large"
                    style={styles.button}
                    onClick={() => this.handleClick("purchase")}
                    id="purchaseDocButton"
                  >
                    Purchase Agreement
                  </Button>
                </center>
              </Grid>
            </Container>
          </div>
        </Grid>
      </ThemeProvider>
    )
  }
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Home);
