import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { checkString } from '../helpers/valueCheckerHelpers'

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { TextField, InputAdornment } from '@material-ui/core';


class ListingCategory4 extends Component {

    state = {
        id: this.props.match.params.id,
        answers: {
            L115: checkString(this.props.listingAnswers.L115),
            L118: checkString(this.props.listingAnswers.L118),
            L119: checkString(this.props.listingAnswers.L119),
            L121: checkString(this.props.listingAnswers.L121),
            L131: checkString(this.props.listingAnswers.L131),
        }
    }


    handleChangeForInputs = (propertyName) => (event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: event.target.value
            }
        })
    }

    handleClick = () => {
        this.props.history.push(`/ListingCategory3/${this.state.id}`)
    }

    handleClickNext = () => {
        this.props.dispatch({ type: 'SAVE_ANSWERS', payload: this.state })
        this.props.history.push(`/ListingCategory5/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Broker's Compensation</h2>
                            </center>
                            <h4>Broker's retainer fee</h4>
                            <TextField
                                id="retainer_fee"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L115}
                                onChange={this.handleChangeForInputs('L115')}
                            />
                            <h4>Percent of selling price</h4>
                            <TextField
                                id="percent"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                                value={this.state.answers.L118}
                                onChange={this.handleChangeForInputs('L118')}
                            />
                            <h4>Broker's commission price in CASH </h4>
                            <TextField
                                id="commission_price"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L119}
                                onChange={this.handleChangeForInputs('L119')}
                            />
                            <h4>Other</h4>
                            <TextField
                                id="additional_info"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L121}
                                onChange={this.handleChangeForInputs('L121')}
                            />
                            <h4>If within the indicated days below (not to exceed six (6) months) after the expiration of this Contract, Seller sells or agrees to sell the Property to anyone who:</h4>
                            <h4>1. during this Contract made inquiry of Seller about the Property and Seller did not tell Broker about the inquiry; or</h4>
                            <h4>2. during this Contract made an affirmative showing of interest in the Property by responding to an advertisement, or by contacting Broker or the licensee involved</h4>
                            <h4>then Seller shall still pay Broker the compensation noted here, even if Seller sells the Property without Broker's assistance.</h4>
                            <TextField
                                label="Days"
                                id="days"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L131}
                                onChange={this.handleChangeForInputs('L131')}
                            />
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                </Container>
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
export default connect(mapReduxStateToProps)(withRouter(ListingCategory4));