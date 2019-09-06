import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import axios from 'axios';

//Material UI
import { Button, TextField, Container, Grid }  from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#173F5F' },
  },
});

class ListingContractButton extends Component {
  state = {
    docType: this.props.match.params.docType,
    clientName: "",
    BUYER_1: ""
  }

  handleChange = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value
    })
  }

  handleClickNext = (docType) => {
    axios.post(`api/${docType}/`, { BUYER_1: this.state.BUYER_1 })
      .then(response => {
        this.props.history.push(`/${docType}/${response.data.id}`)
      })
  }

  handleClickCancel = () => {
    this.props.history.push('/home')
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <center>
                <h2>{ this.state.docType === 'listing' ?
                  'Listing Contract'
                    :
                  'Purchase Agreement'
                }</h2>
            </center>
            <h4>Please provide the client's name:</h4>
            <TextField
              id="client"
              fullWidth
              variant="outlined"
              value={this.state.BUYER_1}
              onChange={this.handleChange('BUYER_1')}
            />
          </Grid>
        </Grid>
      </Container>
      <br />
      <Container component="main">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div align="left" className="Button">
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleClickCancel}
              >
                Cancel
              </Button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div align="right" className="Button">
              <Button
                variant="contained"
                color="primary"
                onClick={() => this.handleClickNext(this.state.docType)}>
                Next
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
    )
  }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingContractButton));


