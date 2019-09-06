import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { checkString, checkBoolean} from '../helpers/valueCheckerHelpers';

//Material UI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';

class PurchaseCategory1 extends Component {
    
    componentDidMount() {
        const documentId = this.props.match.params.id
        console.log(documentId)
        this.props.dispatch(
            { type: 'PURCHASE_ANSWERS', payload: documentId }
        )
    }

    state = {
        id: this.props.match.params.id,
        answers: {
            DATE: checkString(this.props.purchaseAnswers.DATE),
            BUYER_1: checkString(this.props.purchaseAnswers.BUYER_1),
            L6A: checkString(this.props.purchaseAnswers.L6A),
            L6B: checkString(this.props.purchaseAnswers.L6B),
            L7A: checkBoolean(this.props.purchaseAnswers.L7A),
            L7B: checkString(this.props.purchaseAnswers.L7B),
            L12: checkString(this.props.purchaseAnswers.L12),
            L13A: checkString(this.props.purchaseAnswers.L13A),
            L13B: checkString(this.props.purchaseAnswers.L13B),
            L14: checkString(this.props.purchaseAnswers.L14),
            L29: checkString(this.props.purchaseAnswers.L29),
            L32: checkString(this.props.purchaseAnswers.L32),
        }
    }

    handleChangeForGeneralInformation = (propertyName) => (event) => {
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
        this.props.history.push(`/purchase/${this.state.id}`)
    }

    handleClickNext = () => {
        this.props.dispatch({ type: 'SAVE_ANSWERS_FOR_PURCHASE', payload: this.state })
        this.props.history.push(`/PurchaseCategory2/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>General Information</h2>
                            </center>
                            <h4>Date</h4>
                            <TextField
                                id="date"
                                variant="outlined"
                                type="date"
                                value={this.state.answers.DATE}
                                onChange={this.handleChangeForGeneralInformation('DATE')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Buyer's Name</h4>
                            <TextField
                                id="buyers_name"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.BUYER_1}
                                onChange={this.handleChangeForGeneralInformation('BUYER_1')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Buyer's earnest money in the amount of</h4>
                            <TextField
                                id="buyers_earnest_money"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L6A}
                                onChange={this.handleChangeForGeneralInformation('L6A')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="buyers_earnest_money"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L6B}
                                onChange={this.handleChangeForGeneralInformation('L6B')}
                            />
                            <h4>shall be delivered to listing broker, or if checked, to</h4>
                            <Grid container spacing={2}>
                                <Grid item xs={1}>
                                    <Checkbox
                                        color="primary"
                                        checked={this.state.answers.L7A}
                                        onChange={this.handleChangeForGeneralInformation('L7A')}
                                    />
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField
                                        id="brokers_name"
                                        fullWidth
                                        variant="outlined"
                                        value={this.state.answers.L7B}
                                        onChange={this.handleChangeForGeneralInformation('L7B')}
                                    />
                                </Grid>
                            </Grid>
                            <h4>no later than two (2) Business Days after Final Acceptance Date of this Purchase Agreement.</h4>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Property Address</h4>
                            <TextField
                                id="street_address"
                                label="Street Address"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L12}
                                onChange={this.handleChangeForGeneralInformation('L12')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="City"
                                id="city"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L13A}
                                onChange={this.handleChangeForGeneralInformation('L13A')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="County"
                                id="county"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L13B}
                                onChange={this.handleChangeForGeneralInformation('L13B')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Legal description of property</h4>
                            <TextField
                                id="legal_description"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L14}
                                onChange={this.handleChangeForGeneralInformation('L14')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Built-Ins and the following personal property shall be transferred with no additional monetary value, and free and clear of all liens and encumbrances:</h4>
                            <TextField
                                id="built_ins"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L29}
                                onChange={this.handleChangeForGeneralInformation('L29')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>The following item(s) are excluded from the purchase:</h4>
                            <TextField
                                id="excluded_items"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L32}
                                onChange={this.handleChangeForGeneralInformation('L32')}
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
            </div >
        )
    }
}

const mapReduxStateToProps = reduxState => reduxState

export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory1));
