import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import axios from 'axios';

//Material UI
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        secondary: { main: '#3CAEA3' },
    },
});

const styles = {
    button: {
        color: 'white',
    },
};

class PurchaseAgreement extends Component {
    handleClickForPurchaseAgreementDocuments = () => {
        axios.post('api/purchase/save')
        .then(response => {
            console.log(response.data[0].id)
            this.props.history.push(`/purchase/${response.data[0].id}`)
        })
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <center>
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        size="large"
                        style={styles.button}
                        onClick={this.handleClickForPurchaseAgreementDocuments}
                        id="PurchaseAgreementDocButton"
                    >
                        Purchase Agreement
                    </Button>
                </center>
            </ThemeProvider>

        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseAgreement));


