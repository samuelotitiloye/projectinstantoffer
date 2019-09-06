import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { checkCheckbox } from '../helpers/valueCheckerHelpers';

//Material UI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class PurchaseCategory7 extends Component {

    state = {
        id: this.props.match.params.id,
        answers: {
            L198: checkCheckbox(this.props.purchaseAnswers.L198),
            L201: checkCheckbox(this.props.purchaseAnswers.L201),
            L210: checkCheckbox(this.props.purchaseAnswers.L210),
        }
    }
    handleChangeForBuyerProperty = (propertyName) => (event) => {
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
        this.props.history.push(`/PurchaseCategory6/${this.state.id}`)
    }

    handleClickNext = () => {
        this.props.dispatch({ type: 'SAVE_ANSWERS_FOR_PURCHASE', payload: this.state })
        this.props.history.push(`/PurchaseCategory8/${this.state.id}`)
    }


    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Seller's Contributions to Buyer's Costs</h2>
                            </center>
                            <h4>Please check one.</h4>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.answers.L198}
                                            onChange={this.handleChangeForBuyerProperty('L198')}
                                            color="primary"
                                        />}
                                    label="This Purchase Agreement is subject to an Addendum to Purchase Agreement: Sale of Buyer's Property Contingency for the sale of Buyer's property. (If checked, see attached Addendum."
                                />
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                        checked={this.state.answers.L201}
                                        onChange={this.handleChangeForBuyerProperty('L201')}
                                            color="primary"
                                        />}
                                    label="This Purchase Agreement is contingent upon the succesful closing on the Buyer's property."
                                />
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                        checked={this.state.answers.L210}
                                        onChange={this.handleChangeForBuyerProperty('L210')}
                                            color="primary"
                                        />}
                                    label="Buyer represents that Buyer has the financial ability to perform on this Purchase Agreement without the sale and closing on any other property."
                                />
                            </Grid>
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
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory7));