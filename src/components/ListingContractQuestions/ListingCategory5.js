import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { checkBoolean, checkString } from '../helpers/valueCheckerHelpers'

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { TextField, InputAdornment, Radio, RadioGroup } from '@material-ui/core';


class ListingCategory5 extends Component {

    state = {
        id: this.props.match.params.id,
        answers: {
            L146: checkBoolean(this.props.listingAnswers.L146),
            L148B: checkString(this.props.listingAnswers.L148B),
            L148C: checkString(this.props.listingAnswers.L148C),
            L150B: checkString(this.props.listingAnswers.L150B),
            L150C: checkString(this.props.listingAnswers.L150C),
            L152B: checkString(this.props.listingAnswers.L152B),
        }
    }

    handleChangeForInputs = (propertyName) => (event) => {
        this.setState({
            ...this.state,
            answers: {
                ...this.state.answers, [propertyName]: event.target.value,
            }
        })
    }

    handleClick = () => {
        this.props.history.push(`/ListingCategory4/${this.state.id}`)
    }

    handleClickNext = () => {
        this.props.dispatch({ type: 'SAVE_ANSWERS', payload: this.state })
        this.props.history.push(`/ListingCategory6/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Compensation Disclosure</h2>
                            </center>
                            <h4>Broker will offer compensation to cooperating brokers?</h4>
                            <RadioGroup
                                value={this.state.answers.L146}
                                onChange={this.handleChangeForInputs('L146')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="No" />
                            </RadioGroup>
                            <h4>If yes, the compensation to cooperating shall be as follows:</h4>
                            <h4>Percent of gross sales price for cooperating brokers representing buyer.</h4>
                            <TextField
                                id="percent"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                                value={this.state.answers.L148B}
                                onChange={this.handleChangeForInputs('L148B')}
                            />
                            <h4>Gross sales price in CASH for cooperating brokers representing buyer. </h4>
                            <TextField
                                id="commission_price"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L148C}
                                onChange={this.handleChangeForInputs('L148C')}
                            />
                            <h4>If yes, the compensation to cooperating shall be as follows:</h4>
                            <h4>Percent of gross sales price for cooperating brokers assisting buyer.</h4>
                            <TextField
                                id="percent"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                                value={this.state.answers.L150B}
                                onChange={this.handleChangeForInputs('L150B')}
                            />
                            <h4>Gross sales price in CASH for cooperating brokers assisting buyer. </h4>
                            <TextField
                                id="commission_price"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L150C}
                                onChange={this.handleChangeForInputs('L150C')}
                            />
                            <h4>Other:</h4>
                            <TextField
                                id="additional_info"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L152B}
                                onChange={this.handleChangeForInputs('L152B')}
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
export default connect(mapReduxStateToProps)(withRouter(ListingCategory5));