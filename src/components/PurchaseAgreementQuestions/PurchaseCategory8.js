import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { checkString, checkBoolean } from '../helpers/valueCheckerHelpers';


//Material UI
import { Button, RadioGroup, Radio, } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { TextField } from '@material-ui/core';

class PurchaseCategory8 extends Component {
    state = {
        id: this.props.match.params.id,
        answers: {
            L215A: checkBoolean(this.props.purchaseAnswers.L215A),
            L215B: checkBoolean(this.props.purchaseAnswers.L215B),
            L215C: checkBoolean(this.props.purchaseAnswers.L215C),
            L215D: checkBoolean(this.props.purchaseAnswers.L215D),
            L215E: checkString(this.props.purchaseAnswers.L215E),
            L217A: checkBoolean(this.props.purchaseAnswers.L217A),
            L217B: checkBoolean(this.props.purchaseAnswers.L217B),
            L217C: checkBoolean(this.props.purchaseAnswers.L217C),
            L217D: checkBoolean(this.props.purchaseAnswers.L217D),
            L217E: checkString(this.props.purchaseAnswers.L217E),
            L219: checkBoolean(this.props.purchaseAnswers.L219),
            L226: checkBoolean(this.props.purchaseAnswers.L226),
            L228: checkBoolean(this.props.purchaseAnswers.L228),
            L231: checkBoolean(this.props.purchaseAnswers.L231),
            L233: checkBoolean(this.props.purchaseAnswers.L233),
        }
    }


    handleChangeForRealEstateTaxes = (propertyName) => (event) => {
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
        this.props.history.push(`/PurchaseCategory7/${this.state.id}`)
    }

    handleClickNext = () => {
        this.props.dispatch({ type: 'SAVE_ANSWERS_FOR_PURCHASE', payload: this.state })
        this.props.history.push(`/PurchaseCategory9/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Real Estate Taxes</h2>
                            </center>
                            <Grid item xs={12}>
                                <h4>Seller shall pay on the date of closing all real estate taxes due and payable in all prior years including all penalties and interest.</h4>
                                <h4>Buyer shall pay: <i>(Check one)</i></h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.answers.L215A}
                                            onChange={this.handleChangeForRealEstateTaxes('L215A')}
                                            color="primary"
                                        />}
                                    label="Prorated from day of closing"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.answers.L215B}
                                            onChange={this.handleChangeForRealEstateTaxes('L215B')}
                                            color="primary"
                                        />}
                                    label="All"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.answers.L215C}
                                            onChange={this.handleChangeForRealEstateTaxes('L215C')}
                                            color="primary"
                                        />}
                                    label="None"
                                />
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={1}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.answers.L215D}
                                                onChange={this.handleChangeForRealEstateTaxes('L215D')}
                                                color="primary"
                                            />}
                                    />
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField
                                        value={this.state.answers.L215E}
                                        onChange={this.handleChangeForRealEstateTaxes('L215E')}
                                        id="buyer_real_estate_tax"
                                    />/12ths of real estate taxes due and payable in the year of closing.
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Seller shall pay: <i>(Check one)</i></h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.answers.L217A}
                                        onChange={this.handleChangeForRealEstateTaxes('L217A')}
                                        color="primary"
                                    />}
                                label="Prorated from day of closing"
                            />
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.answers.L217B}
                                            onChange={this.handleChangeForRealEstateTaxes('L217B')}
                                            color="primary"
                                        />}
                                    label="All"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.answers.L217C}
                                            onChange={this.handleChangeForRealEstateTaxes('L217C')}
                                            color="primary"
                                        />}
                                    label="None"
                                />
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={1}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.state.answers.L217D}
                                                onChange={this.handleChangeForRealEstateTaxes('L217D')}
                                                color="primary"
                                            />}
                                    />
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField
                                        value={this.state.answers.L217E}
                                        onChange={this.handleChangeForRealEstateTaxes('L217E')}
                                        id="buyer_real_estate_tax"
                                    />/12ths of real estate taxes due and payable in the year of closing.
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <h4>If the property tax status is a part-or non-homested classification in the year of closing, will the Seller pay the difference between the homestead and non-homestead?</h4>
                        <RadioGroup
                            value={this.state.answers.L219}
                            onChange={this.handleChangeForRealEstateTaxes('L219')}>
                            <FormControlLabel value='true' control={<Radio color="primary" />} label="Yes" />
                            <FormControlLabel value='false' control={<Radio color="primary" />} label="No" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <center>
                            <h3>Deferred Taxes/Special Assessments</h3>
                        </center>
                        <h4>Who will pay on date of closing any deferred real estate taxes (e.g., Green Acres) or special assessments, payment of which is required as a result o the closing of this sale?</h4>
                        <Grid item xs={12}>
                            <RadioGroup
                                value={this.state.answers.L226}
                                onChange={this.handleChangeForRealEstateTaxes('L226')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="Seller Shall Buy" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="Buyer Shall Buy" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <h4>Who will pay all installments of special assessments certified for payment, with the real estate taxes due and payable in the year of closing?</h4>
                        <Grid item xs={12}>
                            <RadioGroup
                                value={this.state.answers.L228}
                                onChange={this.handleChangeForRealEstateTaxes('L228')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="Buyer and Seller shall prorate as of the date of closing" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="Seller shall pay on date of closing" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <h4>Who will pay on date of closing all other special assessments levied as of the date of this Purchase Agreement?</h4>
                        <Grid item xs={12}>
                            <RadioGroup
                                value={this.state.answers.L231}
                                onChange={this.handleChangeForRealEstateTaxes('L231')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="Buyer shall assume" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="Seller shall pay" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Who will provide for payment of special assessments pending as of the date of this Purchase Agreement for improvements that have been ordered by any assessing authorities?</h4>
                            <Grid item xs={12}>
                                <RadioGroup
                                    value={this.state.answers.L233}
                                    onChange={this.handleChangeForRealEstateTaxes('L233')}>
                                    <FormControlLabel value='true' control={<Radio color="primary" />} label="Buyer shall assume" />
                                    <FormControlLabel value='false' control={<Radio color="primary" />} label="Seller shall provide for payment" />
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>As of the date of this Purchase Agreement, has the Seller received a notice regarding any new improvement project from any assessing authorities, the costs of which project may be assessed aginast the Property?</h4>
                            <Grid item xs={12}>
                                <RadioGroup
                                    value={this.state.answers.L239}
                                    onChange={this.handleChangeForRealEstateTaxes('L239')}>
                                    <FormControlLabel value='true' control={<Radio color="primary" />} label="Yes" />
                                    <FormControlLabel value='false' control={<Radio color="primary" />} label="No" />
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <br />
                    </Grid>
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
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory8));
