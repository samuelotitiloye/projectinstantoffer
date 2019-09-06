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
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';

class PurchaseCategory5 extends Component {

    state = {
        id: this.props.match.params.id,
        answers: {
            L159: checkBoolean(this.props.purchaseAnswers.L59),
            L160A: checkBoolean(this.props.purchaseAnswers.L160A),
            L160B: checkString(this.props.purchaseAnswers.L160B),
            L161A: checkBoolean(this.props.purchaseAnswers.L61A),
            L161B: checkString(this.props.purchaseAnswers.L61B),
        }
    }

    handleChangeForSellerContribution = (propertyName) => (event) => {
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
        this.props.history.push(`/PurchaseCategory4/${this.state.id}`)
    }

    handleClickNext = () => {
        this.props.dispatch({ type: 'SAVE_ANSWERS_FOR_PURCHASE', payload: this.state })
        this.props.history.push(`/PurchaseCategory6/${this.state.id}`)
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
                            <h4>Will Seller be contributing to Buyer's costs?</h4>
                            <RadioGroup
                                value={this.state.answers.L159}
                                onChange={this.handleChangeForSellerContribution('L159')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="No" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <h4>If yes, Seller agrees to pay at closing, up to the amount of the sale price: <i>(Check one)</i></h4>
                    <Grid container spacing={1}>
                        <Grid item xs={1}>
                            <Checkbox
                                id="checkedB"
                                color="primary"
                                checked={this.state.answers.L160A}
                                onChange={this.handleChangeForSellerContribution('L160A')}
                            />
                        </Grid>
                        <Grid item xs={11}>
                            <TextField
                                id="sellers_contribution"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L160B}
                                onChange={this.handleChangeForSellerContribution('L160B')}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Checkbox
                                id="checkedB"
                                color="primary"
                                checked={this.state.answers.L161A}
                                onChange={this.handleChangeForSellerContribution('L161A')}
                            />
                        </Grid>
                        <Grid item xs={11}>
                            <TextField
                                id="sellers_contribution"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="start">%</InputAdornment>,
                                }}
                                value={this.state.answers.L161B}
                                onChange={this.handleChangeForSellerContribution('L161B')}
                            />
                            <br />
                            <br />
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
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory5));