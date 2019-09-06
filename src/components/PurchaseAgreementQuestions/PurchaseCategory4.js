import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { checkString, checkBoolean, checkCheckbox } from '../helpers/valueCheckerHelpers';

//Material UI
import { Button, RadioGroup, Radio, } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';


class PurchaseCategory4 extends Component {
    state = {
        id: this.props.match.params.id,
        answers: {
            L49: checkBoolean(this.props.purchaseAnswers.L49),
            L53: checkBoolean(this.props.purchaseAnswers.L53),
            L54: checkBoolean(this.props.purchaseAnswers.L54),
            L55: checkString(this.props.purchaseAnswers.L55) || '',
            L57: checkCheckbox(this.props.purchaseAnswers.L57),
            L58: checkCheckbox(this.props.purchaseAnswers.L58),
            L59: checkCheckbox(this.props.purchaseAnswers.L59),
            L60: checkCheckbox(this.props.purchaseAnswers.L60),
            L61: checkCheckbox(this.props.purchaseAnswers.L61),
            L62A: checkCheckbox(this.props.purchaseAnswers.L62A),
            L62B: checkString(this.props.purchaseAnswers.L62A),
            L63: checkString(this.props.purchaseAnswers.L63),
            L64: checkString(this.props.purchaseAnswers.L64),
            L70: checkCheckbox(this.props.purchaseAnswers.L70),
            L73: checkBoolean(this.props.purchaseAnswers.L73),
            L76: checkCheckbox(this.props.purchaseAnswers.L76),
            L77: checkString(this.props.purchaseAnswers.L77),
            L114: checkBoolean(this.props.purchaseAnswers.L114),
            L118: checkString(this.props.purchaseAnswers.L118),
            L127: checkBoolean(this.props.purchaseAnswers.L127),
            L133: checkString(this.props.purchaseAnswers.L133),
            L141: checkString(this.props.purchaseAnswers.L141),
            L145A: checkString(this.props.purchaseAnswers.L145A),
            L145B: checkBoolean(this.props.purchaseAnswers.L145B),
            L146: checkString(this.props.purchaseAnswers.L146),
            L156: checkString(this.props.purchaseAnswers.L156),
        }
    }



