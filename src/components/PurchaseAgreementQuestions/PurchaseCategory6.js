import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { checkString, checkBoolean } from '../helpers/valueCheckerHelpers';

//Material UI       
import { Button, RadioGroup, Radio, } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { FormControlLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';

class PurchaseCategory6 extends Component {

    state = {
        id: this.props.match.params.id,
        answers: {
            L170: checkBoolean(this.props.purchaseAnswers.L170),
            L172: checkBoolean(this.props.purchaseAnswers.L172),
            L178: checkBoolean(this.props.purchaseAnswers.L178),
            L184: checkString(this.props.purchaseAnswers.L184),
            L192: checkString(this.props.purchaseAnswers.L192),
        }
    }


    handleChangeForInspections = (propertyName) => (event) => {
        this.setState({
            ...this.state,
            answers: {
                ...this.state.answers, [propertyName]: event.target.value,
            }
        })
    }


    handleClick = () => {
        this.props.history.push(`/PurchaseCategory5/${this.state.id}`)
    }

    handleClickNext = () => {
        this.props.dispatch({ type: 'SAVE_ANSWERS_FOR_PURCHASE', payload: this.state })
        this.props.history.push(`/PurchaseCategory7/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Inspections</h2>
                            </center>
                            <h4>Does the buyer agree to have a Property inspection performed at Buyer's expense?</h4>
                            <RadioGroup
                                value={this.state.answers.L170}
                                onChange={this.handleChangeForInspections('L170')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Is this Purchase Agreement contingent upon any inspections(s) of the Property obtained by Buyer to determine its condition, including any non-intrusive testing or any intrusive testing as allowed pursuant to this Purchase Agreement?</h4>
                            <RadioGroup
                                value={this.state.answers.L172}
                                onChange={this.handleChangeForInspections('L172')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Does the Seller agree to allow Buyer to perform intrusive testing or inspection(s).</h4>
                            <RadioGroup
                                value={this.state.answers.L178}
                                onChange={this.handleChangeForInspections('L178')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>All inspection(s), test(s), and resulting negotiations, if any, shall be done within how many Calendar Days of Final Acceptance Date of this Purchase Agreement ("Inspection Period")?</h4>
                            <TextField
                                id="date"
                                variant="outlined"
                                type="date"
                                value={this.state.answers.L184}
                                onChange={this.handleChangeForInspections('L184')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Other Inspection Items:</h4>
                            <TextField
                                id="other_inspection_items"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L192}
                                onChange={this.handleChangeForInspections('L192')}
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
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory6));