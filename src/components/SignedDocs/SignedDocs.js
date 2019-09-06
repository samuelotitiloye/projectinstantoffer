import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ListingContractSignedIndividualDocs from '../ListingContractSignedIndividualDocs/ListingContractSignedIndividualDocs';
import PurchaseAgreementSignedIndividualDocs from '../PurchaseAgreementSignedIndividualDocs/PurchaseAgreementSignedIndividualDocs';

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#173F5F' },
    secondary: { main: '#3CAEA3' },
  },
});

const styles = {
  button: {
    color: 'white',
  },
};

class SignedDocuments extends Component {
  state = {
    listing: true,
    title: 'Signed Listing Contracts'
  }

  handleClickListing = () => {
    this.setState({
      listing: true,
      title: 'Signed Listing Contracts'
    });
  }

  handleClickPurchase = () => {
    this.setState({
      listing: false,
      title: 'Signed Purchase Agreements'
    });
  }

  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="lg">
            <br />
            <center>
              <h2>{this.state.title}</h2>
            </center>
            <br />
            <center>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.handleClickListing}
                  >
                    Listing
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    style={styles.button}
                    onClick={this.handleClickPurchase}
                  >
                    Purchase
                  </Button>
                </Grid>
              </Grid>
            </center>
            <br />
            <br />
            {this.state.listing === true ?
                <ListingContractSignedIndividualDocs />
                :
                <PurchaseAgreementSignedIndividualDocs />
            }
          </Container>
        </ThemeProvider>
      </div>
    )
  }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(SignedDocuments));