    handleChangeForMortgageFinancing = (propertyName) => (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            ...this.state,
            answers: {
                ...this.state.answers, [propertyName]: value,
            }
        })
    }

    handleClick = () => {
        this.props.history.push(`/PurchaseCategory3/${this.state.id}`)
    }

    handleClickNext = () => {
        this.props.dispatch({ type: 'SAVE_ANSWERS_FOR_PURCHASE', payload: this.state })
        this.props.history.push(`/PurchaseCategory5/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Mortgage Financing</h2>
                            </center>
                            <h4>Is this Purchase Agreement subject to the mortgage financing provisions below? If yes, complete the mortgage financing section below. If not, proceed to the Seller's Contributions to Buyer's Cost.</h4>
                            <RadioGroup
                                value={this.state.answers.L49}
                                onChange={this.handleChangeForMortgageFinancing('L49')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Such mortgage financing shall be: <i>(Check one)</i></h4>
                            <RadioGroup
                                value={this.state.answers.L53}
                                onChange={this.handleChangeForMortgageFinancing('L53')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="First Mortage Only" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="First Mortage and Subordinate Financing" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Does financing include a grant, bond program, or other loan assistance program?</h4>
                            <RadioGroup
                                value={this.state.answers.L54}
                                onChange={this.handleChangeForMortgageFinancing('L54')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="No" />
                            </RadioGroup>
                            <Grid item xs={12}>
                                <h4>If yes, please specify:</h4>
                                <TextField
                                    id="morgtage_loan_assistance"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.answers.L55}
                                    onChange={this.handleChangeForMortgageFinancing('L55')}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Buyer shall apply for and secure, at Buyer's expense, a: <i>(Check all that apply)</i></h4>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"
                                            value={this.state.answers.L57}
                                            onChange={this.handleChangeForMortgageFinancing('L57')}
                                        />}
                                    label="Conventional"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"
                                            value={this.state.answers.L58}
                                            onChange={this.handleChangeForMortgageFinancing('L58')}
                                        />}
                                    label="Department of Veteran's Affairs (DVA) Guaranteed"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"
                                            value={this.state.answers.L59}
                                            onChange={this.handleChangeForMortgageFinancing('L59')}
                                        />}
                                    label="Federal Housing Administration (FHA) Insured"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"
                                            value={this.state.answers.L60}
                                            onChange={this.handleChangeForMortgageFinancing('L60')}
                                        />}
                                    label="Privately Insured Conventional"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"
                                            value={this.state.answers.L61}
                                            onChange={this.handleChangeForMortgageFinancing('L61')}
                                        />}
                                    label="United States Department of Agricultural (USDA) Rural Development"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"
                                            value={this.state.answers.L62A}
                                            onChange={this.handleChangeForMortgageFinancing('L62A')}
                                        />}
                                    label="Other:"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="morgtage_loan_other"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.answers.L62B}
                                    onChange={this.handleChangeForMortgageFinancing('L62B')}
                                />
                            </Grid>
                            <h4>mortgage in the amount stated in this Purchase Agreement, amortized over a period of not more than</h4>
                            <Grid item xs={12}>
                                <TextField
                                    id="amortized_period"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.answers.L63}
                                    onChange={this.handleChangeForMortgageFinancing('L63')}
                                />
                            </Grid>
                            <h4>years, with an initial interest rate at no more than</h4>
                            <Grid item xs={12}>
                                <TextField
                                    id="interest_rate"
                                    fullWidth
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                    }}
                                    value={this.state.answers.L64}
                                    onChange={this.handleChangeForMortgageFinancing('L64')}
                                />
                            </Grid>
                            <h4>per annum.</h4>
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <h3>Mortgage Financing Contingency</h3>
                            </center>
                        </Grid>
                        <h4>This Purchase Agreement is contingent upon the following and applies to the first mortgage and any subordinate financing. <i>(Check One)</i></h4>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value={this.state.answers.L70}
                                        onChange={this.handleChangeForMortgageFinancing('L70')}
                                        color="primary"
                                    />}
                                    label="If Buyer cannot secure the financing specified in this Purchase Agreement, and this Purchase Agreement does not close on the closing date specified, this Purchase Agreement is canceled. Buyer and Seller shall immediately sign a Cancellation of Purchase Agreement confirming said cancellation and directing all earnest moeny paid here to be"
                            />
                        </Grid>
                        <RadioGroup
                            value={this.state.answers.L73}
                            onChange={this.handleChangeForMortgageFinancing('L73')}>
                            <FormControlLabel value='true' control={<Radio color="primary" />} label="Buyer" />
                            <FormControlLabel value='false' control={<Radio color="primary" />} label="Seller" />
                        </RadioGroup>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        value={this.state.answers.L76}
                                        onChange={this.handleChangeForMortgageFinancing('L76')}
                                    />}
                                    label="Buyer shall provide Seller, or licensee representing or assisting Seller, with the Written Statement, on or before"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="date"
                                variant="outlined"
                                type="date"
                                value={this.state.answers.L77}
                                onChange={this.handleChangeForMortgageFinancing('L77')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <h3>Locking of Mortgage Interest Rate</h3>
                            </center>
                        </Grid>
                        <h4>The Rate shall be locked with the lenders(s) by Buyer:<i>(Chck one)</i></h4>
                        <Grid item xs={12}>
                        <RadioGroup
                               value={this.state.answers.L114}
                               onChange={this.handleChangeForMortgageFinancing('L114')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="Within five (5) business days of final acceptance date of this purchase agreement" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="At any time prior to closing or as required by lenders(s)" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <h3>Lender Commitment Work Orders</h3>
                            </center>
                        </Grid>
                        <h4>Nothing in this Purchase Agreement shall be construed as a warranty that Seller shall make repairs required by the lender commitment. However, Seller agrees to pay up to the following amount to make repairs as required by the lender commitment.</h4>
                        <Grid item xs={12}>
                            <TextField
                                id="buyers_earnest_money"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L118}
                                onChange={this.handleChangeForMortgageFinancing('L118')}
                            />
                        </Grid>
                        <h4>The following party agrees to pay any reinspection fee required by Buyer's lenders(s).</h4>
                        <Grid item xs={12}>
                        <RadioGroup
                                value={this.state.answers.L27}
                                onChange={this.handleChangeForMortgageFinancing('L127')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="Seller" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="Buyer" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <h3>FHA Escape Clause (FHA Financing only)</h3>
                            </center>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Appraised value of the Property</h4>
                            <TextField
                                id="buyers_earnest_money"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L133}
                                onChange={this.handleChangeForMortgageFinancing('L133')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <h3>Lender Processing Fees (FHA, DVA Financing Only)</h3>
                            </center>
                        </Grid>
                        <h4>Seller agrees to apy Buyer's closing fees and miscellaneous processing fees which cannot be charged to Buyer, not to exceed the follwing amount.</h4>
                        <Grid item xs={12}>
                            <TextField
                                id="buyers_earnest_money"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L141}
                                onChange={this.handleChangeForMortgageFinancing('L141')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <h3>DVA FUNDING FEE (DVA Financing Only)</h3>
                            </center>
                        </Grid>
                        <h4>Pursuant to federal regulations, a one-time Funding Fee must be paid at the closing of this transaction as follows:</h4>
                        <Grid item xs={12}>
                            <h4>Paid by Buyer</h4>
                            <TextField
                                id="buyers_earnest_money"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L145A}
                                onChange={this.handleChangeForMortgageFinancing('L145A')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <RadioGroup
                                value={this.state.answers.L145B}
                                onChange={this.handleChangeForMortgageFinancing('L145B')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="At closing" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="Added to mortgage amount" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Paid by the Seller</h4>
                            <TextField
                                id="buyers_earnest_money"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L146}
                                onChange={this.handleChangeForMortgageFinancing('L146')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <h3>Other Mortgage Financing Items</h3>
                            </center>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="buyers_earnest_money"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L156}
                                onChange={this.handleChangeForMortgageFinancing('L156')}
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
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory4));