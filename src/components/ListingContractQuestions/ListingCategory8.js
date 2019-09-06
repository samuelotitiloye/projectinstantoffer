import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { checkBoolean, checkString } from '../helpers/valueCheckerHelpers'

//Material UI 
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { TextField, Radio, RadioGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

class ListingCategory8 extends Component {
    state = {
        id: this.props.match.params.id,
        answers: {
            L196: checkBoolean(this.props.listingAnswers.L196),
            L198: checkBoolean(this.props.listingAnswers.L198),
            COMPANY: checkString(this.props.listingAnswers.COMPANY),
            L237: checkString(this.props.listingAnswers.L237),
            BUYER_1_ADDRESS: checkString(this.props.listingAnswers.BUYER_1_ADDRESS),
            BUYER_1_PHONE: checkString(this.props.listingAnswers.BUYER_1_PHONE),
            BUYER_1_EMAIL: checkString(this.props.listingAnswers.BUYER_1_EMAIL),
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

    handleClickBack = () => {
        this.props.history.push(`/ListingCategory7/${this.state.id}`)
    }

    handleSaveButton = () => {
        this.props.dispatch({ type: 'SAVE_ANSWERS', payload: this.state })
        this.props.history.push(`/listing/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Agency Representation</h2>
                            </center>
                            <h4>Seller will agree to a dual agency representation and will consider offers made by buyers represented by Broker.</h4>
                            <RadioGroup
                                value={this.state.answers.L196}
                                onChange={this.handleChangeForInputs('L196')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="No" />
                            </RadioGroup>
                            <h4>Seller will not agree to a dual agency representation and will not consider offers made by buyers represented by Broker.</h4>
                            <RadioGroup
                                value={this.state.answers.L198}
                                onChange={this.handleChangeForInputs('L198')}>
                                <FormControlLabel value='true' control={<Radio color="primary" />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio color="primary" />} label="No" />
                            </RadioGroup>
                            <h4>Real Estate Company Name:</h4>
                            <TextField
                                id="name_real_estate"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.COMPANY}
                                onChange={this.handleChangeForInputs('COMPANY')}
                            />
                            <Grid item xs={12}>
                                <h4>Electronic Signatures:</h4>
                                <p>The parties agree the electronic signature of any party on any document related to this transaction constitute valid, binding signatures.</p>

                                <h4>Consent for communication:</h4>
                                <p>Seller authorizes Broker and its representatives to contract Seller by mail, phone, fax, email or other means of communication during the term of this Contract and anytime thereafter.</p>
                                <h4>Other:</h4>
                                <TextField
                                    id="other_communication_options"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.answers.L237}
                                    onChange={this.handleChangeForInputs('L237')}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <h2>SELLER'S INFORMATION</h2>
                            </center>
                            <Grid item xs={12}>
                                <h4>Seller's Address <i>(street address, city, state, zip code)</i></h4>
                                <TextField
                                    id="sellers_address"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.answers.BUYER_1_ADDRESS}
                                    onChange={this.handleChangeForInputs('BUYER_1_ADDRESS')}
                                />
                                <h4>Seller's Phone</h4>
                                <TextField
                                    id="sellers_phone"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.answers.BUYER_1_PHONE}
                                    onChange={this.handleChangeForInputs('BUYER_1_PHONE')}
                                />
                                <h4>Seller's Email</h4>
                                <TextField
                                    id="sellers_Email"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.answers.BUYER_1_EMAIL}
                                    onChange={this.handleChangeForInputs('BUYER_1_EMAIL')}
                                />
                            </Grid>
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
                                    onClick={this.handleClickBack}
                                    variant="contained"
                                    color="primary"
                                >
                                    Back
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div align="right" className="Button">
                                <Button
                                    onClick={this.handleSaveButton}
                                    variant="contained"
                                    color="primary"
                                >
                                    Save
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
export default connect(mapReduxStateToProps)(withRouter(ListingCategory8));
