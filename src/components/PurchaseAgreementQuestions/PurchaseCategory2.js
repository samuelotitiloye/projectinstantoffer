import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { checkString } from '../helpers/valueCheckerHelpers';

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';

class PurchaseCategory2 extends Component {
    state = {
        id: this.props.match.params.id,
        answers: {
            L34: checkString(this.props.purchaseAnswers.L34),
            L35: checkString(this.props.purchaseAnswers.L35),
            L37: checkString(this.props.purchaseAnswers.L37),
            L39: checkString(this.props.purchaseAnswers.L39),
            L40: checkString(this.props.purchaseAnswers.L40),
            L42: checkString(this.props.purchaseAnswers.L42),
        }
    }


    hanldleChangeForPurchasePrice = (propertyName) => (event) => {
        this.setState({
            ...this.state, 
            answers: {
              ...this.state.answers, [propertyName]: event.target.value,
            }
          })
        }


    handleClick = () => {
            this.props.history.push(`/PurchaseCategory1/${this.state.id}`)
        }


    handleClickNext = () => {
        this.props.dispatch({ type: 'SAVE_ANSWERS_FOR_PURCHASE', payload: this.state })
        this.props.history.push(`/PurchaseCategory3/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Purchase Price</h2>
                            </center>
                            <h4>Seller has agreed to sell the Property to Buyer for the sum of</h4>
                            <TextField
                                id="sum"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L34}
                                onChange={this.hanldleChangeForPurchasePrice('L34')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="dollars"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L35}
                                onChange={this.hanldleChangeForPurchasePrice('L35')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Buyer agrees to pay in the following manner:</h4>
                            <h4>Sale price in CASH</h4>
                            <TextField
                                id="percent"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                                value={this.state.answers.L37}
                                onChange={this.hanldleChangeForPurchasePrice('L37')}
                            />
                            <h4>Sale price in MORTGAGE FINANCING</h4>
                            <TextField
                                id="percent"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                                value={this.state.answers.L39}
                                onChange={this.hanldleChangeForPurchasePrice('L39')}
                            />
                            <h4>Sale price by ASSUMING Seller's current mortgage</h4>
                            <TextField
                                id="percent"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                                value={this.state.answers.L40}
                                onChange={this.hanldleChangeForPurchasePrice('L40')}
                            />
                            <h4>Sale price by CONTRACT FOR DEED</h4>
                            <TextField
                                id="percent"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                                value={this.state.answers.L42}
                                onChange={this.hanldleChangeForPurchasePrice('L42')}
                            />
                        </Grid>
                    </Grid>
                </Container>
                <br />
                <br />
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <div align="left" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClick}
                                >
                                    Back
                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div align="right" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClickNext}
                                >
                                    Next
                </Button>

                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => reduxState 
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory2));
